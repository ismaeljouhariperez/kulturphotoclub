# 📸 Kultur Photo Club - Documentation

> A modern photo culture magazine built with Next.js 15.3, React 19, TypeScript, Tailwind CSS 4, and Sanity.io

## Overview

Kultur Photo Club is an editorial blog focused on photography culture, featuring in-depth articles, photographer portraits, and monthly recommendations. The platform is built with a modern tech stack optimized for performance, SEO, and content management.

## 🚀 Tech Stack

### Frontend

- **Next.js 15.3** with App Router
- **React 19** with native metadata handling
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **pnpm** as package manager

### CMS & Content

- **Sanity.io v3** as headless CMS
- **Sanity Studio** for content management
- **PortableText** for rich content rendering
- **GROQ** for content queries

### Features

- ✅ Responsive horizontal tile layout for articles
- ✅ Reading progress bar on article pages
- ✅ Image galleries and carousels support
- ✅ SEO optimized with React 19 native metadata
- ✅ Editorial design focused on photography
- ✅ Three content categories: Long reads, Recommendations, News

## 📁 Project Structure

```
kulturphotoclub/
├── next/                     # Next.js frontend application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # React components
│   │   ├── lib/            # Utilities & Sanity config
│   │   └── types/          # TypeScript definitions
│   ├── package.json
│   └── tailwind.config.ts
├── studio/                   # Sanity Studio CMS
│   ├── schemaTypes/         # Content schemas
│   ├── sanity.config.ts
│   └── package.json
├── docs/                     # Project documentation
└── README.md
```

## 🛠 Installation & Setup

### Prerequisites

- Node.js >= 20.x
- pnpm >= 8.x
- Sanity.io account

### 1. Clone the repository

```bash
git clone [repository-url]
cd kulturphotoclub
```

### 2. Install dependencies

**Frontend (Next.js):**

```bash
cd next
pnpm install
```

**Studio (Sanity):**

```bash
cd studio
npm install
```

### 3. Environment variables

Create `.env.local` in the `next/` directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-10-01
```

### 4. Start development servers

**Frontend:**

```bash
cd next
pnpm dev
# Available at http://localhost:3000
```

**Sanity Studio:**

```bash
cd studio
npm run dev
# Available at http://localhost:3333
```

## 📝 Content Management

### Content Types

1. **Posts (Articles)**

   - Long reads: In-depth photography articles
   - Recommendations: Monthly favorites and discoveries
   - News: Photography world updates

2. **Categories**

   - Pre-configured: Long read, Recommandations, Actualités

3. **Authors**

   - Author profiles with bio and image

4. **Pages**
   - Static pages (About, Contact)

### Content Creation

1. Access Sanity Studio at `http://localhost:3333`
2. Create an author profile
3. Set up categories
4. Write your first article with:
   - Title and slug
   - Main image
   - Excerpt
   - Rich content with galleries
   - SEO metadata

## 🎨 Design System

### Typography

- **Headings**: Light font weights for editorial feel
- **Body**: Optimized for readability
- **Spacing**: Generous whitespace for focus

### Layout

- **Homepage**: Horizontal tiles with index numbering
- **Articles**: Reading progress bar and rich content
- **Navigation**: Clean header with logo, menu, and contact

### Colors

- Monochromatic palette with gray scales
- Focus on content and photography
- Minimal color distractions

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push

### Sanity Studio Deployment

```bash
cd studio
npm run deploy
```

## 📊 Performance & SEO

- **Next.js 15.3** with optimized App Router
- **React 19 native metadata** for SEO
- **Sanity CDN** for optimized image delivery
- **TypeScript** for development reliability
- **Tailwind CSS 4** for minimal CSS bundle

## 🔧 Development

### Key Components

- `PostList`: Homepage article tiles
- `ReadingProgress`: Article reading progress bar
- `Navigation`: Site header and navigation
- `PortableText`: Rich content rendering

### Sanity Schemas

- `post.ts`: Article schema with galleries
- `category.ts`: Content categorization
- `author.ts`: Author profiles
- `page.ts`: Static pages
- `blockContent.ts`: Rich text with custom blocks

## 📚 Additional Resources

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React 19 Documentation](https://react.dev)

## 🤝 Contributing

This is a personal photography blog project. For suggestions or collaborations, please contact via the contact page.

## 📄 License

Private project - Kultur Photo Club © 2025
