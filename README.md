# Alper Dursun Portfolio --- https://alperdursun.vercel.app/

A modern, responsive personal portfolio website built with React, TypeScript, Vite and Tailwind CSS.

The site showcases my professional experience, selected projects, technical skills, education and contact information in a clean, accessible dark-themed interface.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Prerequisites

- Node.js 18 or newer
- npm 9 or newer

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

## Production Build

Create a production build with:

```bash
npm run build
```

The generated static files will be written to:

```text
dist/
```

## Project Structure

Key files and directories:

```text
src/
├── components/
│   ├── sections/
│   └── ui/
├── config/
│   └── site.ts
├── data/
│   ├── experience.ts
│   ├── projects.ts
│   └── skills.ts
├── types/
└── styles.css

public/
├── alperdursun-resume.pdf
└── favicon.svg
```

## Editing Portfolio Content

Portfolio content is separated from the presentation layer where possible.

- Personal information and links: `src/config/site.ts`
- Projects: `src/data/projects.ts`
- Professional experience: `src/data/experience.ts`
- Technical skills: `src/data/skills.ts`
- Page sections and presentation: `src/components/sections/`
- Global styles: `src/styles.css`

## Resume

The resume used by the website is located at:

```text
public/alperdursun-resume.pdf
```

The resume path is configured in:

```text
src/config/site.ts
```

## Professional Projects

Some projects displayed on the website are based on professional enterprise work.

For confidentiality reasons, proprietary source code, internal database structures, production URLs, company-sensitive information and other confidential implementation details are not included in this repository.

## Deployment

The website is fully static and can be deployed to platforms such as:

- Vercel
- Cloudflare Pages
- GitHub Pages

### Vercel

1. Import this repository into Vercel.
2. Select **Vite** as the framework preset if it is not detected automatically.
3. Use the following build settings:

```text
Build Command: npm run build
Output Directory: dist
```

4. Deploy the project.

No environment variables are required.

## Responsive Design

The website is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

## Accessibility

The project includes:

- Semantic HTML
- Keyboard-accessible navigation
- Visible focus states
- Accessible project dialogs
- Reduced-motion support
- Responsive navigation
- ARIA labels where appropriate

## Author

**Alper Dursun**

Software Developer / .NET Developer

- GitHub: https://github.com/bygones34
- LinkedIn: https://www.linkedin.com/in/alperdursuun

## License

This project is intended as a personal portfolio website.
