import Navigation from "@/components/Navigation";

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8">
            {/* En-tête */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                À propos
              </h1>
              <div className="w-16 h-px bg-gray-300 mx-auto"></div>
            </div>

            {/* Contenu principal */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-xl text-gray-800 font-light">
                  Kultur Photo Club est un magazine culture photo qui explore
                  les dimensions artistiques, sociales et créatives de la
                  photographie contemporaine.
                </p>

                <p>
                  Notre mission est de mettre en lumière les talents émergents
                  et confirmés de la photographie, à travers des articles de
                  fond qui interrogent les grandes thématiques de notre époque :
                  la famille, l&apos;identité, l&apos;urbanisme,
                  l&apos;environnement...
                </p>

                <p>Nous proposons trois types de contenus :</p>

                <div className="grid md:grid-cols-3 gap-8 my-12">
                  <div className="text-center">
                    <div className="bg-gray-100 rounded-lg p-6 mb-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Long read
                      </h3>
                      <p className="text-sm text-gray-600">
                        Des articles de fond qui explorent en profondeur une
                        thématique photographique
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-gray-100 rounded-lg p-6 mb-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Recommandations
                      </h3>
                      <p className="text-sm text-gray-600">
                        Nos coups de cœur mensuels : livres, expositions,
                        découvertes photographiques
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-gray-100 rounded-lg p-6 mb-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Actualités
                      </h3>
                      <p className="text-sm text-gray-600">
                        Les nouvelles du monde de la photographie et les
                        événements à ne pas manquer
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  Chaque article est pensé pour offrir une lecture riche et
                  inspirante, accompagnée d&apos;une sélection d&apos;images
                  soigneusement choisies pour illustrer et enrichir le propos.
                </p>

                <p>
                  Kultur Photo Club s&apos;adresse aux passionnés de
                  photographie, aux professionnels de l&apos;image et à tous
                  ceux qui souhaitent découvrir la richesse culturelle de cet
                  art contemporain.
                </p>
              </div>
            </div>

            {/* Séparateur */}
            <div className="w-16 h-px bg-gray-300 mx-auto my-12"></div>

            {/* Signature */}
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Une publication indépendante dédiée à la culture photographique
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// Métadonnées SEO
export const metadata = {
  title: "À propos - Kultur Photo Club",
  description:
    "Kultur Photo Club est un magazine culture photo qui explore les dimensions artistiques, sociales et créatives de la photographie contemporaine.",
};
