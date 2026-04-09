# HH Consulting Mobile UI

Responsive React + Vite landing page for HH Consulting Architects & Engineers PLC.

## Overview

This project presents the company profile, services, featured projects, client logos, team, and contact details in a mobile-friendly marketing site.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Vitest
- Testing Library

## Getting Started

Install dependencies:

```bash
npm install
```

Run the app locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run tests:

```bash
npm run test:run
```

## Deployment

This project builds to a static `dist/` folder and can be deployed to any static hosting platform.

Recommended steps:

1. Run the production build:

```bash
npm run build
```

2. Deploy the generated `dist/` directory to your host of choice.

Examples:

- Vercel: connect the repository and use the default Vite build settings.
- Netlify: publish the `dist/` folder as the deploy directory.
- Static hosting or cPanel: upload the contents of `dist/`.

For a local production preview:

```bash
npm run preview
```

## Project Structure

- `src/App.jsx` - main page composition
- `src/components/sections/` - page sections
- `src/layout/` - header and shell layout
- `src/data/siteContent.js` - all content used by the site

## Notes

- The homepage hero includes the company name, Amharic company line, and CTA.
- Featured projects are driven entirely from `src/data/siteContent.js`.