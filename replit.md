# TotalEngage Website

A marketing website for TotalEngage, a hospitality CRM/communication platform.

## Stack

- **Frontend**: React 19 + Vite 7, Tailwind CSS, Framer Motion, GSAP, React Router
- **Backend**: Express.js (serves API endpoints + static files in production)
- **Package Manager**: npm

## Architecture

- `src/` - React frontend source
- `src/pages/` - Page components (Home, About, Features, Contact, CaseStudies, Hospitality, Integrations, Security)
- `server.js` - Express backend (API routes + serves built React app in production)
- `public/` - Static assets (images, videos)

## Development

- Frontend dev server runs on port 5000 (Vite)
- Backend (Express) runs on port 3000 in dev, handles API routes in production
- Workflow: `npm run dev` → Vite dev server on port 5000

## Deployment

- Build: `npm run build` (outputs to `dist/`)
- Run: `node server.js` (serves built React app + API routes)
- Target: Autoscale
