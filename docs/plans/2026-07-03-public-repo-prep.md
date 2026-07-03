# Public Repository Preparation Implementation Plan

> **For agentic workers:** Use subagent-driven-development or execute tasks inline. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Prepare the Astro blog for high-quality public GitHub repository with security, automation, and deployment best practices.

**Architecture:** Modular GitHub Actions workflows, comprehensive documentation, security scanning, and developer experience improvements. Cloudflare Pages deployment with GitHub integration.

**Tech Stack:** Astro, GitHub Actions, Cloudflare Pages, Dependabot, CodeQL, TypeScript

## Global Constraints

- Repo: `git@github.com:neromorph/blog.git`
- License: MIT
- Node.js: Use existing version from environment
- No paid tools - free GitHub features only
- Never commit secrets

---

## File Structure

```
.github/
├── workflows/
│   ├── ci.yml           # Main CI pipeline
│   └── deploy.yml       # Cloudflare Pages deployment
├── dependabot.yml       # Dependency updates config
├── ISSUE_TEMPLATE/      # Issue templates
│   ├── bug_report.yml
│   ├── feature_request.yml
│   └── documentation.yml
└── PULL_REQUEST_TEMPLATE.md
docs/
├── plans/
│   └── 2026-07-03-public-repo-prep.md
├── ARCHITECTURE.md
├── DEPLOYMENT.md
├── SECURITY.md
├── SEO.md
└── CONTENT_WORKFLOW.md
.env.example
.editorconfig
.gitignore
LICENSE
README.md
CONTRIBUTING.md
CODE_OF_CONDUCT.md
SECURITY.md
CHANGELOG.md
AGENTS.md (update existing)
package.json (update)
```

---

### Task 1: Repository Foundation Files

**Files:**
- Create: `README.md`, `LICENSE`, `.gitignore`, `.editorconfig`
- Modify: `AGENTS.md` (update)

**Context:** Basic repository documentation and configuration

- [ ] **Step 1: Create README.md**

```markdown
# Nur Mufid's Blog

A high-performance technical blog built with Astro, focused on DevOps, Cloud Computing, and Software Engineering.

## Tech Stack

- **Framework:** Astro 7.x
- **Content:** Markdown/MDX
- **Hosting:** Cloudflare Pages
- **SEO:** Built-in Astro SEO with sitemap, RSS, and schema.org support
- **Type Safety:** TypeScript with Astro check

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Type check and production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run typecheck` | Run Astro type check |
| `npm run check` | Run all checks (lint, typecheck, build) |

## Project Structure

```
src/
├── components/     # Astro components
├── content/        # Blog posts (Markdown/MDX)
├── layouts/        # Page layouts
├── lib/            # Utilities (posts, SEO, pagination)
├── pages/          # Astro pages and routes
└── styles/         # Global CSS
```

## Deployment

This site deploys automatically to Cloudflare Pages on every push to `main`.

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for details.

## Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT - see [LICENSE](LICENSE)
```

- [ ] **Step 2: Create LICENSE**

```markdown
MIT License

Copyright (c) 2024 Nur Mufid

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

- [ ] **Step 3: Create .gitignore**

```
# Build output
dist/
.output/

# Dependencies
node_modules/

# Environment
.env
.env.local
.env.*.local

# IDE
.vscode/settings.json
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Cache
.cache/
.eslintcache
.mise.toml

# Astro
.astro/
```

- [ ] **Step 4: Create .editorconfig**

```ini
# EditorConfig is awesome: https://EditorConfig.org

root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.{js,ts,jsx,tsx,mjs,cjs,astro}]
indent_style = space
indent_size = 2

[*.{json,yml,yaml}]
indent_style = space
indent_size = 2

[*.md]
trim_trailing_whitespace = false
```

- [ ] **Step 5: Update AGENTS.md**

```markdown
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
├── content/blog/    # Blog posts
├── layouts/         # Page layouts
├── lib/             # Utilities (posts, seo, pagination)
├── pages/           # Routes
└── styles/          # Global CSS
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
```

- [ ] **Step 6: Commit**

```bash
git add README.md LICENSE .gitignore .editorconfig AGENTS.md
git commit -m "docs: add repository foundation files"
```

---

