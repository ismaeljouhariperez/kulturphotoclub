import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import type { Post } from "@/lib/sanity";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header des colonnes */}
      <div className="grid grid-cols-12 gap-4 py-4 border-b border-gray-200 text-sm font-medium text-gray-500 uppercase tracking-wide">
        <div className="col-span-1">#</div>
        <div className="col-span-10">Article</div>
        <div className="col-span-1"></div>
      </div>

      {/* Liste des articles */}
      <div className="space-y-0">
        {posts.map((post, index) => (
          <article key={post._id} className="group">
            {/* Ligne principale */}
            <div className="grid grid-cols-12 gap-4 py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors">
              {/* Index numéroté */}
              <div className="col-span-1 flex items-center">
                <span className="text-lg font-mono text-gray-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Contenu principal (image + métadonnées) */}
              <div className="col-span-10">
                <div className="flex gap-6 items-start">
                  {/* Image */}
                  {post.mainImage && (
                    <div className="flex-shrink-0">
                      <img
                        src={urlFor(post.mainImage).width(120).height(80).url()}
                        alt={post.title}
                        className="w-30 h-20 object-cover rounded-lg"
                      />
                    </div>
                  )}

                  {/* Métadonnées */}
                  <div className="flex-grow min-w-0">
                    <div className="flex flex-col space-y-2">
                      {/* Titre */}
                      <h2 className="text-xl font-medium text-gray-900 group-hover:text-black transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Métadonnées */}
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <time dateTime={post._createdAt}>
                          {new Date(post._createdAt).toLocaleDateString(
                            "fr-FR",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </time>

                        <span className="text-gray-400">•</span>

                        <span>{post.author.name}</span>

                        <span className="text-gray-400">•</span>

                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {post.category.title}
                        </span>
                      </div>

                      {/* Extrait si disponible */}
                      {post.excerpt && (
                        <p className="text-sm text-gray-600 line-clamp-2 mt-2">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bouton + pour consulter */}
              <div className="col-span-1 flex items-center justify-center">
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors group-hover:scale-110 transform duration-200"
                >
                  <span className="text-lg font-light">+</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
