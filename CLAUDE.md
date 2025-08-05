# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build the production application for static export
- `npm run start` - Start production server (after build)
- `npm run lint` - Run ESLint to check code quality

## Architecture Overview

This is a Next.js 13+ portfolio website using the App Router with TypeScript and Tailwind CSS. The site is configured for static export with a conditional basePath for GitHub Pages deployment.

### Key Configuration

- **Static Export**: Configured with `output: "export"` in next.config.js
- **Conditional BasePath**: Uses `/personal-site` for production, empty for development
- **Asset Path Utility**: The `getAssetPath()` function in `src/utils/index.ts` handles asset paths correctly for both dev and production

### Project Structure

- **Layout**: `src/app/layout.tsx` defines the semantic root layout with header, main, and footer structure
- **Main Page**: `src/app/page.tsx` contains the portfolio homepage with hero, skills, experience, and contact sections
- **Components**: Located in `src/components/` with each component in its own folder (Button, Footer, Header, Tag, Timeline with TimelineItem, SkipLink, ScrollProgress, RevealSection, MagneticButton)
- **Hooks**: Custom hooks in `src/hooks/` for timeline expansion, magnetic effects, and intersection observers
- **Constants**: `src/constants.ts` contains job history and skills data
- **Themes**: CSS custom properties defined in `src/themes/default.css`
- **Global Styles**: `src/globals.css` contains global styling and micro-interaction animations
- **Utilities**: `src/utils/index.ts` contains helper functions like `getAssetPath()`

### Component Architecture

- **Button**: Reusable button component with variant system (primary, secondary, ghost) and loading states
- **MagneticButton**: Desktop-enhanced button wrapper with magnetic hover effects using mouse proximity
- **Header/Footer**: Semantic layout components with mobile hamburger menu and accessibility features
- **SkipLink**: Accessibility component for screen reader navigation
- **ScrollProgress**: Visual scroll indicator for page progress
- **RevealSection**: Intersection Observer-powered component for scroll-triggered animations
- **Timeline**: Displays work experience with expand/collapse functionality and SVG progress line
- **TimelineItem**: Enhanced job entries with responsive truncation, accessibility, and micro-interactions
- **Tag**: Reusable skill/technology tags with hover animations

### Styling System

- **Tailwind CSS**: Primary styling framework with custom color variables
- **CSS Custom Properties**: Theme colors defined as CSS variables (primary, secondary, tertiary, quarternary)
- **Grid Layout**: Uses CSS Grid for main layout structure (`grid-rows-layout`)
- **Responsive Design**: Mobile-first approach with md/lg breakpoints

### Asset Management

- Assets stored in `public/assets/` directory
- Use `getAssetPath()` utility for all asset references to handle basePath correctly
- Images include profile photo, social icons (GitHub, Instagram, LinkedIn, YouTube), and technology logos (Jest, JS, Next.js, Node, React, Sass, SQL, Storybook, TypeScript)

### Development Notes

- Uses Space Grotesk font from Google Fonts
- Smooth scrolling enabled globally with reduced motion support
- Comprehensive micro-interactions including social icon animations, skill reveals, and magnetic effects
- WCAG 2.1 AA accessibility compliance with semantic HTML, ARIA labels, and keyboard navigation
- Performance optimized with Intersection Observer API and GPU-accelerated animations
- Progressive enhancement for touch devices and reduced motion preferences
- Social media links to LinkedIn, YouTube, Instagram, and GitHub with staggered hover animations

### Custom Hooks

- **useIntersectionObserver**: Generic hook for scroll-triggered animations with TypeScript safety
- **useMagneticEffect**: Desktop-only magnetic button effect with mouse proximity calculations and touch detection

### Accessibility Features

- Semantic HTML structure with proper landmarks (header, main, nav, section, footer)
- Skip-to-content navigation for keyboard users
- ARIA labels, roles, and live regions for screen readers
- Keyboard navigation support for all interactive elements
- Color contrast compliance with WCAG 2.1 AA standards
- Reduced motion support respecting user preferences
- Focus management and visible focus indicators