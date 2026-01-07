#!/bin/bash
# Script to create GitHub repository and push code

REPO_NAME="apicostdashboard"
GITHUB_USER="ssajjan"

echo "To create the repository and push the code, you have two options:"
echo ""
echo "Option 1: Create repository via GitHub web interface"
echo "1. Go to: https://github.com/new"
echo "2. Repository name: $REPO_NAME"
echo "3. Set visibility (public/private)"
echo "4. Click 'Create repository'"
echo "5. Then run: git push -u origin main"
echo ""
echo "Option 2: Create repository via GitHub CLI (if installed)"
echo "gh repo create $REPO_NAME --public --source=. --remote=origin --push"
echo ""
echo "Option 3: Create repository via GitHub API (requires token)"
echo "curl -X POST -H 'Authorization: token YOUR_TOKEN' \\"
echo "  -H 'Accept: application/vnd.github.v3+json' \\"
echo "  https://api.github.com/user/repos \\"
echo "  -d '{\"name\":\"$REPO_NAME\",\"description\":\"API Cost Dashboard\",\"private\":false}'"
echo ""
echo "Current remote URL:"
git remote -v
echo ""
echo "Current branch:"
git branch
echo ""
echo "To push after creating the repo:"
echo "git push -u origin main"

