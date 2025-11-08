import { Check } from 'lucide-react'

const benefits = [
  'Accès immédiat (PDF + EPUB)',
  'Mises à jour gratuites à vie',
  'Templates de pages & emails',
  'Groupe privé d’entraide',
]

export default function Pricing() {
  return (
    <section id="acheter" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Passez à l’action aujourd’hui</h2>
          <p className="mt-3 text-lg leading-8 text-gray-600">Investissez une fois, utilisez-le pour tous vos projets.</p>
        </div>
        <div className="mx-auto mt-10 max-w-5xl grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Édition Standard</h3>
            <p className="mt-2 text-gray-600">Tout le contenu du livre + bonus essentiels.</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-gray-900">29€</span>
              <span className="text-gray-500">paiement unique</span>
            </div>
            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-gray-700">
                  <Check className="h-4 w-4 text-green-600" /> {b}
                </li>
              ))}
            </ul>
            <a href="#checkout" className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow hover:bg-blue-700">Acheter maintenant</a>
          </div>
          <div className="relative rounded-2xl border-2 border-blue-600 bg-gradient-to-b from-blue-50 to-white p-8 shadow-sm">
            <div className="absolute -top-3 right-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">Populaire</div>
            <h3 className="text-xl font-semibold text-gray-900">Édition Pro</h3>
            <p className="mt-2 text-gray-600">Le livre, tous les bonus + ateliers vidéo.</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-gray-900">59€</span>
              <span className="text-gray-500">paiement unique</span>
            </div>
            <ul className="mt-6 space-y-3">
              {benefits.concat(['3 ateliers vidéo', 'Accès prioritaire aux mises à jour']).map((b) => (
                <li key={b} className="flex items-center gap-2 text-gray-700">
                  <Check className="h-4 w-4 text-green-600" /> {b}
                </li>
              ))}
            </ul>
            <a href="#checkout" className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow hover:bg-blue-700">Choisir l’édition Pro</a>
          </div>
        </div>
      </div>
    </section>
  )
}
