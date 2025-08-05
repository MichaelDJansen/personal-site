# Michael David Jansen - Portfolio Site

A modern, interactive portfolio website showcasing web development experience and skills, built with Next.js 13+ App Router, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with smooth micro-interactions and animations
- **Modern Stack**: Next.js 13+ with App Router, TypeScript, and Tailwind CSS
- **Static Export**: Optimized for GitHub Pages deployment with conditional basePath
- **Interactive Timeline**: Work experience with expand/collapse functionality and skill tags
- **Skills Showcase**: Animated technology logos with hover effects
- **Social Integration**: Links to LinkedIn, YouTube, Instagram, and GitHub with staggered animations
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML, skip links, and keyboard navigation
- **Performance**: Intersection Observer API for scroll-triggered animations and lazy loading
- **Magnetic Effects**: Desktop-enhanced buttons with magnetic hover interactions
- **Progressive Enhancement**: Touch-friendly mobile experience with reduced motion support

## Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom CSS properties and themes
- **Font**: Space Grotesk from Google Fonts
- **Deployment**: Static export for GitHub Pages
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Intersection Observer API, GPU-accelerated animations

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in development mode.

### Building

```bash
# Build for production
npm run build

# Start production server (after build)
npm run start

# Run linting
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with semantic structure
│   └── page.tsx           # Main portfolio page
├── components/            # Reusable UI components
│   ├── Button/           # Button component with variant system
│   ├── Footer/           # Site footer with social links
│   ├── HamburgerButton/  # Mobile menu toggle button
│   ├── Header/           # Site header with navigation
│   ├── MagneticButton/   # Desktop magnetic hover effects
│   ├── MobileMenu/       # Mobile navigation menu
│   ├── RevealSection/    # Scroll-triggered animations
│   ├── ScrollProgress/   # Visual scroll indicator
│   ├── SkeletonLoader/   # Loading state component
│   ├── SkipLink/         # Accessibility navigation
│   ├── Skills/           # Skills showcase section
│   ├── Tag/             # Skill/technology tags
│   └── Timeline/        # Work experience timeline
│       └── TimelineItem/ # Individual timeline entries
├── hooks/                # Custom React hooks
│   ├── useIntersectionObserver.ts # Scroll animation hook
│   └── useMagneticEffect.ts      # Magnetic button hook
├── constants.ts          # Job history, skills, and social data
├── globals.css          # Global styles and micro-interactions
├── themes/              # CSS custom properties
│   └── default.css      # Default theme variables
└── utils/               # Utility functions
    └── index.ts         # Asset path utilities
```

## Key Features

### Static Export Configuration
The site is configured for static export with conditional basePath handling:
- Development: Standard Next.js routing
- Production: `/personal-site` basePath for GitHub Pages

### Asset Management
Uses a custom `getAssetPath()` utility to handle asset paths correctly across development and production environments. Assets are stored in `public/assets/` directory with organized subdirectories for social icons and technology logos.

### Component Architecture
- **Button**: Reusable button component with variant system (primary, secondary, ghost) and loading states
- **MagneticButton**: Desktop-enhanced button wrapper with magnetic hover effects using mouse proximity
- **Header/Footer**: Semantic layout components with mobile hamburger menu and accessibility features
- **Timeline**: Interactive work experience display with expand/collapse functionality and SVG progress line
- **TimelineItem**: Enhanced job entries with responsive truncation, accessibility, and micro-interactions
- **Tag**: Skill/technology tags with hover animations and semantic markup
- **RevealSection**: Intersection Observer-powered component for scroll-triggered animations
- **ScrollProgress**: Visual scroll indicator showing page progress
- **SkipLink**: Accessibility component for screen reader navigation
- **Skills**: Animated technology showcase with hover effects and responsive grid

## Deployment

This site is configured for deployment to GitHub Pages using static export. The build process generates static HTML/CSS/JS files in the `out/` directory.

## Development Notes

### Content Management
- Edit job history and skills in `src/constants.ts`
- Update social media links in the `SOCIAL_LINKS` array
- Modify technology logos in the `SKILL_LOGOS` array

### Styling System
- Theme colors defined in `src/themes/default.css` as CSS custom properties
- Global styles and micro-interactions in `src/globals.css`
- Tailwind CSS with custom color variables (primary, secondary, tertiary, quaternary)
- CSS Grid layout using `grid-rows-layout` for main structure

### Component Development
- Follow existing patterns in `src/components/` with individual folders per component
- Use TypeScript interfaces for prop definitions
- Implement accessibility features (ARIA labels, semantic HTML, keyboard navigation)
- All asset references must use `getAssetPath()` utility from `src/utils/index.ts`

### Performance Considerations
- Use Intersection Observer API for scroll-triggered animations
- Implement progressive enhancement for touch devices
- Respect `prefers-reduced-motion` for accessibility
- GPU-accelerated animations using `transform` and `opacity`

### Accessibility Features
- Semantic HTML structure with proper landmarks
- WCAG 2.1 AA color contrast compliance
- Keyboard navigation support for all interactive elements
- Screen reader support with ARIA labels and live regions
- Skip-to-content navigation for keyboard users
