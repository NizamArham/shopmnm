# M&M Clothing — Catalog Site

A static, no-backend showcase catalog. Customers browse products, add items to
a bag, and send the bag as a WhatsApp message to place an order — there's no
online checkout or payment.

## Pages

- `index.html` — Home, with newest products
- `catalog.html` — Full catalog with filters (Men / Women / Unisex, category) and search
- `product.html?id=MM001` — Product detail page, opened by clicking any product card
- `about.html` — About / contact, with a direct WhatsApp link

## Adding or editing products

Everything lives in **`js/data.js`**. Copy an existing product block, give it a
new `id`, and fill in the fields — no other file needs to change. Field-by-field
notes are in the comment at the top of that file.

## Adding photos

1. Create a folder named after the product's `id` inside `images/products/`,
   e.g. `images/products/MM001/`.
2. Drop photos in there named `1.jpg`, `2.jpg`, `3.jpg`, etc.
3. In `js/data.js`, list them for that product:
   ```js
   images: ["images/products/MM001/1.jpg", "images/products/MM001/2.jpg"]
   ```
Until a product has images listed, a "Photo coming soon" placeholder is shown
automatically, so it's safe to publish products before their photos are ready.

## Changing the WhatsApp number

Open `js/cart.js` and edit the `WHATSAPP_NUMBER` constant at the top (no `+`
or leading `0` — country code then number).

## Running it locally

No build step or server required. Just open `index.html` in a browser, or for
a closer-to-production preview, run from this folder:
```
npx serve .
```

## Deploying

**Netlify (drag-and-drop):** go to app.netlify.com/drop and drag this whole
folder in.

**Netlify (connected to GitHub):** push this folder to the `shopmnm` repo (see
below), then in Netlify choose "Import an existing project" → pick the repo →
leave build command empty and publish directory as `/` (or `.`).

## Pushing this folder to GitHub

From inside this folder:
```
git init
git add .
git commit -m "Initial catalog site"
git branch -M main
git remote add origin https://github.com/NizamArham/shopmnm.git
git push -u origin main
```
If the repo already has content (e.g. a README created on GitHub), pull first:
```
git pull origin main --allow-unrelated-histories
```
then resolve any conflicts and push.