### Task 2: Community and Security Documentation

**Files:**
- Create: `CHANGELOG.md`, `SECURITY.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`

- [ ] **Step 1: Create CHANGELOG.md**

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Repository hygiene and documentation
- GitHub Actions CI/CD pipeline
- Security scanning with Dependabot and CodeQL

## [1.0.0] - 2024-01-01

### Added
- Initial blog release
- Astro framework setup
- SEO features (sitemap, RSS, JSON-LD)
- Markdown/MDX support
```

- [ ] **Step 2: Create SECURITY.md**

```markdown
# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please report it via:

1. **GitHub Security Advisories:** Use the "Report a vulnerability" button on the Security tab
2. **Email:** Send details to the maintainer (if publicly listed)

Please include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

## Security Best Practices

This project follows these security practices:

- Dependencies updated via Dependabot
- Regular `npm audit` runs in CI
- No secrets committed to repository
- Environment variables for sensitive configuration
- Cloudflare Pages for secure hosting

## Known Considerations

- This is a static blog - no user authentication or database
- All content is publicly visible
- Environment variables prefixed with `PUBLIC_` are public by design
```

- [ ] **Step 3: Create CONTRIBUTING.md**

```markdown
# Contributing Guide

Thank you for your interest in contributing!

## How to Contribute

### Reporting Issues

- Use GitHub Issues for bugs and feature requests
- Check existing issues before creating duplicates
- Include reproduction steps for bugs
- Use issue templates when available

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make your changes
4. Run checks: `npm run check`
5. Commit: `npm run commit` (or use conventional commits)
6. Push and open a Pull Request

### Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/blog.git
cd blog

# Add upstream
git remote add upstream https://github.com/neromorph/blog.git

# Install dependencies
npm install

# Start dev server
npm run dev
```

### Code Style

- Follow `.editorconfig` settings
- Run `npm run format` before committing
- Use TypeScript properly
- Keep Astro components simple

### Testing

Before submitting:

```bash
npm run check  # Run all checks
npm run build  # Verify build
```

### Content Contributions

For blog posts:

1. Create file in `src/content/blog/` as `your-post-slug.mdx`
2. Add frontmatter (see existing posts for format)
3. Test locally

Frontmatter format:

```yaml
---
title: Your Post Title
description: A brief description (max 180 chars)
publishedDate: 2024-01-01
author: Your Name
tags: [Tag1, Tag2]
category: Your Category
draft: false
featured: false
---
```

## Questions?

Feel free to open a discussion or issue.
```

- [ ] **Step 4: Create CODE_OF_CONDUCT.md**

```markdown
# Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone.

## Our Standards

Examples of behavior that contributes to a positive environment:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior:

- Trolling, insulting/derogatory comments, personal attacks
- Public or private harassment
- Publishing others' private information without permission
- Other conduct which could reasonably be considered inappropriate

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported to the community leaders responsible for enforcement.

All complaints will be reviewed and investigated promptly and fairly.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant](https://www.contributor-covenant.org/),
version 2.1.
```

- [ ] **Step 5: Commit**

```bash
git add CHANGELOG.md SECURITY.md CONTRIBUTING.md CODE_OF_CONDUCT.md
git commit -m "docs: add community and security documentation"
```

---

### Task 3: GitHub Configuration Files

**Files:**
- Create: `.github/dependabot.yml`, `.github/ISSUE_TEMPLATE/*.yml`, `.github/PULL_REQUEST_TEMPLATE.md`
- Create: `.github/workflows/ci.yml`, `.github/workflows/deploy.yml`

- [ ] **Step 1: Create .github/dependabot.yml**

```yaml
# Dependabot configuration
# https://docs.github.com/en/code-security/dependabot/dependabot-version-updates

version: 2
updates:
  # Enable npm dependency updates
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      day: "sunday"
      time: "09:00"
    open-pull-requests-limit: 10
    commit-message:
      prefix: "deps"
    labels:
      - "dependencies"
    reviewers:
      - "neromorph"
    groups:
      astro:
        patterns:
          - "@astrojs/*"
          - "astro"
      rehype:
        patterns:
          - "rehype-*"

  # Also check GitHub Actions
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "weekly"
    commit-message:
      prefix: "ci"
```

