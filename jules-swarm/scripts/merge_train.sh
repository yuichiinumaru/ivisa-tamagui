#!/bin/bash

# merge_train.sh
# Automates matching and merging of Pull Requests.
# Usage: ./scripts/merge_train.sh

set -e

echo "🚂 Starting the Merge Train (Oldest -> Newest)..."

# Ensure gh is installed
if ! command -v gh &> /dev/null; then
    echo "❌ Error: GitHub CLI (gh) is not installed."
    exit 1
fi

# 1. Get list of open PR numbers, sorted by created date (oldest first)
# --limit 100 ensures we get a large batch
# We filter for PRs that are NOT drafts if possible, but state=open includes drafts.
# Logic: We attempt to merge. if it fails, we skip.
# Note: Using jq for sorting as --sort flag is not available in all gh versions
PR_LIST=$(gh pr list --state open --limit 100 --json number,createdAt --jq 'sort_by(.createdAt) | .[].number')

if [ -z "$PR_LIST" ]; then
    echo "✅ No open PRs to process."
    exit 0
fi

COUNT=0
TOTAL=$(echo "$PR_LIST" | wc -w)

echo "📋 Found $TOTAL open PRs."

# 2. Iterate over each PR
for PR in $PR_LIST; do
    COUNT=$((COUNT+1))
    echo "---------------------------------------------------"
    echo "🔨 Processing PR #$PR ($COUNT/$TOTAL)..."

    # Ensure PR is ready for review (not draft)
    # capturing output to avoid noise, ignoring error if already ready
    gh pr ready "$PR" &>/dev/null || true

    # Attempt Squash Merge
    # --delete-branch: deletes remote branch after success
    # --auto: enables auto-merge if checks are pending (optional, using direct match here)
    
    # We use '|| true' to prevent script exit on failure, allowing us to catch the error
    if gh pr merge "$PR" --squash --delete-branch; then
        echo "✅ Success! PR #$PR merged and branch deleted."
    else
        echo "⚠️  Conflict or CI Error on PR #$PR. Skipping..."
        # Checking if it's a conflict
        # gh pr view "$PR" --json mergeable --jq '.mergeable'
    fi
    
    # Optional: fast sleep to be nice to API
    sleep 1
done

echo "---------------------------------------------------"
echo "🏁 End of line. Remaining PRs require manual attention."
