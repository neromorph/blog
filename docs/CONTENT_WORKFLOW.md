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
