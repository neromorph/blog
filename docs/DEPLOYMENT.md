# Deployment

## Overview

This blog uses **Cloudflare Pages GitHub integration** for deployment. The CI workflow only handles testing, building, and security scanning — deployment happens automatically via Cloudflare Pages when you push to `main`.

## Cloudflare Pages Setup

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
2. Click "Create a project"
3. Select "Import from GitHub"
4. Authorize Cloudflare to access your GitHub repos
5. Select `neromorph/blog`
6. Configure:
   - **Project name:** `blog`
   - **Production branch:** `main`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`

7. Click "Save and Deploy"

## Environment Variables

Add in Cloudflare Pages → Settings → Environment Variables:

| Variable | Value |
|----------|-------|
| `SITE_URL` | `https://blog.nmrooms.biz.id` |

## Preview Deployments

Cloudflare Pages automatically creates preview deployments for all pull requests.

Preview URL: `https://blog.[hash].pages.dev`

## CI Workflow

The CI workflow runs on every push and PR:

1. **Build** — Type check and production build
2. **Validate** — Verify sitemap, robots.txt, and RSS exist
3. **Security** — npm audit and CodeQL analysis

Deployment is handled by Cloudflare Pages, not GitHub Actions.

## Manual Deployment

If needed, deploy manually:

```bash
npm run build
# Upload dist/ folder via Cloudflare Dashboard
```

## Rollback

1. Cloudflare Dashboard → Pages → blog
2. Deployments tab
3. Select previous deployment
4. Click "Promote to production"
