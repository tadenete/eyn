# EYN Solutions LLC Website

A modern, responsive website for EYN Solutions LLC built with Next.js, featuring technology consulting and software development services.

## Features

- **Responsive Design**: Built with Bootstrap 5 for mobile-first responsive design
- **Modern UI**: Clean, professional design with EYN brand colors
- **Contact Form**: Integrated contact form with reCAPTCHA protection
- **Service Showcase**: Dynamic service pages with markdown content
- **SEO Optimized**: Proper meta tags and structured content

## Technology Stack

- **Framework**: Next.js 15.5.4
- **Styling**: Bootstrap 5.3.8 with custom CSS
- **Content**: Markdown with gray-matter for service descriptions
- **Email**: Nodemailer for contact form submissions
- **Security**: Google reCAPTCHA integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy the email configuration in `next.config.js`
   - Add your reCAPTCHA keys
   - Configure SMTP settings

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
eyn/
├── components/          # React components
│   ├── contact/        # Contact form components
│   ├── home/           # Home page components
│   ├── layout/         # Layout and navigation
│   ├── services/       # Service display components
│   └── ui/             # Reusable UI components
├── lib/                # Utility functions
├── pages/              # Next.js pages and API routes
├── public/             # Static assets
│   └── images/         # Images and logos
├── services/           # Service markdown files
└── styles/             # Global styles
```

## Customization

### Brand Colors
Update the CSS custom properties in `styles/globals.css`:
- `--eyn-primary`: Main brand color (dark blue)
- `--eyn-secondary`: Accent color (light blue/cyan)
- `--eyn-accent`: Secondary accent (dark gray)

### Services
Add new services by creating markdown files in the `services/` directory with frontmatter:
```markdown
---
title: 'Service Name'
image: 'service-image.png'
excerpt: 'Brief service description'
---

Detailed service description...
```

### Contact Form
Configure email settings in `next.config.js` and update the contact form component as needed.

## Deployment

The site can be deployed to any platform that supports Next.js:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Self-hosted with Node.js

## License

© 2024 EYN Solutions LLC. All rights reserved.


