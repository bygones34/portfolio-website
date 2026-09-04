# Alper Dursun Portfolio

A production-ready, static personal portfolio built with React, TypeScript, Vite and Tailwind CSS. It presents professional experience, selected projects, skills, education and contact links in a responsive, accessible dark interface.

## Prerequisites

- Node.js 18 or newer
- npm 9 or newer

## Installation and local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
```

The static production output is written to `dist/`.

## Editing portfolio content

- Personal links and contact details: `src/config/site.ts`
- Projects: `src/data/projects.ts`
- Skills: `src/data/skills.ts`
- Professional experience: `src/data/experience.ts`
- Page copy and section presentation: `src/components/sections/`

Replace the clearly marked placeholder email, GitHub URL and LinkedIn URL in `src/config/site.ts` before publishing. Optional project repository and demo links can be added to project entries in `src/data/projects.ts`.

## Resume

Place the real resume at `public/resume.pdf`. The application builds successfully without this file, but the resume links will return a 404 until it is added. Do not commit a resume containing information you do not intend to publish.

An optional profile image can later be placed at `public/profile.jpg`; the current layout deliberately does not require or display one.

## Deploying to Vercel

1. Import the repository in Vercel.
2. Set the project root to this directory if it lives inside a monorepo.
3. Vercel should detect Vite automatically. Otherwise use build command `npm run build` and output directory `dist`.
4. Deploy. No environment variables are required.

The same `dist/` output can be deployed to Cloudflare Pages or GitHub Pages. For GitHub Pages under a repository subpath, set Vite's `base` option to the repository name before building.
