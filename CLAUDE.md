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
- **Asset Path Utility**: The `getAssetPath()` function in `src/app/utils/index.ts` handles asset paths correctly for both dev and production

### Project Structure

- **Layout**: `src/app/layout.tsx` defines the root layout with header/footer grid structure
- **Main Page**: `src/app/page.tsx` contains the portfolio homepage with hero, skills, and experience sections
- **Components**: Located in `src/app/components/` with each component in its own folder
- **Constants**: `src/app/constants.ts` contains job history and skills data
- **Themes**: CSS custom properties defined in `src/app/themes/default.css`

### Component Architecture

- **Timeline**: Displays work experience using TimelineItem components
- **TimelineItem**: Individual job entries with company details, descriptions, and skill tags
- **Tag**: Reusable skill/technology tags
- **Header/Footer**: Layout components for site navigation and footer content

### Styling System

- **Tailwind CSS**: Primary styling framework with custom color variables
- **CSS Custom Properties**: Theme colors defined as CSS variables (primary, secondary, tertiary, quarternary)
- **Grid Layout**: Uses CSS Grid for main layout structure (`grid-rows-layout`)
- **Responsive Design**: Mobile-first approach with md/lg breakpoints

### Asset Management

- Assets stored in `public/assets/` and `src/app/assets/`
- Use `getAssetPath()` utility for all asset references to handle basePath correctly
- Images include profile photo, social icons, and technology logos

### Development Notes

- Uses Space Grotesk font from Google Fonts
- Smooth scrolling enabled globally
- Fade-in animation on main content
- Social media links to LinkedIn, YouTube, Instagram, and GitHub