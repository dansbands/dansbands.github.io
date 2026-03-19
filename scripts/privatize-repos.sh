#!/usr/bin/env bash
# privatize-repos.sh
#
# Makes all GitHub repos private except a provided allowlist.
#
# Prerequisites:
#   gh auth login  (needs the `repo` scope)
#
# Usage:
#   chmod +x privatize-repos.sh
#   ./privatize-repos.sh
#
# To do a dry run (print repos that would be privatized without changing them):
#   DRY_RUN=true ./privatize-repos.sh

set -euo pipefail

GITHUB_USER="dansbands"

# Repos to keep public — edit this list before running.
ALLOWLIST=(
  "dansbands.github.io"
  "ai-todo-list"
  "agentic-product-starter"
)

DRY_RUN="${DRY_RUN:-false}"

# ── helpers ──────────────────────────────────────────────────────────────────

is_allowed() {
  local repo="$1"
  for allowed in "${ALLOWLIST[@]}"; do
    [[ "$repo" == "$allowed" ]] && return 0
  done
  return 1
}

# ── main ─────────────────────────────────────────────────────────────────────

echo "Fetching repos for @${GITHUB_USER}..."

# gh repo list returns <owner>/<name>; strip the owner prefix.
mapfile -t ALL_REPOS < <(
  gh repo list "$GITHUB_USER" \
    --limit 200 \
    --json name \
    --jq '.[].name'
)

echo "Found ${#ALL_REPOS[@]} repos total."
echo "Allowlist: ${ALLOWLIST[*]}"
echo ""

PRIVATIZED=()
SKIPPED=()

for repo in "${ALL_REPOS[@]}"; do
  if is_allowed "$repo"; then
    SKIPPED+=("$repo")
    echo "  KEEP PUBLIC  → $repo"
  else
    PRIVATIZED+=("$repo")
    if [[ "$DRY_RUN" == "true" ]]; then
      echo "  [DRY RUN]    → would privatize: $repo"
    else
      echo "  PRIVATIZING  → $repo"
      gh repo edit "${GITHUB_USER}/${repo}" --visibility private --accept-visibility-change-consequences
    fi
  fi
done

echo ""
echo "────────────────────────────────────"
echo "Summary"
echo "  Kept public:  ${#SKIPPED[@]}   (${SKIPPED[*]:-none})"
if [[ "$DRY_RUN" == "true" ]]; then
  echo "  Would privatize: ${#PRIVATIZED[@]}"
else
  echo "  Privatized:   ${#PRIVATIZED[@]}"
fi
echo "────────────────────────────────────"
