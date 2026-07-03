# Deployment

## Overview

This blog is deployed to Cloudflare Pages. You connect Cloudflare Pages manually to the GitHub repository.

## GitHub Connection

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
2. Click "Create a project"
3. Select "Import from GitHub"
4. Authorize Cloudflare to access your GitHub repos
5. Select `neromorph/blog`
6. Configure project:
   - **Project name:** `blog` (or your preference)
   - **Production branch:** `main`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`

7. Click "Save and Deploy"

## Environment Variables

For production builds, set these in Cloudflare Pages → Settings → Environment Variables:

| Variable | Value |
|----------|-------|
| `SITE_URL` | `https://blog.nmrooms.biz.id` |

## Preview Deployments

Cloudflare Pages automatically creates preview deployments for pull requests.

Preview URL format: `https://[project-name].[hash].pages.dev`

## Manual Deployment

To deploy manually:

```bash
# Install Wrangler
npm install -g wrangler

# Deploy
wrangler pages deploy dist
```

## Rollback

To rollback:

1. Cloudflare Dashboard → Pages → Your project
2. Deployments tab
3. Find previous working deployment
4. Click "Promote to production"

## Caching

Cloudflare handles:
- Static assets: 1 year cache
- HTML: No cache (always fresh)
- CDN edge caching globally

## Troubleshooting

### Build fails

1. Check GitHub Actions logs for CI failures
2. Verify `npm run build` works locally
3. Check environment variables are set

### Deployment not updating

1. Check Cloudflare Pages deployment log
2. Verify build completed successfully
3. Clear Cloudflare cache if needed

### Preview not working

1. Ensure repo is connected in Cloudflare Pages
2. Check Cloudflare Pages integration settings
3. Verify Cloudflare GitHub app has repo access