- [ ] **Step 2: Create .github/ISSUE_TEMPLATE/bug_report.yml**

```yaml
name: Bug Report
description: Report a bug to help us improve
title: "[Bug]: "
labels: ["bug"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this bug report!
  - type: textarea
    id: description
    attributes:
      label: Bug Description
      description: A clear and concise description of what the bug is.
      placeholder: Describe the bug here
    validations:
      required: true
  - type: textarea
    id: steps
    attributes:
      label: Steps to Reproduce
      description: Steps to reproduce the behavior.
      placeholder: |
        1. Go to '...'
        2. Click on '...'
        3. See error
    validations:
      required: true
  - type: textarea
    id: expected
    attributes:
      label: Expected Behavior
      description: What you expected to happen.
    validations:
      required: true
  - type: textarea
    id: actual
    attributes:
      label: Actual Behavior
      description: What actually happened.
    validations:
      required: true
  - type: input
    id: environment
    attributes:
      label: Environment
      description: "OS, Browser, Node version, etc."
      placeholder: "e.g., macOS 14, Chrome 120, Node 20"
  - type: checkboxes
    id: checkbox
    attributes:
      label: Checklist
      options:
        - label: I have searched the existing issues
          required: true
        - label: I can reproduce with the latest version
          required: true
```

- [ ] **Step 3: Create .github/ISSUE_TEMPLATE/feature_request.yml**

```yaml
name: Feature Request
description: Suggest an idea for this project
title: "[Feature]: "
labels: ["enhancement"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for your feature request! Please describe what you'd like to see.
  - type: textarea
    id: feature
    attributes:
      label: Feature Description
      description: A clear and concise description of the feature.
      placeholder: Describe the feature
    validations:
      required: true
  - type: textarea
    id: problem
    attributes:
      label: Problem Solved
      description: What problem does this solve?
      placeholder: Describe the problem
  - type: textarea
    id: alternatives
    attributes:
      label: Alternatives Considered
      description: Any alternative solutions you've considered.
  - type: checkboxes
    id: checkbox
    attributes:
      label: Checklist
      options:
        - label: I have searched existing issues
          required: true
        - label: This is a new feature, not a refactoring request
          required: true
```

- [ ] **Step 4: Create .github/ISSUE_TEMPLATE/documentation.yml**

```yaml
name: Documentation Request
description: Improve documentation
title: "[Docs]: "
labels: ["documentation"]
body:
  - type: textarea
    id: current
    attributes:
      label: Current Documentation
      description: What documentation needs improvement?
      placeholder: Link to or describe current docs
    validations:
      required: true
  - type: textarea
    id: improvement
    attributes:
      label: Suggested Improvement
      description: How should it be improved?
    validations:
      required: true
  - type: textarea
    id: reason
    attributes:
      label: Reason
      description: Why is this documentation important?
```

- [ ] **Step 5: Create .github/PULL_REQUEST_TEMPLATE.md**

```markdown
## Summary

<!-- Brief description of what this PR does -->

## Changes

<!-- List of changes made -->

- [ ] 

## Screenshots

<!-- Include screenshots for UI changes -->

## Impact

- [ ] **SEO impact:** (Will this affect search rankings? Link checks? Sitemap?)
- [ ] **Accessibility impact:** (Will this affect screen readers? Keyboard navigation?)
- [ ] **Security impact:** (Any security considerations?)

## Testing Checklist

- [ ] `npm run check` passes
- [ ] `npm run build` succeeds
- [ ] `npm run lint` passes
- [ ] TypeScript types are correct
- [ ] New blog posts build without errors

## Related Issues

<!-- Link related issues: Fixes #123 -->

## Additional Notes

<!-- Any other context reviewers should know -->
```

- [ ] **Step 6: Commit GitHub templates**

```bash
git add .github/dependabot.yml .github/ISSUE_TEMPLATE/ .github/PULL_REQUEST_TEMPLATE.md
git commit -m "ci: add GitHub templates and Dependabot config"
```

---

### Task 4: GitHub Actions CI Workflow

**Files:**
- Create: `.github/workflows/ci.yml`

