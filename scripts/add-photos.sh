#!/bin/bash
# Turn a folder of raw phone photos into website-ready photos for one product.
#
#   ./scripts/add-photos.sh MM011 ~/Desktop/raw-photos
#   ./scripts/add-photos.sh MM011 ~/Desktop/raw-photos --replace
#
# - finds the product's folder under images/products/ by its site ID
# - converts HEIC/PNG/WebP/AVIF/JPG to JPG, shrinks anything over 1400px, removes location data
# - names them 1.jpg, 2.jpg, ... in file-name order (shoot: front, back, close-up)
# - never touches your original photos; refuses to overwrite existing photos unless --replace

set -u
MAX=1400
QUALITY=85
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

die() { echo "Error: $*" >&2; exit 1; }

id="${1:-}"
src="${2:-}"
flag="${3:-}"

[ -n "$id" ] && [ -n "$src" ] || die "usage: ./scripts/add-photos.sh MM011 /path/to/raw-photos [--replace]"
[[ "$id" =~ ^MM[0-9]{3}$ ]] || die "site ID should look like MM011"
[ -d "$src" ] || die "photo folder not found: $src"
[ -z "$flag" ] || [ "$flag" = "--replace" ] || die "unknown option: $flag"
command -v sips >/dev/null || die "this script needs macOS (sips)"
command -v python3 >/dev/null || die "python3 not found"

dests=()
while IFS= read -r d; do dests+=("$d"); done < <(find "$ROOT/images/products" -type d -name "$id")
[ "${#dests[@]}" -eq 1 ] || die "expected exactly one folder named $id under images/products, found ${#dests[@]}"
dest="${dests[0]}"

files=()
while IFS= read -r f; do files+=("$f"); done < <(
  find "$src" -maxdepth 1 -type f ! -name '.*' \
    \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.heic' -o -iname '*.heif' \
       -o -iname '*.webp' -o -iname '*.avif' -o -iname '*.tif' -o -iname '*.tiff' \) | sort
)
[ "${#files[@]}" -gt 0 ] || die "no photos found in $src"

existing=0
while IFS= read -r f; do existing=$((existing + 1)); done < <(
  find "$dest" -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.webp' -o -iname '*.heic' -o -iname '*.avif' \)
)
if [ "$existing" -gt 0 ]; then
  [ "$flag" = "--replace" ] || die "$dest already has $existing photo(s). Run again with --replace to swap them."
  find "$dest" -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.webp' -o -iname '*.heic' -o -iname '*.avif' \) -delete
fi

made=()
n=1
for f in "${files[@]}"; do
  out="$dest/$n.jpg"
  w=$(sips -g pixelWidth "$f" 2>/dev/null | awk '/pixelWidth/ {print $2}')
  h=$(sips -g pixelHeight "$f" 2>/dev/null | awk '/pixelHeight/ {print $2}')
  resize=()
  if [ -n "$w" ] && [ -n "$h" ]; then
    big=$(( w > h ? w : h ))
    [ "$big" -gt "$MAX" ] && resize=(-Z "$MAX")
  fi
  if sips -s format jpeg -s formatOptions "$QUALITY" ${resize[@]+"${resize[@]}"} "$f" --out "$out" >/dev/null 2>&1; then
    made+=("$out")
    n=$((n + 1))
  else
    echo "Skipped (could not read): $f"
  fi
done

[ "${#made[@]}" -gt 0 ] || die "none of the photos could be converted"
python3 "$ROOT/scripts/scrub_jpeg.py" "${made[@]}" || die "could not remove location data"

echo "$id: ${#made[@]} photo(s) saved to ${dest#$ROOT/}"
for m in "${made[@]}"; do
  kb=$(( $(wc -c < "$m") / 1024 ))
  echo "  $(basename "$m")  ${kb} KB"
done
echo "Location data removed. Your original photos were not changed."
