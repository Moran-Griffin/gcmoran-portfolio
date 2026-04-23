# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fully rewrite the portfolio site with a dark/tech aesthetic, fixed sidebar nav, and two new sections (Projects, second Experience card).

**Architecture:** Complete rewrite of `index.html` and `styles.css`. `script.js` gets a small IntersectionObserver for active nav state and a hamburger toggle. No frameworks — vanilla HTML/CSS/JS only.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), vanilla JS (IntersectionObserver), Google Fonts (DM Serif Display + Manrope)

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `index.html` | Full rewrite | All content and structure |
| `styles.css` | Full rewrite | All visual design and layout |
| `script.js` | Write from scratch | Hamburger toggle + sidebar active state |
| `attachments/gm-logo.svg` | Unchanged | Reused as-is |
| `attachments/Moran, Griffin resume.pdf` | Unchanged | Relinked |

---

## Task 1: Write index.html

**Files:**
- Rewrite: `index.html`

- [ ] **Step 1: Write the complete index.html**

Replace the entire contents of `index.html` with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Griffin Moran</title>
  <link rel="icon" href="attachments/gm-logo.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- ── Sidebar (desktop) ──────────────────────────────────────────── -->
  <aside class="sidebar">
    <div class="sidebar-top">
      <a href="#home" class="sidebar-logo">
        <img src="attachments/gm-logo.svg" alt="GM" width="36" height="36">
      </a>
      <nav class="sidebar-nav">
        <a href="#home"       class="nav-link" data-section="home">Home</a>
        <a href="#about"      class="nav-link" data-section="about">About</a>
        <a href="#experience" class="nav-link" data-section="experience">Experience</a>
        <a href="#projects"   class="nav-link" data-section="projects">Projects</a>
        <a href="#contact"    class="nav-link" data-section="contact">Contact</a>
      </nav>
    </div>
    <div class="sidebar-bottom">
      <a href="https://github.com/Moran-Griffin" class="social-link" target="_blank" rel="noopener" aria-label="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      </a>
      <a href="https://linkedin.com/in/[YOUR-LINKEDIN-SLUG]" class="social-link" target="_blank" rel="noopener" aria-label="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
      <a href="attachments/Moran, Griffin resume.pdf" class="social-link resume-text" target="_blank" aria-label="Resume">CV</a>
    </div>
  </aside>

  <!-- ── Mobile header ──────────────────────────────────────────────── -->
  <header class="mobile-header">
    <a href="#home" class="sidebar-logo">
      <img src="attachments/gm-logo.svg" alt="GM" width="30" height="30">
    </a>
    <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </header>

  <!-- ── Mobile nav drawer ──────────────────────────────────────────── -->
  <nav class="mobile-nav" id="mobile-nav" aria-hidden="true">
    <a href="#home"       class="nav-link">Home</a>
    <a href="#about"      class="nav-link">About</a>
    <a href="#experience" class="nav-link">Experience</a>
    <a href="#projects"   class="nav-link">Projects</a>
    <a href="#contact"    class="nav-link">Contact</a>
  </nav>

  <main class="main">

    <!-- ── 1. Home ────────────────────────────────────────────────── -->
    <section id="home" class="section section--home">
      <div class="section-inner home-inner">
        <div class="hero">
          <p class="hero-label">Griffin Moran</p>
          <h1 class="hero-title">Software<br>Engineer</h1>
          <p class="hero-sub">CS student at JMU → ME at Virginia Tech. Building at the intersection of ML and systems.</p>
          <div class="location-tags">
            <span>Herndon, VA</span>
            <span>Software Engineering</span>
            <span>AI &amp; Machine Learning</span>
          </div>
          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary">View Projects</a>
            <a href="attachments/Moran, Griffin resume.pdf" class="btn btn-outline" target="_blank">Resume</a>
          </div>
        </div>
        <div class="activity-card">
          <div class="activity-card-header">
            <span class="activity-dot"></span>
            <span class="activity-label">Current Activity</span>
          </div>
          <ul class="activity-list">
            <li>Completing BS Computer Science at JMU (May 2025)</li>
            <li>Incoming Intern — [Company Name] (Summer 2025)</li>
            <li>Preparing for ME program at Virginia Tech (Aug 2026)</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ── 2. About ───────────────────────────────────────────────── -->
    <section id="about" class="section">
      <div class="section-inner">
        <div class="section-heading">
          <span class="section-number">01</span>
          <h2 class="section-title">About</h2>
        </div>
        <div class="about-grid">
          <div class="about-left">
            <p class="sub-heading">Education</p>
            <div class="edu-card">
              <h4>Master of Engineering — Computer Science and Applications</h4>
              <span class="edu-concentration">Concentration in Data Analytics &amp; Artificial Intelligence</span>
              <span class="edu-institution">Virginia Tech</span>
              <span class="edu-meta">Alexandria, VA · 08/2026 – 12/2027</span>
            </div>
            <div class="edu-card">
              <h4>Bachelor of Science — Computer Science</h4>
              <span class="edu-institution">James Madison University</span>
              <span class="edu-meta">Harrisonburg, VA · 08/2022 – 05/2025</span>
            </div>

            <p class="sub-heading" style="margin-top:2rem">Awards &amp; Recognition</p>
            <div class="award-list">
              <div class="award-item">
                <h4>President's List</h4>
                <span class="award-meta">James Madison University · Fall 2024</span>
              </div>
              <div class="award-item">
                <h4>Dean's List</h4>
                <span class="award-meta">James Madison University · Spring 2023, 2024, 2025 · Fall 2023, 2025</span>
              </div>
            </div>
          </div>

          <div class="about-right">
            <p class="sub-heading">Skills</p>
            <div class="skills-group">
              <span class="skills-cat">Programming Languages</span>
              <div class="skills-tags">
                <span class="tag">Java <span class="tag-years">5y</span></span>
                <span class="tag">Python <span class="tag-years">4y</span></span>
                <span class="tag">C <span class="tag-years">3y</span></span>
                <span class="tag">JavaScript <span class="tag-years">3y</span></span>
                <span class="tag">R <span class="tag-years">2y</span></span>
                <span class="tag">Ruby <span class="tag-years">1y</span></span>
                <span class="tag">Haskell <span class="tag-years">1y</span></span>
                <span class="tag">Rust <span class="tag-years">1y</span></span>
              </div>
            </div>
            <div class="skills-group">
              <span class="skills-cat">Frontend</span>
              <div class="skills-tags">
                <span class="tag">HTML <span class="tag-years">3y</span></span>
                <span class="tag">CSS <span class="tag-years">3y</span></span>
                <span class="tag">Django <span class="tag-years">1y</span></span>
              </div>
            </div>
            <div class="skills-group">
              <span class="skills-cat">Machine Learning</span>
              <div class="skills-tags">
                <span class="tag">NLP <span class="tag-years">2y</span></span>
                <span class="tag">Scikit-Learn <span class="tag-years">2y</span></span>
                <span class="tag">TensorFlow <span class="tag-years">2y</span></span>
                <span class="tag">Neural Networks <span class="tag-years">2y</span></span>
              </div>
            </div>
            <div class="skills-group">
              <span class="skills-cat">Statistics &amp; Analytics</span>
              <div class="skills-tags">
                <span class="tag">Excel <span class="tag-years">3y</span></span>
                <span class="tag">SPSS <span class="tag-years">3y</span></span>
                <span class="tag">NumPy <span class="tag-years">2y</span></span>
                <span class="tag">Matplotlib <span class="tag-years">2y</span></span>
                <span class="tag">Pandas <span class="tag-years">2y</span></span>
              </div>
            </div>
            <div class="skills-group">
              <span class="skills-cat">Other</span>
              <div class="skills-tags">
                <span class="tag">Git <span class="tag-years">3y</span></span>
                <span class="tag">Linux <span class="tag-years">2y</span></span>
                <span class="tag">Agile <span class="tag-years">1y</span></span>
                <span class="tag">Scrum <span class="tag-years">1y</span></span>
                <span class="tag">ROS2 <span class="tag-years">1y</span></span>
                <span class="tag">EC2 <span class="tag-years">1y</span></span>
                <span class="tag">Azure <span class="tag-years">1y</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 3. Experience ──────────────────────────────────────────── -->
    <section id="experience" class="section">
      <div class="section-inner">
        <div class="section-heading">
          <span class="section-number">02</span>
          <h2 class="section-title">Experience</h2>
        </div>
        <div class="work-list">

          <div class="work-card">
            <div class="work-card-header">
              <div>
                <h3 class="work-role">Digital Marketing Intern</h3>
                <span class="work-company">DMI (Digital Management, LLC)</span>
              </div>
              <div class="work-meta">
                <span class="work-date">06/2025 – 08/2025</span>
                <span class="work-loc">Tysons Corner, VA</span>
              </div>
            </div>
            <p class="work-desc">Contributed to the automation of numerous monotonous tasks. Conducted in-depth marketing research regarding LLM and SEO representation.</p>
            <ul class="work-achievements">
              <li>Conducted pivotal research regarding current MMS (Managed Mobility Services) representation within various LLMs to identify valuable insights for improving SEO and model recognition. Delivered multiple presentations to the Marketing VP, President of MMS, and the CEO.</li>
              <li>Constructed an integration between HubSpot and SmartLead CRMs using webhooks to streamline tracking of campaign engagements, enabling creation and update of over 2,000 contact properties each month.</li>
            </ul>
            <div class="work-tags">
              <span class="tag">6sense API</span>
              <span class="tag">LLMs</span>
              <span class="tag">Make.com</span>
              <span class="tag">Power Automate</span>
              <span class="tag">Webhooks</span>
            </div>
          </div>

          <div class="work-card">
            <div class="work-card-header">
              <div>
                <h3 class="work-role">[Role Title]</h3>
                <span class="work-company">[Company Name]</span>
              </div>
              <div class="work-meta">
                <span class="work-date">[Start] – [End]</span>
                <span class="work-loc">[Location]</span>
              </div>
            </div>
            <p class="work-desc">[Brief overview of your role and what the team/company does.]</p>
            <ul class="work-achievements">
              <li>[Key achievement or responsibility #1]</li>
              <li>[Key achievement or responsibility #2]</li>
            </ul>
            <div class="work-tags">
              <span class="tag">[Tech 1]</span>
              <span class="tag">[Tech 2]</span>
              <span class="tag">[Tech 3]</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── 4. Projects ────────────────────────────────────────────── -->
    <section id="projects" class="section">
      <div class="section-inner">
        <div class="section-heading">
          <span class="section-number">03</span>
          <h2 class="section-title">Projects</h2>
        </div>
        <div class="project-list">

          <a href="#" class="project-row">
            <div class="project-row-content">
              <h3 class="project-name">[Project Name]</h3>
              <p class="project-desc">[Short description of the project, the problem it solves, and the approach taken.]</p>
              <div class="project-tags">
                <span class="tag">[Tech 1]</span>
                <span class="tag">[Tech 2]</span>
                <span class="tag">[Tech 3]</span>
              </div>
            </div>
            <span class="project-arrow" aria-hidden="true">↗</span>
          </a>

          <a href="#" class="project-row">
            <div class="project-row-content">
              <h3 class="project-name">[Project Name]</h3>
              <p class="project-desc">[Short description of the project, the problem it solves, and the approach taken.]</p>
              <div class="project-tags">
                <span class="tag">[Tech 1]</span>
                <span class="tag">[Tech 2]</span>
              </div>
            </div>
            <span class="project-arrow" aria-hidden="true">↗</span>
          </a>

          <a href="#" class="project-row">
            <div class="project-row-content">
              <h3 class="project-name">[Project Name]</h3>
              <p class="project-desc">[Short description of the project, the problem it solves, and the approach taken.]</p>
              <div class="project-tags">
                <span class="tag">[Tech 1]</span>
                <span class="tag">[Tech 2]</span>
                <span class="tag">[Tech 3]</span>
              </div>
            </div>
            <span class="project-arrow" aria-hidden="true">↗</span>
          </a>

        </div>
      </div>
    </section>

    <!-- ── 5. Contact ─────────────────────────────────────────────── -->
    <section id="contact" class="section section--contact">
      <div class="section-inner">
        <div class="section-heading">
          <span class="section-number">04</span>
          <h2 class="section-title">Contact</h2>
        </div>
        <div class="contact-body">
          <p class="contact-tagline">Get in touch</p>
          <a href="mailto:griffm161@gmail.com" class="contact-email">&gt; griffm161@gmail.com</a>
          <div class="contact-socials">
            <a href="https://github.com/Moran-Griffin" class="social-link" target="_blank" rel="noopener" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/[YOUR-LINKEDIN-SLUG]" class="social-link" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        <footer class="site-footer">
          <p>© 2026 Griffin Moran</p>
        </footer>
      </div>
    </section>

  </main>

  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify HTML opens in browser**

Open `index.html` in a browser (double-click the file or use a local server). Expected: unstyled content visible, no console errors, all 5 sections present in page source.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: rewrite index.html with dark/tech design structure"
```

---

## Task 2: CSS — design system, reset, layout shell, sidebar

**Files:**
- Rewrite: `styles.css`

- [ ] **Step 1: Write styles.css**

Replace the entire contents of `styles.css` with:

```css
/* ── Design tokens ───────────────────────────────────────────────────── */
:root {
  --bg:        #0a0a0f;
  --surface:   #0d0d18;
  --border:    #1e1e2e;
  --accent:    #00ff88;
  --text:      #e8e8f0;
  --muted:     #555570;
  --sidebar-w: 220px;
}

/* ── Reset ───────────────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  line-height: 1.6;
}
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
img { display: block; max-width: 100%; }

/* ── Sidebar ─────────────────────────────────────────────────────────── */
.sidebar {
  position: fixed;
  top: 0; left: 0;
  width: var(--sidebar-w);
  height: 100vh;
  background: var(--surface);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  z-index: 100;
}
.sidebar-logo { display: inline-block; margin-bottom: 2.5rem; }
.sidebar-nav { display: flex; flex-direction: column; gap: 0.15rem; }
.nav-link {
  display: block;
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  border-left: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s, padding-left 0.2s;
}
.nav-link:hover { color: var(--text); }
.nav-link.active {
  color: var(--accent);
  border-left-color: var(--accent);
  padding-left: 1rem;
}
.sidebar-bottom { display: flex; flex-direction: column; gap: 1rem; align-items: flex-start; }
.social-link {
  color: var(--muted);
  display: inline-flex;
  align-items: center;
  transition: color 0.2s;
}
.social-link:hover { color: var(--accent); }
.resume-text { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em; }

/* ── Mobile header ───────────────────────────────────────────────────── */
.mobile-header {
  display: none;
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 56px;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 0 1.25rem;
  align-items: center;
  justify-content: space-between;
  z-index: 101;
}
.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 1px;
  transition: transform 0.2s, opacity 0.2s;
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ── Mobile nav drawer ───────────────────────────────────────────────── */
.mobile-nav {
  display: none;
  position: fixed;
  top: 56px; left: 0; right: 0;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 0.75rem 1.5rem;
  flex-direction: column;
  gap: 0;
  z-index: 100;
  transform: translateY(-110%);
  opacity: 0;
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.mobile-nav.open { transform: translateY(0); opacity: 1; }
.mobile-nav .nav-link {
  font-size: 0.875rem;
  padding: 0.65rem 0;
  border-left: none;
  border-bottom: 1px solid var(--border);
  letter-spacing: 0.06em;
}
.mobile-nav .nav-link:last-child { border-bottom: none; }

/* ── Main content area ───────────────────────────────────────────────── */
.main { margin-left: var(--sidebar-w); }

/* ── Section base ────────────────────────────────────────────────────── */
.section {
  min-height: 100vh;
  padding: 5rem 4rem;
  border-bottom: 1px solid var(--border);
}
.section-inner { max-width: 820px; }
.section-heading {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 3rem;
}
.section-number {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--accent);
  text-transform: uppercase;
}
.section-title {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: var(--text);
}

/* ── Shared: tags ────────────────────────────────────────────────────── */
.tag {
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  background: rgba(0, 255, 136, 0.07);
  border: 1px solid rgba(0, 255, 136, 0.18);
  color: var(--accent);
  font-size: 0.68rem;
  font-weight: 600;
  padding: 0.2em 0.6em;
  border-radius: 3px;
  letter-spacing: 0.03em;
}
.tag-years { opacity: 0.55; font-weight: 400; }

/* ── Shared: buttons ─────────────────────────────────────────────────── */
.btn {
  display: inline-block;
  padding: 0.6em 1.4em;
  border-radius: 4px;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  cursor: pointer;
}
.btn-primary {
  background: var(--accent);
  color: var(--bg);
  border: 1px solid var(--accent);
}
.btn-primary:hover { background: #00cc6e; border-color: #00cc6e; }
.btn-outline {
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
}
.btn-outline:hover { background: rgba(0, 255, 136, 0.08); }
```

- [ ] **Step 2: Verify layout in browser**

Open `index.html`. Expected: dark background, sidebar visible on the left with GM logo and nav links, main content area occupies the right side, page scrolls through all sections. Sidebar stays fixed while scrolling.

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: add design system, reset, sidebar, and layout shell CSS"
```

---

## Task 3: CSS — home section

**Files:**
- Modify: `styles.css` (append)

- [ ] **Step 1: Append home section styles to styles.css**

```css
/* ── Home section ────────────────────────────────────────────────────── */
.section--home { display: flex; align-items: center; }
.home-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  width: 100%;
  max-width: 900px;
}
.hero-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}
.hero-title {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  line-height: 1.05;
  color: var(--text);
  margin-bottom: 1.1rem;
}
.hero-sub {
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.65;
  margin-bottom: 1.25rem;
  max-width: 360px;
}
.location-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
}
.location-tags span {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  color: var(--muted);
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 0.25em 0.7em;
  border-radius: 3px;
}
.hero-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }

/* Activity card */
.activity-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 1.5rem;
}
.activity-card-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
}
.activity-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
  flex-shrink: 0;
}
.activity-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--accent);
  text-transform: uppercase;
}
.activity-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.activity-list li {
  font-size: 0.83rem;
  color: var(--muted);
  padding-left: 1.1em;
  position: relative;
  line-height: 1.5;
}
.activity-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent);
  opacity: 0.5;
  font-size: 0.75rem;
}
```

- [ ] **Step 2: Verify home section**

Open `index.html` and scroll to Home. Expected: two-column layout — hero text on left, activity card on right. Hero title in DM Serif Display, accent-colored label above, location tags below. Activity card has glowing green dot.

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: add home section styles"
```

---

## Task 4: CSS — about section

**Files:**
- Modify: `styles.css` (append)

- [ ] **Step 1: Append about section styles to styles.css**

```css
/* ── About section ───────────────────────────────────────────────────── */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}
.sub-heading {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--muted);
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.edu-card {
  border-left: 2px solid var(--border);
  padding-left: 1rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.edu-card h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text);
  line-height: 1.35;
}
.edu-concentration { font-size: 0.78rem; color: var(--muted); font-style: italic; }
.edu-institution { font-size: 0.78rem; font-weight: 600; color: var(--accent); }
.edu-meta { font-size: 0.72rem; color: var(--muted); }

.award-list { display: flex; flex-direction: column; gap: 1rem; }
.award-item { display: flex; flex-direction: column; gap: 0.2rem; }
.award-item h4 { font-size: 0.875rem; font-weight: 600; color: var(--text); }
.award-meta { font-size: 0.72rem; color: var(--muted); }

.skills-group { margin-bottom: 1.5rem; }
.skills-cat {
  display: block;
  font-size: 0.63rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--muted);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}