- [ ] **Step 1: Create .github/workflows/ci.yml**

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  quality:
    name: Quality Checks
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Type check
        run: npm run typecheck

      - name: Lint
        run: npm run lint

      - name: Format check
        run: npm run format:check

  build:
    name: Build
    runs-on: ubuntu-latest
    needs: quality
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          SITE_URL: https://blog.nmrooms.biz.id

      - name: Upload build
        uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist
          retention-days: 7

  validate:
    name: Validate Output
    runs-on: ubuntu-latest
    needs: build
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Download build
        uses: actions/download-artifact@v4
        with:
          name: dist
          path: dist

      - name: Validate sitemap
        run: test -f dist/sitemap-0.xml && echo "sitemap.xml exists"

      - name: Validate robots.txt
        run: test -f dist/robots.txt && echo "robots.txt exists"

      - name: Validate RSS
        run: test -f dist/rss.xml && echo "rss.xml exists"

  security:
    name: Security Audit
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: npm audit
        run: npm audit --audit-level=high
        continue-on-error: true

      - name: Run CodeQL
        uses: github/codeql-action/analyze@v3
        with:
          languages: ['typescript']
          category: "/language:typescript"
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/ci.yml
git commit -m "ci: add GitHub Actions CI workflow"
```

---

### Task 5: GitHub Actions Deploy Workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create .github/workflows/deploy.yml**

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

concurrency:
  group: deploy
  cancel-in-progress: false

jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          SITE_URL: https://blog.nmrooms.biz.id

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: ${{ secrets.CLOUDFLARE_PROJECT_NAME }}
          directory: dist
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
          wranglerVersion: '3'

  preview:
    name: Preview Deploy
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request'
    permissions:
      contents: read
      deployments: write
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          SITE_URL: ${{ secrets.SITE_URL }}

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: ${{ secrets.CLOUDFLARE_PROJECT_NAME }}
          directory: dist
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
          wranglerVersion: '3'
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: add Cloudflare Pages deployment workflow"
```

---

### Task 6: Environment and Documentation

**Files:**
- Create: `.env.example`, `docs/ARCHITECTURE.md`, `docs/DEPLOYMENT.md`, `docs/SECURITY.md`, `docs/SEO.md`, `docs/CONTENT_WORKFLOW.md`, `docs/ADR/0001-use-astro.md`

- [ ] **Step 1: Create .env.example**

```markdown
# Cloudflare Pages Deployment
CLOUDFLARE_API_TOKEN=your_api_token_here
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
CLOUDFLARE_PROJECT_NAME=blog
SITE_URL=https://blog.nmrooms.biz.id

# Optional: Cloudflare Analytics
PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN=your_analytics_token_here
```

- [ ] **Step 2: Create docs/ARCHITECTURE.md**

```markdown
# Architecture

## Overview

This is a static Astro blog deployed to Cloudflare Pages. The site is pre-rendered at build time for optimal performance.

## Tech Stack

- **Astro 7.x** - Static site generator
- **TypeScript** - Type safety
- **MDX** - Markdown with components
- **Cloudflare Pages** - Hosting and CDN

## Directory Structure

```
/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PostCard.astro
│   │   └── Breadcrumbs.astro
│   ├── content/
│   │   └── blog/        # Blog posts (MDX/Markdown)
│   ├── layouts/
│   │   └── BaseLayout.astro  # Main page template
│   ├── lib/             # Utilities
│   │   ├── posts.ts     # Post fetching and utilities
│   │   ├── seo.ts       # SEO helpers and JSON-LD
│   │   ├── pagination.ts # Pagination logic
│   │   └── site.ts      # Site configuration
│   ├── pages/           # Routes
│   │   ├── index.astro  # Homepage
│   │   ├── blog/        # Blog listing and posts
│   │   ├── categories/  # Category pages
│   │   ├── tags/        # Tag pages
│   │   ├── archive.astro
│   │   ├── search.astro
│   │   ├── rss.xml.ts   # RSS feed
│   │   └── robots.txt.ts
│   └── styles/
│       └── global.css   # Global styles
├── public/              # Static assets
├── docs/                # Documentation
└── .github/             # GitHub configuration
```

## Content Model

Blog posts use Astro Content Collections with Zod schema validation:

```typescript
{
  title: string,
  description: string (max 180 chars),
  publishedDate: Date,
  updatedDate?: Date,
  author: string (default: "Nur Mufid"),
  tags: string[],
  category: string,
  coverImage?: string,
  draft: boolean (default: false),
  featured: boolean (default: false),
  canonicalURL?: URL
}
```

## SEO Architecture

### Built-in Features

1. **Sitemap** - Auto-generated by @astrojs/sitemap
2. **RSS Feed** - Generated at /rss.xml
3. **robots.txt** - Configured for search engines
4. **JSON-LD** - Schema.org markup for articles
5. **Open Graph** - Social sharing metadata
6. **Canonical URLs** - Prevent duplicate content

### JSON-LD Schemas

- `Person` schema for author
- `WebSite` schema with search action
- `Article` schema for blog posts

## Build Process

1. Astro collects all content from `src/content/blog/`
2. Pages are pre-rendered to static HTML
3. Assets are optimized
4. Output goes to `dist/`
5. Cloudflare Pages serves from edge network

## Performance

- Zero JavaScript by default (opt-in where needed)
- Static generation = no server runtime
- Edge caching via Cloudflare CDN
- Optimized images (Astro's built-in)

## Security

- Static site = no database attack surface
- CSP headers via Cloudflare
- HTTPS enforced
- No user-generated content
```

