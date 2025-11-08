import { Book, Rocket, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-24 sm:pb-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100 shadow-sm">
                <Star className="h-3.5 w-3.5 text-yellow-500" />
                <span>Nouveau • Édition 2025</span>
              </div>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Le guide ultime pour lancer et vendre votre e‑book
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Une méthode claire, des exemples concrets et des feuilles de route prêtes à l’emploi pour créer, publier et rentabiliser votre e‑book — sans vous perdre dans la technique.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href="#acheter"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition"
                >
                  <Rocket className="h-5 w-5" />
                  Obtenir le livre
                </a>
                <a
                  href="#extrait"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-gray-900 font-semibold ring-1 ring-gray-200 hover:bg-gray-50 transition"
                >
                  <Book className="h-5 w-5" />
                  Lire un extrait
                </a>
              </div>
              <div className="mt-6 text-sm text-gray-500">
                <span className="font-medium text-gray-700">Bonus:</span> modèles de pages de vente, checklists et accès à des ressources exclusives.
              </div>
            </div>
            <div className="relative">
              <div className="mx-auto max-w-md lg:max-w-none">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 shadow-xl ring-1 ring-black/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-[82%] w-[72%] bg-white rounded-xl shadow-2xl ring-1 ring-gray-100" />
                  </div>
                  <div className="absolute left-6 top-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 ring-1 ring-gray-200">
                      <Book className="h-3.5 w-3.5 text-blue-600" />
                      Format PDF + EPUB
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <div className="inline-flex items-center gap-1 rounded-full bg-blue-600/90 px-3 py-1 text-xs font-semibold text-white ring-1 ring-blue-500">
                      200+ pages
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
