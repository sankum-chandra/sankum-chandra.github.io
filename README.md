# sankum.in

Professional portfolio website for Santhosh Kumar Chandrashekar - TOGAF Certified Architect specializing in Cloud & DevOps Portfolio Architecture.

## Site Structure

```
/
├── index.html              # Homepage
├── about/                  # About page
├── focus/                  # Strategic focus areas
├── initiatives/            # Case studies and strategic initiatives
├── insights/               # Thought leadership articles
├── contact/                # Contact page with form
├── assets/                 # Images and media
├── css/                    # Stylesheets (modular)
├── js/                     # JavaScript modules
├── data/                   # JSON data for dynamic content
└── partials/               # Reusable HTML components
```

## Features

- Responsive design with mobile-first approach
- Dark/light theme toggle with system preference detection
- Accessible navigation and skip links
- Dynamic content loading from JSON
- Contact form with spam protection
- Google Analytics integration
- Optimized images (WebP format)

## Deployment

This site is deployed on GitHub Pages at https://sankum.in

### Local Development

Simply open `index.html` in a browser, or use a local server:

```bash
python -m http.server 8000
# or
npx serve
```

## Content Management

- **Initiatives**: Edit `/data/initiatives.json` to add/update case studies
- **Insights**: Edit `/data/articles.json` to add/update articles
- **Images**: Store in `/assets/images/` (use WebP format for optimization)

## Performance

- Minimal JavaScript footprint
- Modular CSS architecture
- Optimized images with lazy loading
- No external dependencies beyond Google Fonts

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with graceful degradation for older versions.

## License

All content © 2026 Santhosh Kumar Chandrashekar