.skills-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
```

- [ ] **Step 2: Verify about section**

Scroll to About. Expected: two-column grid — education/awards on left, skills on right. Education cards have a left border. Skills render as green tag chips with year labels. Section number "01" in accent color before the title.

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: add about section styles"
```

---

## Task 5: CSS — experience section

**Files:**
- Modify: `styles.css` (append)

- [ ] **Step 1: Append experience section styles to styles.css**

```css
/* ── Experience section ──────────────────────────────────────────────── */
.work-list { display: flex; flex-direction: column; gap: 1.75rem; }
.work-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 2px solid var(--border);
  border-radius: 6px;
  padding: 1.75rem;
  transition: border-left-color 0.2s;
}
.work-card:hover { border-left-color: var(--accent); }
.work-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.875rem;
}
.work-role { font-size: 1rem; font-weight: 700; color: var(--text); margin-bottom: 0.2rem; }
.work-company { font-size: 0.78rem; font-weight: 600; color: var(--accent); }
.work-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 0.2rem; flex-shrink: 0; }
.work-date, .work-loc { font-size: 0.72rem; color: var(--muted); }
.work-desc { font-size: 0.85rem; color: var(--muted); margin-bottom: 1rem; line-height: 1.6; }
.work-achievements {
  list-style: disc;
  padding-left: 1.2rem;
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.work-achievements li { font-size: 0.82rem; color: var(--muted); line-height: 1.6; }
.work-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
```

