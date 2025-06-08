import Navigation from "@/components/Navigation";

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8">
            {/* En-tête */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Contact
              </h1>
              <div className="w-16 h-px bg-gray-300 mx-auto"></div>
            </div>

            {/* Contenu principal */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <p className="text-lg text-gray-700">
                  Une question, une suggestion, ou envie de collaborer ?
                </p>
                <p className="text-gray-600">
                  N&apos;hésitez pas à nous écrire, nous serons ravis
                  d&apos;échanger avec vous.
                </p>
              </div>

              {/* Informations de contact */}
              <div className="bg-gray-50 rounded-lg p-8 space-y-6">
                <div className="text-center">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">
                    Nous contacter
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-700">
                      contact@kulturphotoclub.com
                    </span>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm text-gray-500">
                      Temps de réponse habituel : 24-48h
                    </p>
                  </div>
                </div>
              </div>

              {/* Collaborations */}
              <div className="space-y-6">
                <h2 className="text-xl font-medium text-gray-900 text-center">
                  Collaborations
                </h2>

                <div className="space-y-4 text-gray-700">
                  <p>
                    Nous sommes toujours à la recherche de nouveaux talents et
                    de perspectives fraîches. Si vous êtes photographe,
                    critique, historien de l&apos;art ou passionné de
                    photographie, vos contributions sont les bienvenues.
                  </p>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="font-medium text-gray-900 mb-3">
                      Types de contributions
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>
                        • Articles de fond sur des thématiques photographiques
                      </li>
                      <li>• Portraits et interviews de photographes</li>
                      <li>• Critiques d&apos;expositions et de livres photo</li>
                      <li>• Recommandations et coups de cœur</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux (placeholder pour le futur) */}
              <div className="text-center pt-8">
                <p className="text-sm text-gray-500">
                  Suivez-nous prochainement sur les réseaux sociaux
                </p>
              </div>
            </div>

            {/* Séparateur */}
            <div className="w-16 h-px bg-gray-300 mx-auto my-12"></div>

            {/* Footer message */}
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Merci de votre intérêt pour Kultur Photo Club
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
  title: "Contact - Kultur Photo Club",
  description:
    "Contactez Kultur Photo Club pour toute question, suggestion ou collaboration. Nous sommes à la recherche de nouveaux talents et perspectives.",
};
