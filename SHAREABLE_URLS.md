# 🚀 Shareable Application URLs

## For Your Teammates

### Main Dashboard (Combined View)
**Primary URL**: Use Coder's "Launch Application" feature
- Open your Coder workspace
- Click "Launch Application" 
- Select "Next.js App"

**Direct Access** (if port forwarding is configured):
- Replace `<workspace-url>` with your Coder workspace URL
- Format: `https://<workspace-url>/3000/techopsdashboard`

### Individual Dashboards

1. **Publisher API Cost Analysis**
   - URL: `https://<workspace-url>/3000/publisher-cost-analysis`

2. **Indeed Last Successful Stats Fetch**
   - URL: `https://<workspace-url>/3000/last-stats-sync-status`

### API Endpoints (for testing)

- Health Check: `https://<workspace-url>/5001/health`
- Snowflake Health: `https://<workspace-url>/5001/health/snowflake`

---

## How to Find Your Workspace URL

1. **In Coder Dashboard**:
   - Go to your workspace settings
   - Look for "Workspace URL" or "Access URL"
   - Format is typically: `<workspace-name>.<coder-domain>`

2. **From Workspace**:
   - Check environment variables: `echo $CODER_WORKSPACE_URL`
   - Or check Coder dashboard for port forwarding information

---

## Quick Share Template

Copy and share this with your teammates:

```
🚀 TechOps Dashboard

Main Dashboard: https://<workspace-url>/3000/techopsdashboard

Features:
- Publisher API Cost Analysis
- Indeed Last Successful Stats Fetch
- Month/Year filtering
- Data export (CSV download)
- Sorting and pagination

Note: Replace <workspace-url> with your actual Coder workspace URL
```

---

**Status**: ✅ Application is running and ready to share
**Last Updated**: 2025-01-07

## Current Deployment Status

✅ **Next.js Frontend**: Running on port 3000
✅ **Python API Server**: Running on port 5001  
✅ **Snowflake Connection**: Connected (Version 9.39.2)

## Access URLs

### Using Coder's "Launch Application" Feature (Recommended)
1. Open your Coder workspace
2. Click "Launch Application" button
3. Select "Next.js App" to access the dashboard

### Direct URLs
Based on your workspace hostname: `techopsdashboard-<workspace-id>`

**Main Dashboard (Combined View)**:
- URL: `http://localhost:3000/techopsdashboard`
- Access via Coder port forwarding: `https://<your-workspace-url>/3000/techopsdashboard`

**Individual Dashboards**:
- Publisher API Cost Analysis: `http://localhost:3000/publisher-cost-analysis`
- Indeed Last Successful Stats Fetch: `http://localhost:3000/last-stats-sync-status`

**API Endpoints**:
- Health Check: `http://localhost:5001/health`
- Snowflake Health: `http://localhost:5001/health/snowflake` ✅ Connected
