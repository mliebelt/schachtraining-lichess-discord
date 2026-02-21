# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a German-language documentation website about online chess training using Lichess and Discord. The site is built with Docusaurus 2.4.1 and deployed to Netlify. It provides workshop materials, tutorials, and reference documentation for chess trainers.

## Development Commands

### Start Development Server
```bash
npm start
```
Starts local dev server at http://localhost:3000 with hot reload.

### Build for Production
```bash
npm run build
```
Generates static content into the `build` directory. This is what gets deployed to production.

### Serve Production Build Locally
```bash
npm run serve
```
Serves the production build locally for testing before deployment.

### Type Checking
```bash
npm run typecheck
```
Runs TypeScript type checking without emitting files.

### Clear Cache
```bash
npm run clear
```
Clears Docusaurus cache and generated files. Use when encountering build issues.

### Markdown Linting
The project uses markdownlint with configuration in `.markdownlint.json`. Rules MD033 (inline HTML) and MD013 (line length) are disabled to accommodate the documentation style.

## Project Structure

### Content Organization

- **`docs/`** - Main documentation content in Markdown
  - `intro.md` - Workshop overview and introduction
  - `lichess.md` - Comprehensive Lichess reference
  - `discord.md` - Discord usage guide
  - `training.md` - Training scenarios reference
  - `uebungen.md` - Practical exercises
  - `Workshops/` - Dated workshop materials (ws2206.md, ws2304.md, ws2405.md, ws2411.md)

- **`blog/`** - Blog posts with authors configuration in `authors.yml`

- **`src/`** - React/TypeScript source code
  - `pages/` - Custom pages (homepage)
  - `components/` - React components (HomepageFeatures)
  - `css/` - Custom styling

- **`static/`** - Static assets served directly
  - `img/` - Images and logos
  - `open-challenge.html` - Static HTML page

- **`docs/bilder/`** - Documentation images (screenshots, diagrams)

### Configuration Files

- **`docusaurus.config.js`** - Main Docusaurus configuration
  - Site title: "Schachunterricht mit Lichess und Discord online"
  - Base URL: `/`
  - Locale: German (`de`)
  - Deployed to Netlify
  - GitHub org: mliebelt@github

- **`sidebars.js`** - Sidebar configuration (auto-generated from docs folder structure)

- **`babel.config.js`** - Babel configuration for Docusaurus

- **`tsconfig.json`** - TypeScript configuration

## Architecture Notes

### Docusaurus Classic Preset
The project uses the Docusaurus classic preset which includes:
- Docs plugin for documentation pages
- Blog plugin with reading time estimates
- Theme with custom CSS (`src/css/custom.css`)

### Sidebar Generation
Sidebars are auto-generated from the `docs/` directory structure. To add new documentation:
1. Create a new `.md` file in `docs/`
2. Add frontmatter with `sidebar_position` to control ordering
3. The sidebar will update automatically

### Content Language
All content is in German. When editing:
- Maintain consistent German terminology
- Use formal "Sie" form where addressing users
- Keep technical terms in original language (Lichess, Discord, etc.)

### Deployment
The site deploys to Netlify automatically. Build status badge is in README.md. The production URL is: https://schachtraining-lichess.netlify.app/

### Theme Customization
- Light theme: GitHub (prism-react-renderer)
- Dark theme: Dracula (prism-react-renderer)
- Custom CSS in `src/css/custom.css`

## Common Workflows

### Adding New Documentation
1. Create `.md` file in `docs/` directory
2. Add frontmatter with title and sidebar_position
3. Write content in Markdown
4. Add images to `docs/bilder/` if needed
5. Reference images with relative paths
6. Build locally to verify

### Modifying React Components
1. Edit files in `src/components/` or `src/pages/`
2. Use TypeScript for type safety
3. Import Docusaurus theme components from `@theme/`
4. Run `npm run typecheck` to verify types

### Working with Images
- Place documentation images in `docs/bilder/`
- Static assets in `static/img/`
- Reference from docs: `![alt text](bilder/image-name.png)`
- Reference from React: `require('@site/static/img/image-name.png')`

### Testing Changes
1. Run `npm start` for development with hot reload
2. Run `npm run build` to test production build
3. Run `npm run serve` to preview production build locally
4. Fix any TypeScript errors with `npm run typecheck`
