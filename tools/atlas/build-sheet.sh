#!/usr/bin/env bash
# Build one Atlas page with bloom-sheet's plant grower in the calligraphic look.
#   build-sheet.sh <canon note .md> <proposal .md> <out.pdf|png> [bloom-sheet options]
# bloom-sheet is the Eureka skill's tool, run unmodified: its two scripts are copied beside our page.tex in a scratch
# directory, so the skill's page.tex (neon) is never used and never edited. Needs the same packages as bloom-sheet.
set -euo pipefail
canon=$(realpath "$1"); proposal=$(realpath "$2"); out=$(realpath -m "$3"); shift 3
here=$(cd "$(dirname "$0")" && pwd)
skill=$(dirname "$(readlink -f "$(command -v bloom-sheet)")")
commit=$(git -C "$(dirname "$canon")" rev-parse --short HEAD)
work=$(mktemp -d); trap 'rm -rf "$work"' EXIT
cp "$skill/bloom_sheet.py" "$skill/grow.py" "$work/"
cp "$here/calligraphic-page.tex" "$work/page.tex"
(cd "$(dirname "$canon")" && python3 "$here/assemble.py" "$canon" "$proposal" "$commit") > "$work/sheet.md"
python3 "$work/bloom_sheet.py" "$work/sheet.md" -o "$out" "$@"
