# Prajwal Kittali | Vrajana ⚡

A dark, minimal, surrealist personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](public/images/preview.png)

## Features

- **Dark Aesthetic**: Sophisticated dark theme with accent colors
- **Surrealist Design**: Floating hand elements with ethereal animations
- **Smooth Animations**: Framer Motion powered scroll reveals and parallax effects
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Next.js 14 with App Router for optimal performance
- **Type Safe**: Built with TypeScript for type safety

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Playfair Display (serif), Inter (sans-serif)
- **Icons**: Iconify

## Project Structure

```
/app
  layout.tsx          → Root layout with fonts, metadata, noise overlay
  page.tsx            → Assembles all sections
/components
  Navbar.tsx          → Fixed navigation with scroll effects
  HeroSection.tsx     → Hero with parallax and floating elements
  MissionSection.tsx  → Philosophy quote and tech stack
  WorksSection.tsx    → Project cards with parallax
  Footer.tsx          → Watermark and social links
  RevealOnScroll.tsx  → Reusable Framer Motion wrapper
  LiveClock.tsx       → Client component for live time
/public
  /images             → Hand/surrealist PNGs
  noise.svg           → Noise texture overlay
/styles
  globals.css         → CSS variables, noise overlay, custom styles
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel --prod
```

### Other Platforms

The project is configured for static export. The built files will be in the `dist` folder:

```bash
npm run build
# Deploy the 'dist' folder to your hosting platform
```

## Customization

### Personal Information

Edit the following files to customize with your information:

- `app/layout.tsx` - Update metadata (title, description, OG tags)
- `components/Navbar.tsx` - Update logo name
- `components/HeroSection.tsx` - Update name, tagline, subheadline, city
- `components/MissionSection.tsx` - Update philosophy quote
- `components/WorksSection.tsx` - Update project cards
- `components/Footer.tsx` - Update watermark and social links

### Colors

The design uses CSS variables defined in `styles/globals.css`:

```css
:root {
  --bg: #050505; /* Background color */
  --accent: #ff4500; /* Accent color (orange-red) */
  --card: #111111; /* Card background */
}
```

### Fonts

Fonts are loaded via `next/font/google` in `app/layout.tsx`:

- **Inter**: Body text, UI elements (weights: 300, 400, 500, 600)
- **Playfair Display**: Headings, quotes (weights: 400, 500, 600, 700, italic)

## Design System

### Colors

- Background: `#050505`
- Accent: `#FF4500`
- Card: `#111111`
- Text Primary: `#ffffff`
- Text Secondary: `rgba(255, 255, 255, 0.6)`
- Text Muted: `rgba(255, 255, 255, 0.4)`

### Typography

- Headings: Playfair Display
- Body: Inter
- Mono: System monospace (for clock)

### Spacing

- Section padding: `py-32` to `py-40`
- Container max-width: `max-w-5xl` to `max-w-7xl`
- Grid gaps: `gap-6` to `gap-8`

### Animations

- Float Left: 12s loop, translateY -20px, rotate 2deg
- Float Right: 14s loop, translateY 20px, rotate -2deg
- Reveal on Scroll: 0.8s duration, ease [0.22, 1, 0.36, 1]

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

- Design inspired by high-end design agency aesthetics
- Surrealist hand images generated with AI
- Noise texture from [grainy-gradients](https://grainy-gradients.vercel.app/)

---

Built by Prajwal Kittali
