# Hirezy - AI Voice Transform Reality

A modern website built with Tailwind CSS and HTML.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Build CSS (Development)
```bash
npm run build
```
This will watch for changes and automatically rebuild the CSS.

### 3. Build CSS (Production)
```bash
npm run build:prod
```
This will create a minified production build.

### 4. Open the Website
Open `index.html` in your browser.

## File Structure
```
hireyz/
├── index.html              # Main HTML file
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── src/
│   └── input.css          # Source CSS with Tailwind directives
├── dist/
│   └── output.css         # Compiled CSS (generated)
└── assets/
    └── images/            # Image assets
```

## Custom Theme
The project uses a custom Tailwind theme with:
- Poppins font family
- Custom color palette
- Responsive design utilities

## Development
- Run `npm run build` to start the development build process
- The CSS will automatically rebuild when you make changes
- Use `npm run build:prod` for production builds 