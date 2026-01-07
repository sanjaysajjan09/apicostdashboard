#!/bin/bash
# Complete script to create GitHub repository and push code

set -e

REPO_NAME="apicostdashboard"
GITHUB_USER="ssajjan"

echo "🚀 Setting up GitHub repository: $REPO_NAME"
echo ""

# Check if authenticated
if ! gh auth status &>/dev/null; then
    echo "⚠️  GitHub CLI authentication required"
    echo ""
    echo "Please run one of the following:"
    echo "1. gh auth login (interactive)"
    echo "2. export GH_TOKEN=your_token (non-interactive)"
    echo ""
    echo "Then run this script again, or run:"
    echo "  gh repo create $REPO_NAME --public --source=. --remote=origin --push"
    exit 1
fi

# Ensure we're on main branch
git branch -M main 2>/dev/null || true

# Create repository and push
echo "📦 Creating repository on GitHub..."
gh repo create $REPO_NAME --public --source=. --remote=origin --push

echo ""
echo "✅ Repository created and code pushed successfully!"
echo "📍 Repository URL: https://github.com/$GITHUB_USER/$REPO_NAME"

