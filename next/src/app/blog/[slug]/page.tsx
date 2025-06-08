import { notFound } from "next/navigation";
import { client, urlFor } from "@/lib/sanity";
import type { Post } from "@/lib/sanity";
import Navigation from "@/components/Navigation";
import ReadingProgress from "@/components/ReadingProgress";
import { PortableText } from "next-sanity";

// Requête GROQ pour récupérer un article par son slug
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  _createdAt,
  title,
  slug,
  excerpt,
  mainImage,
  body,
  gallery,
  readingTime,
  author->{
    name,
    slug,
    bio,
    image
  },
  category->{
    title,
    slug
  },
  seo
}`;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post: Post = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    notFound();
  }

  return (
    <>
      <ReadingProgress />
      <Navigation />

      <article className="min-h-screen bg-white">
        {/* En-tête de l'article */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="space-y-6">
            {/* Catégorie */}
            <div className="text-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                {post.category.title}
              </span>
            </div>

            {/* Titre */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 text-center leading-tight">
              {post.title}
            </h1>

            {/* Métadonnées */}
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <time dateTime={post._createdAt}>
                {new Date(post._createdAt).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>

              <span className="text-gray-400">•</span>

              <span>{post.author.name}</span>

              {post.readingTime && (
                <>
                  <span className="text-gray-400">•</span>
                  <span>{post.readingTime} min de lecture</span>
                </>
              )}
            </div>

            {/* Extrait */}
            {post.excerpt && (
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            )}
          </div>
        </header>

        {/* Image principale */}
        {post.mainImage && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
              <img
                src={urlFor(post.mainImage).width(1200).height(675).url()}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Contenu de l'article */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="prose prose-lg max-w-none">
            <PortableText
              value={post.body}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="text-gray-800 leading-relaxed mb-6">
                      {children}
                    </p>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-light text-gray-900 mt-12 mb-6">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-light text-gray-900 mt-8 mb-4">
                      {children}
                    </h3>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-gray-300 pl-6 my-8 text-xl font-light text-gray-700 italic">
                      {children}
                    </blockquote>
                  ),
                  caption: ({ children }) => (
                    <p className="text-sm text-gray-500 text-center mt-2 mb-6 italic">
                      {children}
                    </p>
                  ),
                },
                marks: {
                  strong: ({ children }) => (
                    <strong className="font-semibold text-gray-900">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => <em className="italic">{children}</em>,
                  link: ({ children, value }) => (
                    <a
                      href={value.href}
                      className="text-gray-900 underline hover:text-gray-700 transition-colors"
                      target={value.blank ? "_blank" : "_self"}
                      rel={value.blank ? "noopener noreferrer" : undefined}
                    >
                      {children}
                    </a>
                  ),
                },
                types: {
                  image: ({ value }) => (
                    <div className="my-8">
                      <img
                        src={urlFor(value).width(800).height(600).url()}
                        alt={value.alt || ""}
                        className="w-full rounded-lg"
                      />
                      {value.caption && (
                        <p className="text-sm text-gray-500 text-center mt-2 italic">
                          {value.caption}
                        </p>
                      )}
                    </div>
                  ),
                  carousel: ({ value }) => (
                    <div className="my-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {value.images?.map(
                          (
                            image: {
                              asset: { _ref: string };
                              alt?: string;
                              caption?: string;
                            },
                            index: number
                          ) => (
                            <div key={index}>
                              <img
                                src={urlFor(image).width(400).height(300).url()}
                                alt={image.alt || ""}
                                className="w-full rounded-lg"
                              />
                              {image.caption && (
                                <p className="text-sm text-gray-500 text-center mt-2 italic">
                                  {image.caption}
                                </p>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ),
                },
              }}
            />
          </div>

          {/* Galerie supplémentaire */}
          {post.gallery && post.gallery.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-light text-gray-900 mb-6">
                Galerie
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {post.gallery.map((image, index) => (
                  <div key={index}>
                    <img
                      src={urlFor(image).width(400).height(300).url()}
                      alt={image.alt || ""}
                      className="w-full rounded-lg"
                    />
                    {image.caption && (
                      <p className="text-sm text-gray-500 text-center mt-2 italic">
                        {image.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Informations sur l'auteur */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-4">
              {post.author.image && (
                <img
                  src={urlFor(post.author.image).width(80).height(80).url()}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full"
                />
              )}
              <div>
                <h3 className="font-medium text-gray-900">
                  {post.author.name}
                </h3>
                {post.author.bio && (
                  <p className="text-sm text-gray-600 mt-1">
                    {post.author.bio}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

// Génération des métadonnées pour le SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post: Post = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    return {
      title: "Article non trouvé",
    };
  }

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: post.mainImage
        ? [urlFor(post.mainImage).width(1200).height(630).url()]
        : [],
    },
  };
}
