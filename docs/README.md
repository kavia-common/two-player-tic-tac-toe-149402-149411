# Tic Tac Toe Frontend

## Overview
This repository contains a lightweight React frontend for a two-player Tic Tac Toe game running in a single container on port 3000. Two local players take turns tapping or clicking a 3x3 grid until one wins or the game ends in a draw. The UI applies the Ocean Professional theme with a modern, minimalist aesthetic, subtle shadows, and smooth transitions.

## Features
- Two-player local gameplay (X vs O)
- Live status: next player, winner, or draw
- Highlighted winning line
- Accessible controls and aria status updates
- Reset/New Game action
- Responsive layout with centered board
- Ocean Professional theme (blue accents, clean surfaces)

## Architecture Summary
- Framework: React 18 + react-scripts (CRA)
- Entry: src/index.js renders App
- App shell: src/App.js sets up the themed container and renders Game
- Stateful core: src/components/Game.js manages board state, turn, winner/draw logic
- Presentational: src/components/Board.js renders 3x3 grid, delegates clicks
- Leaf: src/components/Square.js renders an accessible square button
- Styling: src/App.css defines the “Ocean Professional” CSS variables and component classes
- Linting: eslint via eslint.config.mjs with React-focused rules

See docs/ARCHITECTURE.md for details.

## Folder Structure
- tic_tac_toe_frontend/
  - src/
    - App.js, App.css
    - index.js, index.css
    - components/
      - Game.js, Board.js, Square.js
  - eslint.config.mjs
  - package.json
- docs/
  - README.md (this file)
  - ARCHITECTURE.md
  - STYLE_GUIDE.md

## Setup and Development
Prerequisites:
- Node.js 16+ and npm

Install dependencies:
- npm ci
If npm ci fails (e.g., no lock file), use:
- npm install

Run the app on port 3000:
- npm start
Access via your environment’s preview tooling on port 3000.

Build for production:
- npm run build
Outputs a production build in build/.

Run tests:
- npm test
Note: A placeholder test exists; see “Testing strategy” below for recommendations.

Linting:
- npx eslint .
The repo includes eslint.config.mjs with React rules and a no-unused-vars exception for React and App identifiers.

Formatting:
- If Prettier is added, a common command is:
  - npx prettier --write "**/*.{js,jsx,css,md}"

## Usage
- Start the app and open the preview on port 3000.
- Click or tap an empty square to place X or O in turn.
- Status above the grid shows the next player, or announces Winner/Draw.
- Winning squares are visually highlighted.
- Use Reset / New Game to clear the board.

## Accessibility Considerations
- Keyboard support: Squares are buttons; use Tab + Enter/Space to play.
- Status region uses role="status" and aria-live="polite" for assistive tech.
- Squares expose aria-labels indicating cell number and value.
- Focus styles: :focus-visible ring for squares.
- Color contrast: Ocean palette chosen for clear contrast over white surfaces; verify contrast in your environment if colors change.

## Coding Standards
- Functional React components with hooks (useState/useMemo).
- Keep game logic pure and colocated with Game where simple; extract when complexity grows.
- Presentational components (Board, Square) remain stateless and accessible.
- Use CSS variables from App.css for theme consistency.
- Prefer semantic roles and aria attributes for interactive elements.

## Testing Strategy (Recommendations)
- Unit tests:
  - calculateWinner: cover all 8 win lines and draw detection.
  - Game interactions: simulate clicks for win/draw paths.
- Accessibility tests:
  - Ensure role="grid", role="gridcell", role="status" behavior.
  - Verify keyboard interactions and focus visibility.
- Snapshot tests for Board and Square rendering states.
- Example tools: React Testing Library + Jest (already bootstrapped).
- Optional: add ESLint in CI and basic test coverage thresholds.

## Deployment Notes
- Single-container React app, port 3000 in development.
- Production builds are static assets in build/.
- Host behind any static web server or CDN (e.g., Nginx, Netlify, Vercel).
- Set proper cache headers for static files; avoid caching index.html aggressively for SPA routing.

## Future Improvements
- AI opponent (minimax or heuristic difficulty levels)
- Move history with time travel
- Undo/redo functionality
- Animations for moves and winning line
- Persistent scoreboard and best-of series
- Localization and RTL support
- Service Worker for offline support
- Enhanced responsive/landscape tweaks for small devices

## Credits
- React app scaffold based on Create React App.
- Ocean Professional theme implemented in src/App.css.
