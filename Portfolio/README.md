# Saran Kumar T Portfolio

Premium responsive portfolio website built with HTML5, CSS3, Vanilla JavaScript, Bootstrap 5, Font Awesome, AOS, Typed.js, Particles.js, and static GitHub Pages friendly assets.

## Highlights

- Animated gradient hero, particles, floating tech icons, mouse glow, cursor trail, scroll indicator, and magnetic-style buttons.
- Resume preview modal, resume download counter, visitor counter, project counter, and animated statistics.
- About, skills, projects, experience, certificates, services, GitHub activity, statistics, testimonials, blog, roadmap, pricing, FAQ, newsletter, and contact sections.
- Dynamic skill filtering, project search, project category filters, project modal, certificate lightbox, pinned repository cards, and GitHub API stats.
- Dark/light mode memory, color theme dock, command palette with Ctrl+K, Alt+T theme shortcut, cookie banner, weather widget, digital clock, music toggle, AI contact shortcut, lazy loading, and back-to-top button.
- SEO meta tags, Open Graph, Twitter cards, JSON-LD, canonical URL, robots.txt, sitemap.xml, manifest.json, favicon, 404 page, and maintenance page.
- Accessibility improvements with semantic HTML, ARIA labels, keyboard navigation, visible focus behavior, skip link, and screen-reader friendly form feedback.

## Folder Structure

```text
Portfolio/
|-- assets/
|   |-- certificates/
|   |   |-- it-support.svg
|   |   |-- oracle-database.svg
|   |   `-- python-development.svg
|   |-- fonts/
|   |-- icons/
|   |-- images/
|   |   `-- saran.svg
|   `-- videos/
|-- css/
|   |-- animation.css
|   |-- responsive.css
|   `-- style.css
|-- icons/
|   `-- favicon.svg
|-- js/
|   |-- clock.js
|   |-- counter.js
|   |-- cursor.js
|   |-- darkmode.js
|   |-- email.js
|   |-- github.js
|   |-- main.js
|   |-- particles.js
|   |-- scroll.js
|   |-- theme.js
|   |-- typing.js
|   `-- weather.js
|-- resume/
|   `-- sarankumar t.pdf
|-- 404.html
|-- index.html
|-- maintenance.html
|-- manifest.json
|-- robots.txt
`-- sitemap.xml
```

## GitHub Pages

Deploy the repository root. The site is static and uses relative paths, so it works on GitHub Pages without a build step.

The resume preview and download expect:

```text
resume/sarankumar t.pdf
```

Update the canonical URL, sitemap URLs, and manifest `start_url` if the repository name or custom domain changes.

## EmailJS

The contact form validates and sanitizes input in the browser. If EmailJS keys are not configured, it falls back to a prefilled `mailto:` flow. To enable EmailJS, set the `publicKey`, `serviceId`, and `templateId` values in `js/main.js` with the real values from the EmailJS dashboard.

## Notes

- No Windows-only local paths are used.
- External libraries are loaded once and deferred.
- Image and certificate assets use relative paths.
- Visitor, download, newsletter, cookie, and theme preferences use browser local storage.
