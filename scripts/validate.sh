#!/usr/bin/env bash
set -euo pipefail
fail() { echo "::error::$1"; exit 1; }
warn() { echo "::warning::$1"; }
[ -f stage-gates.yaml ] || fail "stage-gates.yaml missing"
grep -q '^gates:' stage-gates.yaml || fail "stage-gates.yaml missing gates section"
N=$(grep -c '^  - id: ' stage-gates.yaml)
[ "$N" -ge 7 ] || fail "gate count $N less than 7"
for k in name checklist artifact; do
  C=$(grep -c "^    $k:" stage-gates.yaml)
  [ "$C" -eq "$N" ] || fail "field $k count $C mismatch gates $N"
done
[ -s SKILL.md ] || warn "SKILL.md missing (pre-existing file)"
for f in references/ui-ux-brief.md references/backend-guide.md references/qa-checklist.md references/deploy-options.md; do
  [ -s "$f" ] || warn "$f missing (pre-existing file)"
done
echo "OK: web-delivery-team validated: $N gates"
