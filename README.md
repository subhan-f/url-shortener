# URL Shortener

Lightweight URL shortener scaffold using a simple MVC layout (Node.js + Express). This repo provides a minimal, well-organized starting point so you can replace the in-memory model with a persistent database later.

## Features
- MVC folder layout (controllers, models, routes, views)
- Minimal Express server
- Basic in-memory model (replaceable with DB)
- Example frontend to test shortening

## Tech
- Node.js
- Express

## Quickstart
1. Clone repository
2. From project root:
   - npm install
   - Create a `.env` if needed
   - npm start

(You may add package.json and dependencies if not present. Example packages: express, nodemon)

## Project structure
- src/
  - config/        -- configuration (port, env)
  - controllers/   -- request handlers
  - models/        -- data layer (in-memory for now)
  - routes/        -- route definitions
  - views/         -- simple frontend for manual testing
  - index.js       -- app bootstrap

## Usage
- POST /api/shorten  { "url": "https://example.com" } -> JSON with short code
- GET /:id           -> redirect to original URL
- GET /              -> simple HTML page for testing

## Notes
- The model currently uses in-memory storage (Map). Replace `src/models/urlModel.js` with a DB-backed implementation for production.
- Add environment variables (e.g., BASE_URL) and update config when needed.
- Add tests and CI before production use.

## Contributing
1. Fork
2. Create feature branch
3. Open PR with description

## License
Specify your license (e.g. MIT)