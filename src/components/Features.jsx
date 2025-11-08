import { PenTool, ShoppingCart, BarChart3, BadgeCheck } from 'lucide-react'

const features = [
  {
    title: 'Méthode pas à pas',
    description: 'De l’idée au lancement : un processus clair et reproductible.',
    icon: PenTool,
  },
  {
    title: 'Page de vente qui convertit',
    description: 'Copie, sections, preuves sociales et offres irrésistibles.',
    icon: ShoppingCart,
  },
  {
    title: 'Stratégies de trafic',
    description: 'Email, SEO, partenariats et réseaux sociaux expliqués simplement.',
    icon: BarChart3,
  },
  {
    title: 'Templates & checklists',
    description: 'Modèles prêts à l’emploi pour accélérer chaque étape.',
    icon: BadgeCheck,
  },
]

export default function Features() {
  return (
    <section id="extrait" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tout ce qu’il faut pour un lancement réussi</h2>
          <p className="mt-3 text-lg leading-8 text-gray-600">Un condensé d’expérience et de bonnes pratiques, sans blabla.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="inline-flex items-center justify-center rounded-xl bg-blue-50 p-3 ring-1 ring-blue-100">
                <f.icon className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
