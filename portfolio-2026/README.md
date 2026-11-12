# Evan Bonertz portfolio — 2026 refresh

A static, responsive portfolio designed for recruiters and engineering teams. Open `index.html` locally or serve this directory with any static server. No package install or CMS is required.

## Deploy with Netlify

1. Connect the repository containing these files to Netlify.
2. The repository root `netlify.toml` sets this folder as the base directory, supplies a no-op build command, and publishes it. Clear the old Gatsby build command and any old package directory in Netlify if they remain configured in the UI.
3. Add `evanbonertz.com` as the custom domain in Netlify. Use the DNS records Netlify shows for that site, then remove the existing Squarespace parking records that conflict.
4. Wait for DNS and HTTPS to become active, then check both the root domain and `www`.

Before publishing, review the case-study wording for confidentiality and add a current résumé link if desired. The site intentionally contains no unverified performance metrics or contact email address.

The `.node-version` file selects Node.js 22 for Netlify's build environment once this folder is the site base directory. The page itself does not depend on Node.js.
