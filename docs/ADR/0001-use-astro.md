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
