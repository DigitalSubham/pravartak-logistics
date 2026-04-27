# pravartak Logistics — Next.js Website

A modern, professional logistics company website built with Next.js 14 (App Router) and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS only
- **Icons:** Lucide React
- **Fonts:** Sora (display) + DM Sans (body) via next/font/google
- **Language:** TypeScript

## Pages

| Route           | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
| `/`             | Homepage — Hero, Services, Why Us, How It Works, Testimonials, CTA |
| `/about`        | Company story, Mission/Vision, Stats, Team, Trust signals          |
| `/services`     | Full service catalog with feature lists                            |
| `/track`        | Shipment tracking UI with mock data                                |
| `/order`        | Quote request form with validation                                 |
| `/blogs`        | Blog listing with featured post                                    |
| `/blogs/[slug]` | Blog detail with sidebar, related posts                            |
| `/contact`      | Contact form, info cards, map placeholder                          |

## Components

| Component           | Location                                                                |
| ------------------- | ----------------------------------------------------------------------- |
| `Navbar`            | `components/Navbar.tsx` — sticky, responsive, mobile menu               |
| `Footer`            | `components/Footer.tsx` — multi-column, social links                    |
| `Button`            | `components/Button.tsx` — variants: primary/secondary/outline/ghost     |
| `FormInputs`        | `components/FormInputs.tsx` — Input, Textarea, Select, Label, FormGroup |
| `SectionComponents` | `components/SectionComponents.tsx` — Section, SectionHeading, PageHero  |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

## Design System

- **Primary color:** Blue 600 (`#2563eb`)
- **Neutral palette:** Slate scale
- **Border radius:** `rounded-xl` (12px) / `rounded-2xl` (16px) / `rounded-3xl` (24px)
- **Typography:** Sora for headings, DM Sans for body
- **Shadows:** Soft (`shadow-sm`), elevated (`shadow-xl`)
- **Transitions:** 200–300ms ease

## Project Structure

```
pravartak/
├── app/
│   ├── layout.tsx          # Root layout with Navbar + Footer
│   ├── globals.css         # Tailwind directives + utilities
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── track/page.tsx
│   ├── order/page.tsx
│   ├── blogs/
│   │   ├── page.tsx        # Blog listing
│   │   └── [slug]/page.tsx # Blog detail
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── FormInputs.tsx
│   └── SectionComponents.tsx
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Customization

- **Brand name / logo:** Update `components/Navbar.tsx` and `components/Footer.tsx`
- **Color palette:** Update `tailwind.config.js` `brand` color scale
- **Services:** Update the `services` array in `app/page.tsx` and `app/services/page.tsx`
- **Blog posts:** Add entries to the `blogs` array in `app/blogs/page.tsx`
- **Contact details:** Update `contactInfo` in `app/contact/page.tsx` and footer links
- **Team members:** Update `team` array in `app/about/page.tsx`
