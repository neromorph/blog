# AI Working Instructions

## Project Goal

Technical blog for Nur Mufid covering DevOps, Cloud Computing, Kubernetes, AWS, Linux, Docker, AI, Software Engineering, Productivity, and Career topics.

**Repository:** git@github.com:neromorph/blog.git

## Tech Stack

- Astro 7.x with TypeScript
- MDX for content
- Cloudflare Pages deployment
- Built-in SEO (sitemap, RSS, schema.org)

## Knowledge Source

This repository is NOT the only source of truth.

Before making architectural or implementation decisions, consult the external knowledge base indexed by Graphify.

The knowledge base contains:

- Architecture Decisions
- Product Decisions
- UX Research
- SEO Strategy
- Technical Notes
- Previous Discussions
- Development Roadmap
- Project Vision

Always search Graphify when:

- implementing a new feature
- changing architecture
- refactoring
- making UI decisions
- creating documentation
- answering "why" questions

Search Priority: Current repo → Graphify → Official docs → Internet

---

## Coding Standards

### Astro Components

- Use `.astro` for static components with minimal JS
- Keep client-side JS minimal - prefer Astro's zero-JS approach
- Use `is:inline` only when necessary

### TypeScript

- Enable strict mode
- Prefer `interface` over `type` for object shapes
- Export types used across files

### File Organization

```
src/
├── components/     # UI components
├── content/blog/   # Blog posts
├── layouts/        # Page layouts
├── lib/            # Utilities (posts, seo, pagination)
├── pages/          # Routes
└── styles/         # Global CSS
```

---

## SEO Rules

1. Every page must have unique `<title>` and `<meta name="description">`
2. Use canonical URLs for all pages
3. Include Open Graph tags for social sharing
4. Include JSON-LD schema for articles
5. Generate sitemap.xml automatically
6. Generate robots.txt
7. Generate RSS feed at /rss.xml
8. Use semantic HTML (article, header, nav, main, footer)

---

## Security Rules

1. **NEVER** commit secrets, tokens, API keys, or credentials
2. Use environment variables for all sensitive values
3. All secrets must be in GitHub Secrets or .env files (gitignored)
4. Use `PUBLIC_` prefix only for truly public values
5. Run `npm audit` regularly
6. Enable Dependabot for dependency updates

---

## Testing Rules

1. Test all Astro pages build without errors: `npm run build`
2. Verify all internal links work
3. Check sitemap generates correctly
4. Validate RSS feed is valid XML
5. Test in responsive viewports

---

## Deployment Rules

1. Main branch deploys to: https://blog.nmrooms.biz.id
2. All PRs get preview deployments
3. Deployment happens automatically via Cloudflare Pages
4. Never deploy from local - push to trigger deployment

---

## Documentation Rules

After completing significant work, update:

- `docs/ARCHITECTURE.md` - for architecture changes
- `docs/DEPLOYMENT.md` - for deployment changes
- `docs/SEO.md` - for SEO changes
- `CHANGELOG.md` - for all changes

Every major decision should create an ADR in `docs/ADR/`.

---

## Commit Rules

Use conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring
- `perf:` Performance improvement
- `test:` Adding tests
- `chore:` Maintenance

Example: `feat: add blog post about Kubernetes`

---

## AI Agent Guidelines

When working on this project:

1. Start with understanding the existing structure
2. Check AGENTS.md and docs/ for context
3. Follow coding standards strictly
4. Update relevant documentation after changes
5. Test before claiming completion
6. Use `/commit` to generate commit messages
7. When in doubt, ask clarifying questions first
