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
| `npm run astro` | Run Astro CLI |

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

This site deploys to Cloudflare Pages. Connect manually:

1. Go to Cloudflare Dashboard → Pages
2. Create Project → Import from GitHub
3. Set build command: `npm run build`
4. Set output directory: `dist`

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for full details.

## Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT - see [LICENSE](LICENSE)
