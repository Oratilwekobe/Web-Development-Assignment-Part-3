# Kobe's Kitchen Website

A five-page restaurant website built for Kobe's Kitchen, a Kasi food spot based in Clayville, Olifantsfontein. This project was developed across three parts as part of a web development module.

---

## Project Structure

```
kobes_part3/
├── index.html          - Home page
├── about.html          - About page
├── services.html       - Menu / Services page
├── enquiries.html      - Enquiries page with HTML form
├── contact.html        - Contact page with form and map
├── robots.txt          - Search engine crawler instructions
├── sitemap.xml         - Website sitemap for SEO
├── css_assets/
│   └── style.css       - Main stylesheet
├── js_assets/
│   └── script.js       - JavaScript for validation and interactions
└── _images/            - All website images
```

---

## Pages

- **Home** - Welcome section, food highlights, and call-to-action buttons
- **About** - Our story, mission, why choose us, and community section
- **Services** - Full menu with food images and prices
- **Enquiries** - HTML form for service enquiries with JS validation and AJAX submission
- **Contact** - Contact details, general message form, and Google Maps embed

---

## Features

### Part 1 — Structure and Content
- Five-page HTML website with consistent header, navigation, and footer
- Semantic HTML5 elements used throughout
- All pages linked together through the navigation bar

### Part 2 — Styling
- External CSS stylesheet linked to all pages
- Flexbox and Grid used for layout
- Responsive design with media queries for mobile screens
- Consistent colour scheme (black, orange, white)
- Hover effects on navigation links, buttons, and cards

### Part 3 — Functionality and SEO
- JavaScript file added with form validation, active nav link highlighting, and service card interactions
- HTML form added to enquiries.html with client-side validation and AJAX submission
- HTML form added to contact.html with message type selector, validation, and AJAX submission
- SEO meta tags added to all five pages (description, keywords, author)
- Alt text on all images
- robots.txt created
- sitemap.xml created

---

## Changelog

### Part 3 — 2026-11-01
- Added `js_assets/script.js` with form validation, active nav link, and service card interactions
- Added native HTML enquiry form to `enquiries.html` replacing the Google Form iframe
- Added native HTML contact form to `contact.html` with name, email, message type, and message fields
- Implemented AJAX form submission on both forms using XMLHttpRequest so the page does not reload on submit
- Added SEO meta tags (description, keywords, author) to all five pages
- Added descriptive title tags to all five pages
- Added `robots.txt` to guide search engine crawlers
- Added `sitemap.xml` listing all five pages
- Added CSS styles for form fields, error messages, success messages, active nav link, and contact form wrapper
- Added mobile CSS for form submit buttons

### Part 2 — Previous Submission
- Created `css_assets/style.css` from scratch and linked it to all five pages
- Styled header, navigation, footer, and all page sections
- Added Flexbox layout for hero section and about sections
- Added Grid layout for services menu and contact cards
- Added hover transitions on nav links and buttons
- Added responsive media queries for screens below 768px
- Added food images to services page matched to their menu items
- Styled about page with alternating section layouts

### Part 1 — Previous Submission
- Created five HTML pages with semantic structure
- Added navigation linking all pages together
- Added header with logo and tagline
- Added Google Maps iframe to contact page
- Added content for all sections across all pages

---

## References

- Google Fonts — https://fonts.google.com
- Google Maps Embed API — https://developers.google.com/maps/documentation/embed
- MDN Web Docs, HTML Forms — https://developer.mozilla.org/en-US/docs/Learn/Forms
- MDN Web Docs, JavaScript DOM — https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- MDN Web Docs, XMLHttpRequest — https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
- Sitemaps.org, Sitemap Protocol — https://www.sitemaps.org/protocol.html
- W3Schools, HTML Meta Tags — https://www.w3schools.com/tags/tag_meta.asp
- FormSubmit — https://formsubmit.co

---

## Deployment

This website is deployed at: [Add your deployment link here after publishing on Netlify or GitHub Pages]

## Author

Kobe's Kitchen — Web Development Project 2026
