import { client } from "@/lib/sanity";
import type { Post } from "@/lib/sanity";
import Navigation from "@/components/Navigation";
import PostList from "@/components/PostList";

// Requête GROQ pour récupérer les articles
const POSTS_QUERY = `*[_type == "post"] | order(_createdAt desc) {
  _id,
  _createdAt,
  title,
  slug,
  excerpt,
  mainImage,
  author->{
    name,
    slug
  },
  category->{
    title,
    slug
  }
}`;

export default async function HomePage() {
  const posts: Post[] = await client.fetch(POSTS_QUERY);

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Kultur Photo Club
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un magazine culture photo avec des articles de fond, des portraits
              éditoriaux de photographes, et des recommandations mensuelles.
            </p>
          </div>
        </section>

        {/* Articles Section */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <PostList posts={posts} />
          ) : (
            <div className="max-w-4xl mx-auto text-center py-12">
              <p className="text-gray-500">
                Aucun article n&apos;est encore publié.
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

// Métadonnées pour le SEO
export const metadata = {
  title: "Kultur Photo Club - Magazine Culture Photo",
  description:
    "Un magazine culture photo avec des articles de fond, des portraits éditoriaux de photographes, et des recommandations mensuelles.",
};
