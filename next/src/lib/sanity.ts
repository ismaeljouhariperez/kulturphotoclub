import { createClient, PortableTextBlock } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Configuration du client Sanity
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-01",
  useCdn: process.env.NODE_ENV === "production",
});

// Helper pour les URLs d'images
const builder = imageUrlBuilder(client);
export const urlFor = (source: Parameters<typeof builder.image>[0]) =>
  builder.image(source);

// Types TypeScript pour nos données Sanity
export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  slug: { current: string };
  author: {
    name: string;
    slug: { current: string };
  };
  mainImage: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  category: {
    title: string;
    slug: { current: string };
  };
  excerpt?: string;
  publishedAt: string;
  readingTime?: number;
  body: PortableTextBlock[];
  gallery?: Array<{
    asset: { _ref: string };
    alt?: string;
    caption?: string;
  }>;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
}

export interface Author {
  _id: string;
  name: string;
  slug: { current: string };
  image?: {
    asset: { _ref: string };
  };
  bio?: string;
}

export interface Page {
  _id: string;
  title: string;
  slug: { current: string };
  content: PortableTextBlock[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

// Requêtes GROQ communes
export const queries = {
  // Récupérer tous les articles pour la page d'accueil (ordonnés par date)
  allPosts: `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    author->{name, slug},
    mainImage{asset->{_ref}, alt},
    category->{title, slug},
    excerpt,
    publishedAt,
    readingTime
  }`,

  // Récupérer un article par son slug
  postBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    author->{name, slug, image, bio},
    mainImage{asset->{_ref}, alt},
    category->{title, slug},
    excerpt,
    publishedAt,
    readingTime,
    body,
    gallery[]{asset->{_ref}, alt, caption},
    seo
  }`,

  // Récupérer une page par son slug
  pageBySlug: `*[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    content,
    seo
  }`,

  // Récupérer toutes les catégories
  allCategories: `*[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }`,
};
