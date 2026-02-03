
# Sankum.in – GitHub Pages Site

This repository hosts the static website for **Santhosh Kumar Chandrashekar** on GitHub Pages.

## Structure
```
.
├── index.html
├── assets
│   ├── css
│   │   └── style.css
│   ├── js
│   │   └── main.js
│   └── images
│       └── profile.webp  (placeholder)
├── robots.txt
├── sitemap.xml
└── README.md
```

## Local preview
Just open `index.html` in your browser.

## Deploying to GitHub Pages
1. Create a public repository (e.g., `sankum.in`).
2. Commit these files to the **main** branch.
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source = Deploy from a branch** and select **main** and **/ (root)**.
5. Save. Your site will be available at `https://<your-username>.github.io/<repo>/` or at your custom domain if configured.

### Custom domain (optional)
- In **Settings → Pages**, set **Custom domain** to `sankum.in` (or your domain).
- Add a `CNAME` record in your DNS pointing `sankum.in` to `<your-username>.github.io`.
- Create a `CNAME` file at the repository root that contains exactly `sankum.in` (no extra spaces or lines).

## Notes
- Replace `assets/images/profile.webp` with your optimized profile image.
- Update Open Graph images and `sitemap.xml` URLs if your domain/path differs.
