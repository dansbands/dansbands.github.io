#!/usr/bin/env bash

# Setup
# - Install GitHub CLI if needed: https://cli.github.com/
# - Authenticate once: gh auth login
# - Run from the repo root: bash scripts/create-issues.sh

set -euo pipefail

OWNER="dansbands"
ROOT_DIR="$(git rev-parse --show-toplevel)"
ISSUES_DIR="$ROOT_DIR/github-issues"

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI is not installed. Install it from https://cli.github.com/ and try again."
  exit 1
fi

if [[ ! -d "$ISSUES_DIR" ]]; then
  echo "Missing issue directory: $ISSUES_DIR"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "GitHub CLI is not authenticated. Run: gh auth login"
  exit 1
fi

REPO_NAME="$(gh repo view --json name --jq '.name')"
REPO="$OWNER/$REPO_NAME"

echo "Creating issues in $REPO"

created_count=0

for file in "$ISSUES_DIR"/*.md; do
  [[ -e "$file" ]] || continue

  title="$(sed -n 's/^Title: //p' "$file" | head -n 1)"

  if [[ -z "$title" ]]; then
    echo "Skipping $(basename "$file") because it has no Title: line"
    continue
  fi

  body_file="$(mktemp)"
  trap 'rm -f "$body_file"' EXIT
  tail -n +3 "$file" > "$body_file"

  gh issue create \
    --repo "$REPO" \
    --title "$title" \
    --body-file "$body_file"

  rm -f "$body_file"
  trap - EXIT

  created_count=$((created_count + 1))
done

echo "Done. Created $created_count issues in $REPO"