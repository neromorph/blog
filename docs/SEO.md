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
