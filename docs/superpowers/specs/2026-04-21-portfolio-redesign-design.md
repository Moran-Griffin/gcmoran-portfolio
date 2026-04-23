# Portfolio Redesign — Design Spec
_Date: 2026-04-21_

## Context

The current portfolio (gcmoran.tech) uses a light cream/cyan color scheme with a standard top-nav scroll layout. The owner finds it bland and the flow unappealing. This redesign overhauls the entire visual system and structure, adds two missing sections (Projects, second Experience card), and revamps the contact section — while preserving all existing real content.

---

## Approach

**Full rewrite** of `index.html` and `styles.css`. The existing HTML is ~260 lines — not worth patching around. A clean slate produces maintainable code and avoids legacy override debt. `script.js` will contain a small `IntersectionObserver` to update the sidebar active nav state as the user scrolls between sections. No other JS required.

---

## Design System

### Color Palette
| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0a0a0f` | Page background |
| `--surface` | `#0d0d18` | Cards, sidebar |
| `--border` | `#1e1e2e` | All borders |
| `--accent` | `#00ff88` | Active states, highlights, tags |
| `--text` | `#e8e8f0` | Primary text |
| `--muted` | `#555570` | Secondary text, labels |

### Typography
- **DM Serif Display** — headings, name, section titles
- **Manrope** — body text, labels, tags (weights 300–700)
- Section labels: small caps, `letter-spacing: 2px`, `--muted` color
- Section numbering format: `01 / ABOUT`, `02 / EXPERIENCE`, etc.

---

## Layout

### Shell
- **Fixed left sidebar** — `220px` wide, `position: fixed`, full viewport height
  - GM logo (SVG, existing) at top
  - Nav links with active-state indicator (2px left border in `--accent`, label shifts right on active)
  - Social icons (GitHub, LinkedIn) pinned to bottom
- **Main content area** — `margin-left: 220px`, scrolls independently
- **Mobile** — sidebar collapses to a top hamburger nav at `≤768px`

---

## Sections

### 1. Home (`#home`)
- Full-viewport-height hero
- Name (large DM Serif), title, one-line bio, location
- Two CTA buttons: **View Projects** (accent-filled) and **Resume** (outline)
- **Current Activity card** — preserved from current design, restyled to dark surface. Will contain new summer internship details once available (placeholder text for now).

### 2. About (`#about`)
- Two-column layout: Education + Awards on left, Skills on right
- Education: JMU BS Computer Science (08/2022–05/2025) + Virginia Tech ME Engineering (08/2026–12/2027)
- Awards: President's List Fall 2024, Dean's List entries
- Skills: 5 categories as tag chips (accent-tinted background, accent border)
  - Programming Languages, Frontend, Machine Learning, Statistics/Analytics, Other

### 3. Experience (`#experience`)
- Two work cards, each with: company, role, date range, responsibilities list, tech tags
- **Card 1 (existing):** DMI Digital Marketing Internship (06/2025–08/2025) — full content preserved
- **Card 2 (new):** Previous internship — placeholder text, to be filled in by owner

### 4. Projects (`#projects`) — NEW
- Section placed between Experience and Contact
- **Stacked list format** — vertical list of project rows
- Each row: 2px left border (accent on hover, muted at rest), project title, short description, tech tag chips, optional GitHub link (↗)
- 3 placeholder entries to be filled in by owner
- Hover state: left border lights up to `--accent`, row background lifts to `--surface`

### 5. Contact (`#contact`) — REVAMPED
- Minimal centered layout
- Short line of copy: _"Get in touch"_
- Email displayed as a styled terminal-command link: `> griffm161@gmail.com`
- GitHub and LinkedIn icon buttons below
- No form for now

---

## Files Modified
- `index.html` — full rewrite
- `styles.css` — full rewrite
- `attachments/gm-logo.svg` — unchanged, reused as-is
- `attachments/Moran, Griffin resume.pdf` — unchanged, relinked

---

## Verification
1. Open `index.html` in a browser — confirm sidebar is fixed and content scrolls independently
2. Resize to `≤768px` — confirm sidebar collapses to hamburger nav
3. Click each nav link — confirm smooth scroll to correct section and active state updates
4. Hover over a project row — confirm left border accent and background lift
5. Click email link in contact — confirm mailto opens
6. Click Resume button — confirm PDF opens
