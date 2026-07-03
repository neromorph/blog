# Deployment

## Overview

This blog deploys to Cloudflare Pages using GitHub Actions.

## Two Deployment Options

### Option A: GitHub Integration (Recommended)

Connect Cloudflare Pages directly to GitHub:

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
2. Create Project → Import from GitHub
3. Configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`

Cloudflare Pages auto-builds on every push to `main`.

### Option B: GitHub Actions (Full Control)

Use the included CI workflow that deploys via `cloudflare/pages-action`.

**Required GitHub Secrets:**

| Secret | Description |
|--------|-------------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with Pages edit permission |
| `CLOUDFLARE_ACCOUNT_ID` | Found in Cloudflare Dashboard URL |
| `CLOUDFLARE_PROJECT_NAME` | Your Cloudflare Pages project name |

**Create API Token:**
1. Cloudflare Dashboard → My Profile → API Tokens
2. Create Custom Token
3. Account permissions: `Cloudflare Pages: Edit`
4. Copy token to GitHub Secrets

## Preview Deployments

- **GitHub Integration:** Auto-creates preview URLs for PRs
- **GitHub Actions:** Currently production-only (modify workflow for PR previews)

## Environment Variables

Set in GitHub Secrets or Cloudflare Pages settings:

| Variable | Value |
|----------|-------|
| `SITE_URL` | `https://blog.nmrooms.biz.id` |

## Manual Deployment

```bash
npm run build
# Upload dist/ folder via Cloudflare Dashboard
```

## Troubleshooting

### Build fails on Cloudflare but works locally

- Verify Node.js version matches (Cloudflare uses Node 18+)
- Check all dependencies are in `dependencies`, not `devDependencies`

### Deployment not updating

1. Check GitHub Actions logs
2. Verify secrets are set correctly
3. Check Cloudflare Pages deployment history