- [ ] **Step 3: Create docs/DEPLOYMENT.md**

```markdown
# Deployment

## Overview

This blog deploys automatically to Cloudflare Pages on every push to `main`.

## Deployment Flow

1. Push to `main` branch
2. GitHub Actions triggers `deploy.yml` workflow
3. Build runs with `npm run build`
4. `dist/` folder deploys to Cloudflare Pages
5. Site available at: https://blog.nmrooms.biz.id

## Preview Deployments

Pull requests get automatic preview deployments via Cloudflare Pages.

Preview URL format: `https://[hash].pages.dev`

## Manual Deployment

To deploy manually:

```bash
# Using GitHub CLI
gh workflow run deploy.yml

# Or via Cloudflare Wrangler
wrangler pages deploy dist
```

## Required GitHub Secrets

Configure these in GitHub Settings → Secrets and Variables → Actions:

| Secret | Description |
|--------|-------------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token for deployment |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID |
| `CLOUDFLARE_PROJECT_NAME` | Cloudflare Pages project name |

## Cloudflare Setup

### 1. Create API Token

1. Go to Cloudflare Dashboard → My Profile → API Tokens
2. Create Custom Token with:
   - `Account: Cloudflare Pages: Edit`
   - `Zone: Cloudflare Pages: Edit`

### 2. Get Account ID

Found in Cloudflare Dashboard URL or on any domain's Overview page.

### 3. Project Settings

Ensure in Cloudflare Pages:
- Build command: `npm run build`
- Build output: `dist`
- Environment: Production branch `main`

## Environment Variables

### Build-time Variables

These are set at build time via GitHub Secrets:

- `SITE_URL` - Full site URL (required for sitemap)

### Runtime Variables

Optional - used in browser:

- `PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` - Analytics script token

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

1. Check GitHub Actions logs
2. Verify `npm run build` works locally
3. Check environment variables are set

### Deployment not updating

1. Check Cloudflare Pages deployment log
2. Verify build completed successfully
3. Clear Cloudflare cache if needed

### Preview not working

1. Ensure PR is from the same repository
2. Check GitHub Actions ran for the PR
3. Verify Cloudflare Pages integration is connected
```

- [ ] **Step 4: Create docs/SECURITY.md**

```markdown
# Security

## Overview

This is a static blog with minimal attack surface. Security focuses on:
- Dependency management
- No secrets in code
- Secure deployment pipeline

## Secrets Management

### Never Commit

- API tokens
- Cloudflare credentials
- Analytics tokens
- Any private keys

### Environment Variables

All secrets go in `.env` (gitignored) or GitHub Secrets.

Only prefix with `PUBLIC_` if truly needed in browser.

## Dependencies

### Dependabot

