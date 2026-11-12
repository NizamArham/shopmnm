#!/usr/bin/env node
/*
  Rebuilds js/data.js from the kashbymnm inventory database + the website sheet.

    node scripts/export-inventory.js          writes js/data.js
    node scripts/export-inventory.js --dry    shows what it would do, writes nothing

  The sheet (website-products.csv, in the M&M folder next to shopmnm) decides WHICH products
  go on the site and what they are called. Everything else comes from the inventory:
  price, sizes, colors, stock, sold status, category, gender and the Factory Outlet badge.
  Photos are whatever sits in the product's folder under images/products/.

  Customer-facing names/descriptions come ONLY from the sheet. The inventory's own product
  name and brand are never published. The script stops if a brand name slips into the sheet.
*/
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const DB = process.env.MM_DB || path.resolve(ROOT, "..", "kashbymnm", "server", "data", "mm-clothing.db");
const SHEET = process.env.MM_SHEET || path.resolve(ROOT, "..", "website-products.csv");
const OUT = path.join(ROOT, "js", "data.js");
const IMAGES_DIR = path.join(ROOT, "images", "products");
const DRY = process.argv.includes("--dry");

// Brand-ish words that must never appear in customer-facing text (the database's brand list is added to this).
const EXTRA_BLOCKED = [
  "BR", "SDry", "USP", "USPA", "Ribcage", "Ranger", "Talon", "Guide Pro", "F1", "Formula 1", "Superdry", "Super Dry",
  "Levis", "Levi's", "CK", "GAP", "TH", "UQ", "GP", "Banana Republic", "Calvin Klein", "Hawes", "Curtis", "Castore",
  "Uniqlo", "Gant", "Devred", "Crocodile", "Ellesse", "Lacoste", "Nike", "Tommy", "Hilfiger", "Wrangler",
];
const NOT_BRANDS = ["mix", "mix lot", "unknown", "man made"];

function die(msg) {
  console.error("\nSTOPPED: " + msg);
  process.exit(1);
}

function sqlite(sql) {
  const bin = fs.existsSync("/usr/bin/sqlite3") ? "/usr/bin/sqlite3" : "sqlite3";
  return execFileSync(bin, ["-readonly", "-separator", "\t", DB, sql], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 })
    .split("\n").filter(Boolean).map((l) => l.split("\t"));
}

function parseCSV(text) {
  text = text.replace(/^﻿/, "");
  const rows = [];
  let row = [], cell = "", quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') quoted = false;
      else cell += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") { row.push(cell); cell = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(cell); cell = "";
      if (row.some((x) => x.trim() !== "")) rows.push(row);
      row = [];
    } else cell += c;
  }
  row.push(cell);
  if (row.some((x) => x.trim() !== "")) rows.push(row);
  return rows;
}

const titleCase = (s) => s.trim().toLowerCase().replace(/(^|[\s\/-])([a-z])/g, (m, a, b) => a + b.toUpperCase());

const LETTER_ORDER = ["XXXS", "XXS", "XS", "S", "M", "L", "XL", "XXL", "2XL", "XXXL", "3XL", "4XL"];
function sizeKey(size) {
  const s = size.trim().toUpperCase();
  if (s === "ONE SIZE" || s === "OS") return [3, 0, 0, s];
  const num = s.match(/^(\d+(?:\.\d+)?)(?:\/(\d+(?:\.\d+)?))?/);
  if (num) return [0, parseFloat(num[1]), num[2] ? parseFloat(num[2]) : 0, s];
  const li = LETTER_ORDER.indexOf(s.split(" ")[0].replace(/^J(?=XS$|S$|M$|L$|XL$)/, ""));
  if (li >= 0) return [1, li, 0, s];
  return [2, 0, 0, s];
}
const compareSizes = (a, b) => {
  const x = sizeKey(a), y = sizeKey(b);
  for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] - y[i];
  return x[3].localeCompare(y[3]);
};

function findFolder(siteId) {
  const hits = [];
  (function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!e.isDirectory()) continue;
      const full = path.join(dir, e.name);
      if (e.name === siteId) hits.push(full);
      else walk(full);
    }
  })(IMAGES_DIR);
  if (hits.length > 1) die(`more than one photo folder named ${siteId}:\n  ${hits.join("\n  ")}`);
  return hits[0] || null;
}

