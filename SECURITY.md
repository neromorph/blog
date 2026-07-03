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