- [ ] **Step 2: Verify experience section**

Scroll to Experience. Expected: two dark cards, each with a left accent border that glows green on hover. Company name in accent color. Dates and location right-aligned. Achievements as a bulleted list. Tech tags at the bottom.

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: add experience section styles"
```

---

## Task 6: CSS — projects section

**Files:**
- Modify: `styles.css` (append)

- [ ] **Step 1: Append projects section styles to styles.css**

```css
/* ── Projects section ────────────────────────────────────────────────── */
.project-list { display: flex; flex-direction: column; }
.project-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem 1.25rem;
  border-left: 2px solid var(--border);
  border-bottom: 1px solid var(--border);
  transition: border-left-color 0.2s, background 0.2s, padding-left 0.2s;
  cursor: pointer;
}
.project-list .project-row:first-child { border-top: 1px solid var(--border); }
.project-row:hover {
  border-left-color: var(--accent);
  background: rgba(0, 255, 136, 0.025);
  padding-left: 1.5rem;
}
.project-row-content { flex: 1; }
.project-name { font-size: 0.975rem; font-weight: 700; color: var(--text); margin-bottom: 0.4rem; }
.project-desc {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.55;
  margin-bottom: 0.75rem;
}
.project-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.project-arrow {
  font-size: 1rem;
  color: var(--muted);
  flex-shrink: 0;
  margin-top: 0.15rem;
  transition: color 0.2s, transform 0.2s;
}
.project-row:hover .project-arrow {
  color: var(--accent);
  transform: translate(3px, -3px);
}
```

- [ ] **Step 2: Verify projects section**

Scroll to Projects. Expected: three stacked project rows, each with a left border that turns green on hover. Hovering also shifts the row right slightly and animates the arrow up-right. Section number "03" before title.

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: add projects section styles with hover states"
```