function isRealImage(file) {
  const fd = fs.openSync(file, "r");
  const b = Buffer.alloc(12);
  fs.readSync(fd, b, 0, 12, 0);
  fs.closeSync(fd);
  const jpeg = b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff;
  const png = b[0] === 0x89 && b.slice(1, 4).toString() === "PNG";
  const webp = b.slice(0, 4).toString() === "RIFF" && b.slice(8, 12).toString() === "WEBP";
  const avif = b.slice(4, 8).toString() === "ftyp" && /^avi[fs]$/.test(b.slice(8, 12).toString());
  return jpeg || png || webp || avif;
}

function listImages(siteId) {
  const dir = findFolder(siteId);
  if (!dir) return [];
  return fs.readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f) && isRealImage(path.join(dir, f)))
    .sort((a, b) => {
      const na = parseInt(a, 10), nb = parseInt(b, 10);
      if (!isNaN(na) && !isNaN(nb) && na !== nb) return na - nb;
      return a.localeCompare(b, undefined, { numeric: true });
    })
    .map((f) => path.relative(ROOT, path.join(dir, f)).split(path.sep).join("/"));
}

// ---------- read the sheet ----------
if (!fs.existsSync(SHEET)) die(`sheet not found: ${SHEET}`);
const sheet = parseCSV(fs.readFileSync(SHEET, "utf8"));
const head = sheet.shift().map((h) => h.trim().toLowerCase());
const col = (name) => {
  const i = head.indexOf(name.toLowerCase());
  if (i < 0) die(`the sheet needs a column called "${name}"`);
  return i;
};
const C = {
  site: col("Site ID"), inv: col("Inventory ID"), color: col("Color"),
  name: col("Website name"), desc: col("Description"), publish: col("Publish"),
};
const wanted = sheet
  .map((r, i) => ({ line: i + 2, site: (r[C.site] || "").trim(), inv: (r[C.inv] || "").trim(), color: (r[C.color] || "").trim(),
    name: (r[C.name] || "").trim(), desc: (r[C.desc] || "").trim(), publish: (r[C.publish] || "").trim() }))
  .filter((r) => /^(yes|y|true|1)$/i.test(r.publish));

if (!wanted.length) die("no rows are marked Publish = Yes in the sheet");

// ---------- brand safety ----------
const dbBrands = sqlite("select distinct brand from products where brand is not null and trim(brand) <> ''").map((r) => r[0].trim());
const blocked = [...new Set([...dbBrands, ...EXTRA_BLOCKED])].filter((b) => b && !NOT_BRANDS.includes(b.toLowerCase()));
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const blockedRe = blocked.map((b) => ({ b, re: new RegExp("(^|[^A-Za-z0-9])" + esc(b) + "($|[^A-Za-z0-9])", "i") }));

const problems = [];
const seenIds = new Set();
wanted.forEach((r) => {
  if (!/^MM\d{3}$/.test(r.site)) problems.push(`row ${r.line}: Site ID "${r.site}" should look like MM011`);
  if (seenIds.has(r.site)) problems.push(`row ${r.line}: Site ID ${r.site} appears twice`);
  seenIds.add(r.site);
  if (!/^\d+$/.test(r.inv)) problems.push(`row ${r.line} (${r.site}): Inventory ID is missing`);
  if (!r.name) problems.push(`row ${r.line} (${r.site}): Website name is empty`);
  if (!r.desc) problems.push(`row ${r.line} (${r.site}): Description is empty`);
  ["name", "desc"].forEach((f) => {
    const hit = blockedRe.find((x) => x.re.test(r[f]));
    if (hit) problems.push(`row ${r.line} (${r.site}): the ${f === "name" ? "website name" : "description"} contains a brand name ("${hit.b}"): ${r[f]}`);
  });
});
if (problems.length) die("fix these in the sheet first:\n  - " + problems.join("\n  - "));

