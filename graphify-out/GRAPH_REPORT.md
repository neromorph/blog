# Graph Report - .  (2026-07-03)

## Corpus Check
- Corpus is ~3,365 words - fits in a single context window. You may not need a graph.

## Summary
- 205 nodes · 277 edges · 18 communities (16 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]

## God Nodes (most connected - your core abstractions)
1. `../../layouts/BaseLayout.astro` - 22 edges
2. `Nur Mufid Blog` - 21 edges
3. `getPosts()` - 15 edges
4. `Astro SEO Guide for Technical Blogs` - 10 edges
5. `../../components/PostCard.astro` - 9 edges
6. `site` - 7 edges
7. `Kubernetes Notes for Practical Operators` - 7 edges
8. `Linux Productivity Habits That Compound` - 7 edges
9. `slugify()` - 6 edges
10. `postUrl()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `https://blog.nmrooms.biz.id` --CANONICAL_FOR--> `Nur Mufid Blog`  [EXTRACTED]
  CONTEXT.md → package.json
- `Kubernetes Notes for Practical Operators` --BELONGS_TO--> `Nur Mufid Blog`  [EXTRACTED]
  src/content/blog/kubernetes-notes.md → package.json
- `Linux Productivity Habits That Compound` --BELONGS_TO--> `Nur Mufid Blog`  [EXTRACTED]
  src/content/blog/linux-productivity.md → package.json
- `Nur Mufid Blog` --DECIDES--> `Clean Article URLs`  [EXTRACTED]
  package.json → CONTEXT.md
- `Nur Mufid Blog` --USES--> `Automatic Article Navigation`  [EXTRACTED]
  package.json → CONTEXT.md

## Import Cycles
- None detected.

## Communities (18 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (33): default, type, format, type, type, type, maxLength, type (+25 more)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (26): Clean Article URLs, @astrojs/mdx, @astrojs/rss, @astrojs/sitemap, Automatic Article Navigation, BlogPosting Schema, BreadcrumbList Schema, Build-Time Rendering (+18 more)

### Community 2 - "Community 2"
Cohesion: 0.08
Nodes (24): AllValuesOf, CollectionEntry, CollectionKey, ContentConfig, DataEntryMap, ExtractCollectionFilterType, ExtractDataType, ExtractEntryFilterType (+16 more)

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (18): index, jsonLd, { post }, related, toc, ../../components/Breadcrumbs.astro, ../components/Footer.astro, ../components/Header.astro (+10 more)

### Community 4 - "Community 4"
Cohesion: 0.26
Nodes (11): getStaticPaths(), posts, ../../components/PostCard.astro, getPosts(), getReadingTime(), postUrl(), slugify(), GET() (+3 more)

### Community 5 - "Community 5"
Cohesion: 0.12
Nodes (16): author, description, devDependencies, @astrojs/check, typescript, keywords, license, name (+8 more)

### Community 6 - "Community 6"
Cohesion: 0.24
Nodes (7): Astro, categories, site, counts, featured, latest, GET()

### Community 7 - "Community 7"
Cohesion: 0.18
Nodes (11): dependencies, astro, @astrojs/mdx, @astrojs/rss, @astrojs/sitemap, reading-time, rehype-autolink-headings, rehype-slug (+3 more)

### Community 8 - "Community 8"
Cohesion: 0.29
Nodes (7): CLI, Linux Productivity Habits That Compound, Linux, Productivity, Readable Aliases, Repeatable Commands, Terminal Tools

### Community 9 - "Community 9"
Cohesion: 0.29
Nodes (7): Containers, DevOps, Kubernetes Notes for Practical Operators, Kubernetes, Kubernetes Manifests, Kubernetes Services, Kubernetes Workloads

### Community 10 - "Community 10"
Cohesion: 0.40
Nodes (5): type, tags, default, items, type

### Community 12 - "Community 12"
Cohesion: 0.50
Nodes (3): compilerOptions, noImplicitAny, extends

## Knowledge Gaps
- **113 isolated node(s):** `$schema`, `type`, `type`, `type`, `maxLength` (+108 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Nur Mufid Blog` connect `Community 1` to `Community 5`, `Community 6`, `Community 7`, `Community 8`, `Community 9`?**
  _High betweenness centrality (0.188) - this node is a cross-community bridge._
- **Why does `reading-time` connect `Community 7` to `Community 1`, `Community 4`?**
  _High betweenness centrality (0.132) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 7` to `Community 5`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **What connects `$schema`, `type`, `type` to the rest of the system?**
  _113 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.058823529411764705 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08307692307692308 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._