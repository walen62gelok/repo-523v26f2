#!/usr/bin/env bash
set -euo pipefail
label="${1:-}"
[[ -z "$label" ]] && { echo 'usage: scripts/savepoint.sh "label"' >&2; exit 1; }
slug="$(printf '%s' "$label" | tr '[:upper:] ' '[:lower:]-' | tr -cd 'a-z0-9-')"
stamp="$(date +%Y%m%d-%H%M)"
branch="backup/${stamp}-${slug}"; tag="savepoint-${stamp}-${slug}"
git branch "$branch"
git tag -a "$tag" -m "Save point: ${label} (at $(git rev-parse --short HEAD))"
git push origin "$branch"; git push origin "$tag"
echo "Roll back with: git reset --hard ${tag}"