// ---------- read the inventory ----------
const products = {};
sqlite("select id, selling_price, product_type, category from products").forEach(([id, price, type, category]) => {
  products[id] = { price: Number(price), type, category };
});
const variants = {};
sqlite("select product_id, ifnull(color,''), ifnull(size,''), sum(status='available'), sum(status='sold') from inventory group by 1,2,3")
  .forEach(([pid, color, size, avail, sold]) => {
    (variants[pid] = variants[pid] || []).push({ color: color.trim(), size: size.trim(), avail: Number(avail), sold: Number(sold) });
  });

const GENDER = { Male: "Male", Female: "Female", Kids: "Kids", Unspecified: "Unisex" };
const out = [];
const report = [];

wanted.forEach((r) => {
  const p = products[r.inv];
  if (!p) die(`row ${r.line} (${r.site}): inventory ID ${r.inv} does not exist`);
  let cat = p.category, sub = "", gender = "Unspecified";
  let m = p.category.match(/^(.*?) \/ (.*) \((.*)\)$/);
  if (m) [, cat, sub, gender] = m;
  else if ((m = p.category.match(/^(.*?) \((.*)\)$/))) [, cat, gender] = m;

  let list = variants[r.inv] || [];
  if (r.color) list = list.filter((v) => v.color.toLowerCase() === r.color.toLowerCase());
  list = list.filter((v) => v.avail > 0 || v.sold > 0);
  if (!list.length) die(`row ${r.line} (${r.site}): no stock records found for inventory ID ${r.inv}${r.color ? " in color " + r.color : ""}`);

  // Tidy raw inventory values: "32.0" -> "32", "Unknown"/blank color -> "Other" (or no color at all), "Mix" -> "Assorted"
  const isBlankColor = (c) => c === "" || /^unknown$/i.test(c);
  const noColors = list.every((v) => isBlankColor(v.color));
  const colorName = (c) => (noColors ? "" : isBlankColor(c) ? "Other" : /^mix$/i.test(c) ? "Assorted" : titleCase(c));
  const sizeName = (z) => (z === "" ? "ONE SIZE" : /^mix$/i.test(z) ? "Assorted" : z.replace(/\.0+$/, ""));
  const merged = {};
  list.forEach((v) => {
    const key = colorName(v.color) + "\u0000" + sizeName(v.size);
    merged[key] = (merged[key] || 0) + v.avail;
  });
  const sizes = Object.entries(merged)
    .map(([key, stock]) => {
      const [color, size] = key.split("\u0000");
      return { size, ...(color ? { color } : {}), stock };
    })
    .sort((a, b) => (a.color || "").localeCompare(b.color || "") || compareSizes(a.size, b.size));
  const colors = [...new Set(sizes.map((s) => s.color).filter(Boolean))];
  const total = sizes.reduce((n, s) => n + s.stock, 0);
  const images = listImages(r.site);

  out.push({
    id: r.site,
    name: r.name,
    gender: GENDER[gender] || "Unisex",
    category: cat,
    subCategory: sub,
    price: p.price,
    description: r.desc,
    colors,
    sizes,
    badge: p.type === "FO" ? "Factory Outlet" : "",
    images,
  });
  report.push(`${r.site}  ${String(total).padStart(3)} in stock  ${String(images.length).padStart(1)} photo(s)  Rs ${String(p.price).padStart(5)}  ${r.name}`);
});

const header = `/*
  PRODUCT DATA — M&M Clothing catalog
  AUTO-GENERATED by scripts/export-inventory.js from the inventory + website-products.csv.
  Do not edit this file by hand: change the sheet (names/descriptions/which products) or the
  inventory (price/stock), then run:  node scripts/export-inventory.js
*/

`;
const text = header + "const PRODUCTS = " + JSON.stringify(out, null, 2) + ";\n";

console.log(report.join("\n"));
const withPhotos = out.filter((p) => p.images.length).length;
console.log(`\n${out.length} products, ${withPhotos} with photos, ${out.length - withPhotos} showing "Photo coming soon".`);

if (DRY) {
  console.log("Dry run: js/data.js was not changed.");
} else {
  fs.writeFileSync(OUT, text);
  console.log("Wrote js/data.js");
}
