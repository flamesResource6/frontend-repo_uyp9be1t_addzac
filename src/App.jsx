import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-blue-600" />
            <span className="font-semibold">Ebook Launch</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#extrait" className="text-gray-600 hover:text-gray-900">Contenu</a>
            <a href="#acheter" className="text-gray-600 hover:text-gray-900">Tarifs</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
            <a href="#acheter" className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white font-medium shadow hover:bg-blue-700">Acheter</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
        <section id="faq">
          <FAQ />
        </section>
      </main>

      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Ebook Launch. Tous droits réservés.</p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900">Confidentialité</a>
            <a href="#" className="hover:text-gray-900">Conditions</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