- Enabled for npm packages
- Weekly updates on Sundays
- Auto-assign to repo owner
- Grouped by ecosystem (@astrojs/* together)

### npm audit

Runs in CI on every PR. Failures are non-blocking but create security advisory.

## Security Headers

Cloudflare provides:

- HTTPS (always enforced)
- HSTS
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

## Reporting Security Issues

See [SECURITY.md](../SECURITY.md) for reporting process.

## Best Practices

1. Keep dependencies updated
2. Review Dependabot PRs regularly
3. Don't add unnecessary dependencies
4. Use minimal JavaScript
5. Validate all user inputs (if any)
```

- [ ] **Step 5: Create docs/SEO.md**

```markdown
# SEO

## Overview

The blog implements comprehensive SEO best practices built into Astro.

## Implemented Features

### Meta Tags

Every page includes:
- `<title>`
- `<meta name="description">`
- Canonical URL
- Open Graph tags
- Twitter Card tags

### Structured Data

JSON-LD schemas for:
- **Person** - Author information
- **WebSite** - Site-wide data with SearchAction
- **Article** - Blog post metadata

### Sitemap

Auto-generated at `/sitemap-index.xml` by @astrojs/sitemap.

Includes all public pages with:
- Change frequency
- Priority levels

### RSS Feed

Full-content RSS at `/rss.xml` for:
- Feed readers
- Newsletter integrations
- SEO discovery

### robots.txt

```
User-agent: *
Allow: /
Sitemap: https://blog.nmrooms.biz.id/sitemap-index.xml
```

## SEO Guidelines

### Writing Posts

1. **Title** - Clear, descriptive, includes target keywords
2. **Description** - Max 180 chars, summarizes content
3. **Headings** - Logical hierarchy (single H1, multiple H2/H3)
4. **Images** - Alt text for accessibility and SEO
5. **Links** - Both internal and external

### URL Structure

```
/blog/post-slug/           # Blog posts
/categories/category/     # Category pages
/tags/tag/                # Tag pages
```

### Performance

- Fast load times = better rankings
- Static generation = instant responses
- Cloudflare CDN = global low latency

## Validation

Test SEO with:

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
```

- [ ] **Step 6: Create docs/CONTENT_WORKFLOW.md**

```markdown
# Content Workflow

## Writing a New Post

### 1. Create File

Create a new MDX or Markdown file in `src/content/blog/`:

```bash
src/content/blog/my-new-post.mdx
```

### 2. Add Frontmatter

```yaml
---
title: My New Post Title
description: A brief description for SEO (max 180 characters)
publishedDate: 2024-01-15
author: Nur Mufid
tags: [Tag1, Tag2, Tag3]
category: Category Name
draft: false
featured: false
---
```

### 3. Write Content

Use Markdown with optional MDX components:

```mdx
# Heading

Regular markdown content.

## Subheading

More content here.
```

### 4. Preview Locally

```bash
npm run dev
# Visit http://localhost:4321/blog/my-new-post/
```

### 5. Preview SEO

```bash
npm run build
npm run preview
```

### 6. Publish

Push to `main` branch - deployment happens automatically.

## Post Organization

### Categories

Use existing categories:
- DevOps
- Cloud Computing
- Kubernetes
- AWS
- Linux
- Docker
- AI
- Software Engineering
- Productivity
- Career
- Tutorials

### Tags

Create tags as needed. Use lowercase, hyphens for spaces.

## Drafts

Set `draft: true` in frontmatter to prevent publishing.

Drafts:
- Build locally
- Don't appear in listings
- Don't add to sitemap
- Don't appear in RSS

## Updating Posts

Edit the MDX file directly. Changes deploy automatically on push.

Update `updatedDate` in frontmatter to signal content freshness.

## Deleting Posts

Remove the file from `src/content/blog/`.

## SEO Checklist

Before publishing:

- [ ] Title is clear and descriptive
- [ ] Description is 120-180 characters
- [ ] Appropriate category selected
- [ ] Relevant tags added
- [ ] No broken links
- [ ] Images have alt text
```

- [ ] **Step 7: Create docs/ADR/0001-use-astro.md**

```markdown
# ADR-0001: Use Astro as the Site Framework

## Status

Accepted

## Context

We needed a framework for the technical blog that prioritizes:
- Performance
- SEO
- Developer experience
- Content management

## Decision

We will use **Astro 7.x** as the site framework.

## Alternatives Considered

### Next.js
- Too much JavaScript by default
- Higher complexity for static content
- Heavier bundle sizes

### 11ty (Eleventy)
- Simpler but less TypeScript integration
- Fewer built-in integrations
- Smaller ecosystem

### Hugo
- Go-based, fast
- Less flexible for complex components
- Different templating syntax

## Decision

Astro provides:
- Zero JS by default
- Built-in content collections
- Type-safe frontmatter with Zod
- Excellent MDX support
- Built-in SEO (sitemap, RSS, JSON-LD)
- Cloudflare Pages adapter

## Consequences

### Positive
- Excellent performance out of the box
- Type-safe content with Content Collections
- Great developer experience
- Strong SEO features

### Negative
- Learning curve for Astro-specific concepts
- Smaller community than Next.js
- Some features require Astro-specific patterns
```

- [ ] **Step 8: Commit documentation**

```bash
git add .env.example docs/
git commit -m "docs: add environment template and documentation"
```

---

### Task 7: Update package.json Scripts

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Update package.json**

```json
{
  "name": "nur-mufid-blog",
  "version": "1.0.0",
  "description": "Technical blog for Nur Mufid built with Astro.",
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "astro": "astro",
    "typecheck": "astro check",
    "lint": "eslint src --ext .ts,.astro",
    "format": "prettier --write src/",
    "format:check": "prettier --check src/",
    "check": "npm run lint && npm run typecheck && npm run build",
    "audit": "npm audit"
  },
  "keywords": [
    "astro",
    "blog",
    "seo"
  ],
  "author": "Nur Mufid",
  "license": "MIT",
  "dependencies": {
    "@astrojs/mdx": "^7.0.2",
    "@astrojs/rss": "^4.0.19",
    "@astrojs/sitemap": "^3.7.3",
    "astro": "^7.0.6",
    "reading-time": "^1.5.0",
    "rehype-autolink-headings": "^7.1.0",
    "rehype-slug": "^6.0.0"
  },
  "devDependencies": {
    "@astrojs/check": "^0.9.9",
    "typescript": "^6.0.3",
    "prettier": "^3.0.0",
    "@typescript-eslint/eslint-plugin": "^7.0.0",
    "@typescript-eslint/parser": "^7.0.0",
    "eslint": "^8.57.0",
    "eslint-plugin-astro": "^1.0.0"
  }
}
```

- [ ] **Step 2: Install new dev dependencies**

```bash
npm install
```

- [ ] **Step 3: Create ESLint config**

```yaml
# .eslintrc.cjs
module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:astro/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
}
```

- [ ] **Step 4: Create Prettier config**

```yaml
# .prettierrc.yaml
semi: false
singleQuote: true
trailingComma: es5
printWidth: 100
bracketSpacing: true
astroAllowShorthand: true
```

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json .eslintrc.cjs .prettierrc.yaml
git commit -m "chore: add linting and formatting tools"
```

---

## Summary

**Files to create:**
- `README.md`, `LICENSE`, `.gitignore`, `.editorconfig`
- `CHANGELOG.md`, `SECURITY.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`
- `.env.example`
- `.github/dependabot.yml`
- `.github/ISSUE_TEMPLATE/bug_report.yml`
- `.github/ISSUE_TEMPLATE/feature_request.yml`
- `.github/ISSUE_TEMPLATE/documentation.yml`
- `.github/PULL_REQUEST_TEMPLATE.md`
- `.github/workflows/ci.yml`
- `.github/workflows/deploy.yml`
- `docs/ARCHITECTURE.md`
- `docs/DEPLOYMENT.md`
- `docs/SECURITY.md`
- `docs/SEO.md`
- `docs/CONTENT_WORKFLOW.md`
- `docs/ADR/0001-use-astro.md`
- `AGENTS.md` (update)

**Files to modify:**
- `package.json`

**Dev dependencies to add:**
- `prettier`
- `eslint`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint-plugin-astro`

---

## Post-Implementation Checklist

After implementing all tasks, verify:

- [ ] All files committed
- [ ] GitHub Actions pass
- [ ] Dependabot enabled
- [ ] Cloudflare Pages connected
- [ ] Required secrets added to GitHub
- [ ] Branch protection rules applied (manually)
