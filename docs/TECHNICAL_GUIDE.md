# Technical Guide - Kultur Photo Club

## Architecture Overview

This project follows modern React/Next.js best practices with a feature-based organization and strict TypeScript implementation.

## Frontend Architecture

### Next.js 15.3 Configuration

The project uses the App Router with the following key features:

- **Server Components** by default for optimal performance
- **Client Components** only when needed (navigation, reading progress)
- **React 19 metadata API** for SEO instead of react-helmet
- **TypeScript strict mode** for maximum type safety

### Folder Structure Philosophy

```
src/
├── app/                    # App Router (routing & pages)
│   ├── page.tsx           # Homepage
│   ├── about/page.tsx     # Static about page
│   ├── contact/page.tsx   # Static contact page
│   └── blog/[slug]/       # Dynamic article pages
├── components/            # Reusable components
│   ├── Navigation.tsx     # Site header (client component)
│   ├── PostList.tsx       # Homepage article list
│   └── ReadingProgress.tsx # Reading bar (client component)
├── lib/                   # Configuration & utilities
│   └── sanity.ts          # Sanity client & types
```

**Design Principles:**

- **Feature-based organization**: Related code stays together
- **Colocation**: Components, styles, and tests in same directory
- **Server-first**: Use server components unless client features needed

### TypeScript Implementation

All Sanity data is strictly typed:

```typescript
export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  slug: { current: string };
  author: {
    name: string;
    slug: { current: string };
    image?: { asset: { _ref: string } };
    bio?: string;
  };
  // ... complete type definitions
}
```

**Type Safety Strategy:**

- Interface-driven development
- Sanity schema → TypeScript interfaces
- GROQ queries match interface structure
- No `any` types allowed in production code

## Sanity CMS Architecture

### Schema Design

The content model is designed for editorial flexibility:

#### Post Schema (`studio/schemaTypes/post.ts`)

```javascript
{
  name: 'post',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'mainImage', type: 'image' },
    { name: 'body', type: 'blockContent' },
    { name: 'gallery', type: 'array' },
    { name: 'category', type: 'reference' },
    // ... SEO and metadata fields
  ]
}
```

#### Block Content Schema

Custom blocks support:

- Standard rich text (headings, paragraphs, lists)
- Image blocks with captions
- Carousel blocks for image galleries
- Quote blocks for editorial content

### GROQ Queries

Optimized queries for performance:

```javascript
// Homepage query - minimal data
const POSTS_QUERY = `*[_type == "post"] | order(_createdAt desc) {
  _id, title, slug, excerpt, mainImage,
  author->{ name, slug },
  category->{ title, slug }
}`;

// Individual post - complete data
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  // ... all fields including body and gallery
}`;
```

## Styling Architecture

### Tailwind CSS 4 Strategy

The design system uses utility-first approach with custom components:

```css
/* Editorial design principles */
- Typography: Light font weights, generous spacing
- Colors: Monochromatic grays, minimal color
- Layout: Grid-based, responsive breakpoints
- Images: Optimized aspect ratios
```

### Component Styling Patterns

```tsx
// Consistent patterns used throughout
const styles = {
  container: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
  heading: "text-4xl md:text-5xl font-light text-gray-900",
  text: "text-gray-700 leading-relaxed",
  separator: "w-16 h-px bg-gray-300 mx-auto",
};
```

## Performance Optimizations

### Image Optimization

```typescript
// Sanity image transformations
urlFor(image)
  .width(1200) // Responsive sizing
  .height(675) // Consistent aspect ratio
  .format("webp") // Modern format when supported
  .url();
```

### Code Splitting

- **Automatic**: Next.js handles route-based splitting
- **Manual**: Dynamic imports for heavy components
- **Client components**: Minimal client-side JavaScript

### Caching Strategy

- **Static Generation**: Homepage and about/contact pages
- **ISR**: Article pages with revalidation
- **Sanity CDN**: Automatic image caching

## SEO Implementation

### React 19 Metadata API

```tsx
// Page-level metadata
export const metadata = {
  title: "Page Title",
  description: "Page description",
  openGraph: {
    title: "OG Title",
    description: "OG Description",
    images: [{ url: "image-url" }],
  },
};

// Dynamic metadata for articles
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
  };
}
```

### Structured Data

Future enhancement: JSON-LD for article structured data

## Development Workflow

### Environment Setup

1. **Development**: Local Next.js + Local Sanity Studio
2. **Staging**: Vercel Preview + Sanity Dataset
3. **Production**: Vercel + Sanity Production Dataset

### Code Quality

- **TypeScript**: Strict type checking
- **ESLint**: Code quality rules
- **Prettier**: Code formatting
- **Git hooks**: Pre-commit checks

### Testing Strategy

Future implementation:

- **Unit tests**: Component testing with Jest/Vitest
- **Integration tests**: Page rendering
- **E2E tests**: Playwright for user flows

## Deployment Architecture

### Vercel Configuration

```javascript
// next.config.js optimizations
module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
    formats: ["image/webp", "image/avif"],
  },
  experimental: {
    ppr: true, // Partial Prerendering
  },
};
```

### Environment Variables

```env
# Required for production
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-10-01

# Optional optimizations
SANITY_REVALIDATE_SECRET=secret_for_webhooks
```

## Monitoring & Analytics

### Performance Monitoring

Future additions:

- Web Vitals tracking
- Core Web Vitals optimization
- Image loading performance

### Content Analytics

Potential integrations:

- Sanity Analytics
- Google Analytics 4
- Reading time analytics

## Security Considerations

### Content Security

- **CORS**: Configured for Sanity CDN
- **Image sources**: Restricted to Sanity domains
- **XSS protection**: React built-in + content sanitization

### API Security

- **Rate limiting**: Sanity built-in
- **Preview mode**: Secure token-based access
- **Environment secrets**: Properly managed

## Future Enhancements

### Planned Features

1. **Comments system**: Future integration
2. **Newsletter**: Email subscription
3. **Social sharing**: Article sharing buttons
4. **Search**: Full-text search with Sanity
5. **Dark mode**: Theme switching capability

### Scalability Considerations

- **CDN**: Global content delivery
- **Database**: Sanity scales automatically
- **Caching**: Redis for enhanced performance
- **Monitoring**: Application performance monitoring

## Troubleshooting

### Common Issues

1. **Build errors**: Usually TypeScript mismatches
2. **Image loading**: Check Sanity CDN configuration
3. **Styling issues**: Tailwind purging problems
4. **Deployment**: Environment variable configuration

### Debug Tools

- **Next.js DevTools**: Built-in debugging
- **Sanity Studio**: Content preview and debugging
- **Browser DevTools**: Performance and network analysis