---

## Task 7: CSS — contact section and footer

**Files:**
- Modify: `styles.css` (append)

- [ ] **Step 1: Append contact section styles to styles.css**

```css
/* ── Contact section ─────────────────────────────────────────────────── */
.section--contact {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.contact-body { max-width: 480px; }
.contact-tagline {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--muted);
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.contact-email {
  display: inline-block;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 1.75rem;
  transition: opacity 0.2s;
  font-family: 'Manrope', monospace;
}
.contact-email:hover { opacity: 0.7; }
.contact-socials { display: flex; gap: 1.25rem; align-items: center; }
.contact-socials .social-link { color: var(--muted); }
.contact-socials .social-link:hover { color: var(--accent); }

/* Footer */
.site-footer {
  margin-top: auto;
  padding-top: 4rem;
  font-size: 0.72rem;
  color: var(--muted);
}
```

- [ ] **Step 2: Verify contact section**

Scroll to Contact. Expected: "04 / Contact" heading, muted "Get in touch" label, green email link styled like a terminal prompt (starting with `>`), GitHub and LinkedIn icons below. Footer copyright at bottom.

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: add contact section and footer styles"
```

---

## Task 8: CSS — mobile responsive

**Files:**
- Modify: `styles.css` (append)

- [ ] **Step 1: Append responsive styles to styles.css**

```css
/* ── Responsive (≤ 768px) ────────────────────────────────────────────── */
@media (max-width: 768px) {
  .sidebar { display: none; }
  .mobile-header { display: flex; }
  .mobile-nav { display: flex; }
  .main { margin-left: 0; padding-top: 56px; }

  .section { padding: 3rem 1.5rem; }

  .home-inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .hero-sub { max-width: 100%; }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .work-card-header { flex-direction: column; gap: 0.4rem; }
  .work-meta { align-items: flex-start; }

  .section-heading { margin-bottom: 2rem; }
}
```

- [ ] **Step 2: Verify mobile layout**

Open browser devtools and set viewport to 375px wide. Expected: sidebar hidden, mobile header visible at top with GM logo and hamburger button. All sections stack single-column. Home hero and about grid stack vertically. Work card dates appear below role title.

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: add mobile responsive styles"
```

