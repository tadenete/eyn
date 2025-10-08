# Background Images Reference

This document describes the background images used on each page of the EYN Solutions website.

## Hero Section Background Images

### 1. **Home Page** (`/`)
- **Image URL**: `https://images.unsplash.com/photo-1522071820081-009f0129c71c`
- **Description**: Team of professionals collaborating around a laptop in a modern office setting
- **Theme**: Teamwork, collaboration, IT professionals working together
- **Location in code**: `styles/globals.css` - `.hero-background`

### 2. **About Page** (`/about`)
- **Image URL**: `https://images.unsplash.com/photo-1551836022-d5d88e9218df`
- **Description**: Business team meeting with technology and data focus
- **Theme**: Professional team discussion, business strategy, technology consulting
- **Location in code**: `styles/globals.css` - `.about-hero-background`

### 3. **Services Page** (`/services`)
- **Image URL**: `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40`
- **Description**: Business professional analyzing data and charts on laptop
- **Theme**: Data analysis, business intelligence, IT services
- **Location in code**: `styles/globals.css` - `.services-hero-background`

### 4. **Contact Page** (`/contact`)
- **Image URL**: `https://images.unsplash.com/photo-1555992457-f824f970c891`
- **Description**: Washington DC Capitol Building and surrounding area
- **Theme**: Washington DC location, government sector, federal services, local presence
- **Location in code**: `styles/globals.css` - `.contact-hero-background`

## Technical Implementation

All hero backgrounds use:
- **Gradient overlay**: Blue/cyan gradient aligned with EYN brand colors (#1e3a8a, #06b6d4)
- **Dark overlay**: Semi-transparent dark layer (70% opacity) to ensure text readability
- **SVG Pattern**: Subtle geometric pattern overlay for visual interest
- **Background blend mode**: `overlay` for professional look

## How to Replace Images

To replace any background image:

1. Open `styles/globals.css`
2. Find the appropriate section (e.g., `.hero-background`)
3. Replace the Unsplash URL with your own image URL or local path
4. Example:
   ```css
   background: linear-gradient(...),
     url('/images/backgrounds/your-image.jpg') center/cover no-repeat;
   ```

## Using Local Images

To use local images instead of Unsplash URLs:

1. Create a folder: `public/images/backgrounds/`
2. Add your images there
3. Update the CSS to reference them:
   ```css
   url('/images/backgrounds/home-hero.jpg')
   ```

## DC Location Images

For a stronger Washington DC theme, consider using images featuring:
- US Capitol Building
- Washington Monument
- DC skyline
- Federal buildings
- Local DC tech hubs and startups
- DC business district

## Recommended Image Specifications

- **Resolution**: Minimum 2000px wide
- **Format**: JPG (optimized) or WebP
- **File size**: Under 500KB for performance
- **Aspect ratio**: 16:9 or wider
- **Subject**: Professional, business-focused, with people in action
- **Color tone**: Cool tones (blues, grays) work best with the brand gradient

## Notes

- Images are loaded from Unsplash CDN with automatic optimization (`?q=80&w=2000&auto=format&fit=crop`)
- All text remains fully readable with the overlay system
- Backgrounds are fully responsive and work on all device sizes
- Images maintain accessibility with proper contrast ratios
