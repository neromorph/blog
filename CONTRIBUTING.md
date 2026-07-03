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