---

## Task 9: JavaScript — hamburger toggle and active nav state

**Files:**
- Write: `script.js`

- [ ] **Step 1: Write script.js**

Replace the entire contents of `script.js`:

```js
// Active sidebar nav state via IntersectionObserver
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove('active'));
        const active = document.querySelector(
          `.sidebar-nav [data-section="${entry.target.id}"]`
        );
        if (active) active.classList.add('active');
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((s) => sectionObserver.observe(s));

// Mobile hamburger toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger?.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  mobileNav.setAttribute('aria-hidden', String(!open));
});

// Close mobile nav when a link is tapped
mobileNav?.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  });
});
```

- [ ] **Step 2: Verify active nav state**

Open `index.html` in a browser and scroll slowly through all sections. Expected: the sidebar nav link corresponding to the current visible section highlights in green (`color: var(--accent)` + left border). Each link activates as its section enters the viewport.

- [ ] **Step 3: Verify hamburger (mobile)**

Set devtools viewport to 375px. Tap the hamburger button. Expected: the three bars animate into an X, and the mobile nav drawer slides down from the header. Tapping any nav link closes the drawer and animates the X back to bars.

- [ ] **Step 4: Replace LinkedIn placeholder**

In `index.html`, search for `[YOUR-LINKEDIN-SLUG]` (appears twice — sidebar and contact section) and replace with your actual LinkedIn profile slug.

- [ ] **Step 5: Commit**

```bash
git add script.js index.html
git commit -m "feat: add IntersectionObserver active nav state and mobile hamburger"
```

---

## Final Verification Checklist

- [ ] Desktop: sidebar is fixed on left, content scrolls independently
- [ ] Desktop: scrolling updates active sidebar nav link for each section
- [ ] Desktop: clicking a nav link smooth-scrolls to the correct section
- [ ] Desktop: hovering a project row triggers accent left border + arrow animation
- [ ] Desktop: hovering a work card triggers accent left border
- [ ] Desktop: "View Projects" CTA scrolls to Projects section
- [ ] Desktop: Resume button opens PDF in new tab
- [ ] Desktop: email link in contact opens mail client
- [ ] Mobile (375px): sidebar hidden, mobile header visible
- [ ] Mobile: hamburger opens/closes the nav drawer with animation
- [ ] Mobile: tapping a nav link in drawer closes it and scrolls to section
- [ ] Mobile: all sections display correctly in single-column layout
- [ ] LinkedIn URLs updated from placeholder to real URL
- [ ] Current Activity card updated with real summer internship info when available
- [ ] Second experience card filled in with real internship details
- [ ] Project rows filled in with real projects and linked to GitHub/live URLs
