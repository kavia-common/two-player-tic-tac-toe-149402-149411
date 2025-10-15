# Style Guide — Ocean Professional

## Theme Summary
Ocean Professional is a modern, minimal theme with blue primary accents, cool gray neutrals, and subtle depth through shadows and gradients. It aims for high clarity, accessible contrast, and smooth interaction affordances.

## Palette
- Primary: #3b82f6
- Secondary: #64748b
- Success: #06b6d4
- Error: #EF4444
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827
- Ring: rgba(59, 130, 246, 0.35) for focus
- Shadow: 0 10px 25px rgba(17, 24, 39, 0.08)

These map to CSS variables defined in src/App.css:
- --primary, --secondary, --success, --error
- --background, --surface, --text
- --ring, --shadow, --radius-lg/md/sm, --transition

## Layout
- Centered card (.game-card) containing:
  - Header with title and subtitle
  - Status banner above the grid
  - 3x3 board (.board)
  - Controls row (.controls) with a primary button
- Responsive constraints: max-width ~520px with padding adjustments under 520px width.

## Components and Classes
- .game-card: rounded, shadowed surface with 1px border for subtle separation.
- .game-header, .game-title, .game-subtitle: typographic hierarchy; subtitle uses secondary color.
- .status: banner with subtle tinted background; variants:
  - .status.winner uses success tint
  - .status.draw uses secondary/neutral tint
  - .badge: pill-like box showing X or O
- .board: 3x3 CSS grid with gaps, fluid sizing via max-width.
- .square: button-like cell with gradient surface, inset shadow, and hover lift.
  - .x color uses --primary
  - .o color uses --success
  - .win applies a success-tinted background, border, and ring
- .btn: primary button with blue background and drop shadow
  - .secondary variant: neutral surface button
  - .danger variant: error emphasis

## Interaction and Motion
- Use --transition (200ms ease) for hover/focus/press feedback.
- Hover: lift squares and buttons slightly with deeper shadow.
- Focus: :focus-visible adds a ring using --ring for accessibility.

## Accessibility
- Ensure role and aria attributes are preserved in components:
  - grid, gridcell, status with aria-live="polite"
- Maintain strong focus outlines for keyboard users.
- Verify contrast when adjusting colors; prefer dark text on light surfaces within the theme.

## Usage Guidelines
- Reuse existing classes; prefer extending via additional classes over inline styles.
- Add new tokens to :root if expanding theme; keep naming consistent with existing variables.
- Keep animations subtle and short to avoid motion fatigue; respect reduced-motion if added.

## Examples

Status banner indicating next player:
```html
<div class="status">
  <span>Next</span>
  <span class="badge">X</span>
</div>
```

Button variants:
```html
<button class="btn">Reset / New Game</button>
<button class="btn secondary">Secondary</button>
<button class="btn danger">Danger</button>
```

Square states:
```html
<button class="square x">X</button>
<button class="square o">O</button>
<button class="square win">X</button>
```

## Future Styling Enhancements
- Add reduced-motion media query to disable hover lifts and transitions if preferred by the user.
- Introduce CSS variables for spacing and typography scale.
- Provide dark mode by inverting surfaces and adjusting accent luminance.
- Add a small animation to emphasize the winning line.
