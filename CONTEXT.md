# Context

## Glossary

- **Canonical Site**: `https://blog.nmrooms.biz.id`, the original source for all articles and metadata.
- **Site Name**: `Nur Mufid`, the public name used in titles, RSS, Open Graph, and schema metadata.
- **Author**: Nur Mufid, the default article author and schema identity for the blog.
- **Personal Expert Blog**: The site represents Nur Mufid as an individual expert, not a company publication or multi-author media site.
- **Markdown/MDX Article**: A blog article authored as `.md` or `.mdx`; Markdown is the default, MDX is available for richer articles.
- **Static Search**: A first-version search experience powered by a generated JSON index, not an external search service.
- **No Comments Surface**: Article pages do not include comments or comments placeholders in version 1.
- **No Newsletter CTA**: The launch site does not include newsletter signup UI; RSS is the subscription mechanism.
- **Article URL**: Articles live at `/blog/{slug}/` with clean, stable, non-date-based slugs.
- **Category**: The single primary content bucket for an article.
- **Tag**: A flexible secondary topic label; articles may have many tags.
- **Draft Article**: An article with `draft: true`; unpublished everywhere in version 1.
- **Theme Mode**: Light/dark presentation selected from system preference unless the reader manually persists a choice.
- **Build-Time Syntax Highlighting**: Code highlighting generated during the Astro build, with only a tiny client script for copying code.
- **Automatic Article Navigation**: Article table of contents and heading links are inferred from headings, not maintained in frontmatter.
