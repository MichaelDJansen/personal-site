# Michael David Jansen - Portfolio Site

A modern portfolio website showcasing web development experience and skills, built with Next.js 13+ App Router, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with smooth animations
- **Modern Stack**: Next.js 13+ with App Router, TypeScript, and Tailwind CSS
- **Static Export**: Optimized for GitHub Pages deployment
- **Experience Timeline**: Interactive work history with skill tags
- **Skills Showcase**: Technology logos and proficiency display
- **Social Integration**: Links to LinkedIn, YouTube, Instagram, and GitHub

## Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom CSS properties
- **Font**: Space Grotesk from Google Fonts
- **Deployment**: Static export for GitHub Pages

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
src/app/
├── components/          # Reusable UI components
│   ├── Timeline/       # Work experience timeline
│   ├── Header/         # Site header with navigation
│   ├── Footer/         # Site footer
│   └── Tag/           # Skill/technology tags
├── constants.ts        # Job history and skills data
├── utils/             # Utility functions (asset paths)
├── themes/            # CSS custom properties
└── page.tsx           # Main portfolio page
```

## Key Features

### Static Export Configuration
The site is configured for static export with conditional basePath handling:
- Development: Standard Next.js routing
- Production: `/personal-site` basePath for GitHub Pages

### Asset Management
Uses a custom `getAssetPath()` utility to handle asset paths correctly across development and production environments.

### Component Architecture
- **Timeline**: Displays work experience chronologically
- **TimelineItem**: Individual job entries with descriptions and skill tags
- **Responsive Grid**: CSS Grid layout for optimal viewing on all devices

## Deployment

This site is configured for deployment to GitHub Pages using static export. The build process generates static HTML/CSS/JS files in the `out/` directory.

## Development Notes

- Edit content in `src/app/constants.ts` to update job history and skills
- Modify theme colors in `src/app/themes/default.css`
- Add new components in `src/app/components/` following existing patterns
- All asset references should use the `getAssetPath()` utility
