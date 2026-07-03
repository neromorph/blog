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
