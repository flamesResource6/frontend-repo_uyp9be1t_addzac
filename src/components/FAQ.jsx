export default function FAQ() {
  const faqs = [
    {
      q: 'À qui s’adresse ce livre ?',
      a: 'Aux créateurs, freelances et entrepreneurs qui veulent créer et vendre un e‑book sans se perdre dans la technique.'
    },
    {
      q: 'Est-ce que le contenu est adapté aux débutants ?',
      a: 'Oui. Il couvre les bases puis va vers des stratégies plus avancées, avec des exemples concrets à chaque étape.'
    },
    {
      q: 'Combien de temps pour voir des résultats ?',
      a: 'Vous pouvez publier votre premier e‑book en quelques semaines si vous suivez la méthode et les templates fournis.'
    },
    {
      q: 'Y a-t-il une garantie ?',
      a: 'Oui, satisfait ou remboursé pendant 14 jours si le livre ne vous apporte pas de valeur.'
    }
  ]

  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Questions fréquentes</h2>
          <p className="mt-3 text-lg leading-8 text-gray-600">Tout ce que vous devez savoir avant de commencer.</p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {faqs.map((item, idx) => (
            <details key={idx} className="group p-6 open:bg-gray-50 open:rounded-2xl">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="text-base font-semibold text-gray-900">{item.q}</span>
                <span className="ml-4 text-gray-400 group-open:rotate-180 transition">▾</span>
              </summary>
              <p className="mt-3 text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
