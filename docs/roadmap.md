# Product Roadmap

This document outlines the strategic plan for improving the personal portfolio website.

## Phase 1: Fix & Basic Experience (Immediate Priority)

Focus on usability, navigation, and leveraging existing core features.

- [x] **Integrate Header**
  - Add sticky navigation menu (Home, About, Projects, Contact).
  - Implement mobile responsive menu (Hamburger/Sheet).
  - Ensure active state highlighting.
- [x] **Theme Toggle**
  - Implement Dark/Light mode switcher.
  - Expose the "Deep Space" theme to users explicitly.
- [x] **Favicon & Meta Tags**
  - Update `favicon.ico` and `manifest.json`.
  - Tweak SEO meta tags (OpenGraph image, Title, Description).

## Phase 1.5: UI/UX & Mobile Polish (Completed)

- [x] **Standardize Layouts**
  - Create reusable `SectionHeader` for consistent typography.
  - Normalize section padding (`py-20`).
- [x] **Mobile Experience**
  - Fix alignment in Experience timeline to prevent cutting off content.
  - Wrap `SkillNetwork` in container for proper centering.

## Phase 3: Header Revamp (Completed)

- [x] **Branding Upgrade**
  - Replace text name with Avatar/Logo + Name.
  - Add visual distinction for the brand area.
- [x] **Advanced Navigation**
  - Add "Active State" indicators (e.g., motion underline).
  - Add icons to mobile menu items.
- [x] **Action Area**
  - Add separated **Resume/CV** button (Primary CTA).
  - Integrate Social Icons (GitHub/LinkedIn) directly into Header.
- [x] **Visual Polish**
  - Enhance Glassmorphism effect (blur + border).
  - Increase height for better touch targets.

## Phase 4: Engagement & Trust

Focus on content depth and social proof to establish seniority.

- [ ] **Blog Section (MDX)**
  - Create a blog engine using MDX.
  - Write technical breakdowns/case studies.
- [ ] **Testimonials**
  - Add a section for LinkedIn recommendations or colleague feedback.
- [ ] **Detailed Project Pages**
  - Create dynamic routes `/projects/[slug]` for deep dives.
  - Structure: Problem -> Solution -> Tech Stack -> Outcome (Metrics).

## Phase 3: Advanced Features (Wow Factors)

Focus on interactive and unique elements to stand out.

- [ ] **Interactive Terminal**
  - Implement a simulated CLI where users can type commands (e.g., `whoami`, `cat skills.txt`).
- [ ] **Guestbook**
  - Database-backed comment section for visitors (with moderation).
- [ ] **Analytics Integration**
  - Integrate PostHog or Umami for privacy-focused analytics.
- [ ] **Spotify Now Playing**
  - Real-time API integration to show current listening status.
