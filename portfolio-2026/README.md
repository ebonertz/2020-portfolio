# Evan Bonertz portfolio — 2026 refresh

A static, responsive portfolio with dedicated case-study and résumé pages. No package install, CMS, or application environment variables are required.

## Deploy with Netlify

The repository-root `netlify.toml` sets `portfolio-2026` as the base directory, uses a no-op build command, publishes that directory, and selects Node.js 22. The `.node-version` file also specifies Node.js 22. If the Netlify UI still has an old Gatsby build command or publish directory, clear those settings and use the repository configuration.

The résumé page links to the PDF in `assets/`. Review its content before merging a PR because the PDF includes contact information and will be publicly downloadable.

## Custom domain

The Netlify site currently serves at `https://2020-portfolio.netlify.app/`. `evanbonertz.com` and `www.evanbonertz.com` still resolve to Squarespace. After confirming the Netlify deployment, replace the conflicting Squarespace DNS records with the records shown by Netlify for this site. Verify both hosts and HTTPS after DNS updates.
