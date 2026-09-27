# Rajeshads

A modern portfolio and advertising journal website built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

Live demo: https://rajeshads.vercel.app

## Overview

This project presents a polished marketing and advertising showcase with sections for:

- Print advertisements
- Television advertisements
- Social media campaigns
- Outdoor advertising concepts
- Portfolio-style presentation for Rajesh Thami D

## Tech Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- React Router
- Vitest

## Project Structure

```bash
.
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example
├── .gitignore
├── README.md
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
└── tailwind.config.ts
```

## Prerequisites

Before running this project locally, make sure you have:

- Node.js 18+
- npm or bun

## Local Setup

1. Clone the repository

```bash
git clone https://github.com/Rajeshd178/rajeshads.git
cd rajeshads
```

2. Install dependencies

```bash
npm install
```

3. Create environment file

```bash
cp .env.example .env
```

4. Start the development server

```bash
npm run dev
```

The app will run on the local Vite port (usually http://localhost:5173).

## Environment Variables

Create a `.env` file based on `.env.example`:

```bash
VITE_APP_TITLE=Rajeshads
VITE_APP_DESCRIPTION=Portfolio and Advertising Journal
VITE_SITE_URL=https://rajeshads.vercel.app
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run test
npm run lint
```

## Build and Deployment

To create a production build:

```bash
npm run build
```

This project is configured for Vercel deployment. You can deploy directly from the GitHub repository or through the Vercel dashboard.

## Notes

This repository was generated with a starter Vite + React + shadcn structure and is currently being adapted into a personal portfolio and marketing showcase.

## Future Improvements

- Add real project sections and portfolio details
- Add contact and social links
- Add custom animations and motion effects
- Add CMS or content management support
- Add SEO metadata and Open Graph tags

## License

This project is currently unlicensed. Add a license if you want to publish it for broader reuse.
