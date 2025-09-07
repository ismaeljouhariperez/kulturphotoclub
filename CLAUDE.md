# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kultur Photo Club is a photography blog built with a modern tech stack:
- **Next.js 15.3** with App Router
- **React 19** 
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **Sanity.io v3** as headless CMS
- **Node.js**: Requires version 20+ (specified in package.json engines)

## Architecture

This is a monorepo with two main applications:

```
kulturphotoclub/
├── next/              # Next.js frontend application
├── studio/            # Sanity CMS studio
├── docs/              # Documentation
└── .cursor/           # Cursor AI rules and configurations
```

### Frontend (next/)
- **Framework**: Next.js 15.3 with App Router (`src/app/`)
- **Components**: Located in `src/components/`
- **Sanity Integration**: `src/lib/sanity.ts` contains client configuration, TypeScript types, and GROQ queries
- **Key Types**: `Post`, `Category`, `Author`, `Page` defined in `src/lib/sanity.ts:18-82`

### CMS (studio/)
- **Sanity Studio**: Configured for content management
- **Project ID**: `sdkeb4ck`
- **Dataset**: `production`
- **Schemas**: Located in `studio/schemaTypes/` (post, author, category, page, blockContent)

## Development Commands

### Frontend Development (next/)
```bash
cd next
npm run dev        # Development server (localhost:3000)
npm run build      # Production build
npm run start      # Production server
npm run lint       # ESLint checking
```

### CMS Development (studio/)
```bash
cd studio
npm run dev        # Studio development (localhost:3333)
npm run build      # Build studio
npm run deploy     # Deploy studio to Sanity
```

## Environment Configuration

The frontend requires these environment variables in `next/.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=sdkeb4ck
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-10-01
```

## Key Implementation Details

### Sanity Integration
- **Client**: Configured in `src/lib/sanity.ts:5-10` with environment variables
- **Image URLs**: Use `urlFor()` helper from `src/lib/sanity.ts:14-15`
- **Queries**: Pre-defined GROQ queries in `src/lib/sanity.ts:85-133`
  - `allPosts`: Homepage post list
  - `postBySlug`: Individual post with full content
  - `pageBySlug`: Static pages
  - `allCategories`: Category listings

### Content Types
- **Posts**: Full blog articles with gallery support, SEO, and reading time
- **Pages**: Static content pages
- **Authors**: Author profiles with bio and images  
- **Categories**: Post categorization system

### Frontend Structure
- **Layout**: Global layout in `src/app/layout.tsx`
- **Pages**: 
  - Homepage: `src/app/page.tsx`
  - Blog posts: `src/app/blog/[slug]/page.tsx`
  - Static pages: `src/app/about/page.tsx`, `src/app/contact/page.tsx`
- **Components**:
  - `Navigation.tsx`: Site navigation
  - `PostList.tsx`: Blog post listings
  - `ReadingProgress.tsx`: Reading progress indicator

## Code Style and Conventions

The project follows the configurations defined in `.cursor/` rules:
- React 19 best practices with Server Components by default
- TypeScript strict mode
- Next.js 15.3 App Router patterns
- Sanity CMS integration patterns
- Tailwind CSS for styling

## Testing and Quality

- **Linting**: Run `npm run lint` in both `next/` and `studio/` directories
- **TypeScript**: Project uses strict TypeScript configuration
- **Prettier**: Configured in `studio/package.json` with specific formatting rules

## CORS Configuration

For local development, ensure CORS is configured for Sanity:
```bash
cd studio
npx sanity cors add http://localhost:3000
```