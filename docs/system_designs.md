# Rocket Design System Principles

This document outlines the core design principles and technical strategies used in the "Rocket" theme revamp of the portfolio.

## 1. Visual Theme: "Deep Space" & Light Mode Hybrid

The application uses a hybrid theming strategy to balance visual impact with readability.

- **Global Theme**: Defaults to **Light Mode** (White background, Black text) for standard content sections (Social Proof, Features, Testimonials).
- **Hero Section**: Uses a **Dark Mode** aesthetic regardless of the global theme.
  - **Background**: Deep space imagery or gradients.
  - **Text Color**: Explicitly forced to `text-white` or `text-zinc-200`.
  - **Contrast Strategy**: Heavy reliance on opacity overlays (`bg-background/10` to `bg-background/20`) to ensure text legibility against complex backgrounds.

## 2. Component Architecture

### Header (Glassmorphism & Fixed Overlay)

The header is designed to be immersive at the top and functional when scrolling.

- **Positioning**: `fixed top-0` (NOT `sticky`). This allows the Hero background to extend underneath the header to the very top of the viewport.
- **Scroll States (`isScrolled`)**:
  - **Top (0px)**: Transparent background (`bg-transparent`), White text (`text-white`), No border.
  - **Scrolled (>50px)**: Glassmorphism background (`bg-background/80`, `backdrop-blur-xl`), Black text (`text-foreground`), Bottom border.
- **Components**: Navigation links, Social icons, and Theme Toggle must dynamically switch text color based on the `isScrolled` state.

### Hero Section (Input-Centric)

- **Concept**: "Think it. Type it. Launch it." - focusing on an AI/Command-bar interface.
- **Input**: Large, pill-shaped input field with glassmorphism (`bg-background/50`, `backdrop-blur-xl`) and distinct borders.
- **Z-Index Layering**:
  - **Backgrounds**: `absolute inset-0` (z-index implicit 0). Avoid negative z-index without a new stacking context to prevent hiding behind the body.
  - **Content**: `relative z-10`. All actionable elements (Input, Buttons, Text) must be elevated.

## 3. Media & Performance

### Responsive Backgrounds

To balance visual quality with performance (Core Web Vitals):

- **Strategy**: Use Next.js `<Image>` component.
- **Desktop**: High-res image (e.g., 1920x1080), hidden on mobile (`hidden sm:block`).
- **Mobile**: Optimized vertical crop (e.g., 800x600), hidden on desktop (`sm:hidden`).
- **Optimization**: Use `priority` for Hero LCP. Use `unoptimized` ONLY if external providers (like placeholder services) time out; otherwise, let Next.js optimize local assets.

## 4. Typography

- **Headings**: Bold, tight tracking (`tracking-tight`).
- **Gradients**: Use `bg-linear-to-br` (Tailwind v4 syntax) for text gradients (e.g., `from-white to-white/70`).
- **Body**: standard sans-serif (Inter/Geist) with good readability.

## 5. Technical Constraints

- **Z-Index**: Always ensure `HeroSection` content is `z-10` or higher to sit above its own background.
- **Theme Toggle**: Must handle custom `className` props to blend into the transparent header.
