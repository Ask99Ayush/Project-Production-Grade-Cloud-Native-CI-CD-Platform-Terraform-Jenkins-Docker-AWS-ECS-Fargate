# CloudForge CI/CD Platform — Brand Showcase

A production-grade, fully responsive brand showcase page for a Cloud-Native CI/CD platform built with Jenkins, Terraform, Docker, Amazon ECS Fargate, Blue-Green Deployment, CloudFront, CloudWatch Monitoring, and SNS Alerting.

## Tech Stack

- React 18 + TypeScript
- Vite
- Framer Motion
- Tailwind CSS
- Lucide React (icons)

## Prerequisites

- Node.js >= 18.x
- npm >= 9.x

## Getting Started

```bash
cp .env.example .env
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    layout/       Global layout wrappers (Navbar, Footer)
    sections/     Page sections (Hero, Architecture, Pipeline, etc.)
    ui/           Atomic UI components (Badge, Card, Button, etc.)
  context/        ThemeContext (dark/light mode)
  data/           Central content configuration (projectConfig.ts)
  hooks/          Custom React hooks
  pages/          Top-level page compositions
  styles/         Global CSS and Tailwind base
  types/          TypeScript interfaces
```

## Environment Variables

See `.env.example` for all required variables.

## Customization

All visible content — project title, description, tech stack, architecture steps, metrics, team info, and screenshots — lives in `src/data/projectConfig.ts`. Swap data there without touching any component.
