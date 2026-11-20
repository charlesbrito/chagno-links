
import { Link2 } from 'lucide-react'

import BrandHeader from './components/BrandHeader'
import LinkButton from './components/LinkButton'
import Footer from './components/Footer'
import { profile, links } from './data/links'

export default function App() {
  return (
    <main className="page-shell relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-14 sm:px-8">
      <div aria-hidden="true" className="ambient ambient-one" />
      <div aria-hidden="true" className="ambient ambient-two" />

      <section className="relative z-10 w-full max-w-[440px]">
        <BrandHeader profile={profile} />

        <div className="mb-4 mt-10 flex items-center justify-center gap-2">
          <span className="h-px w-7 bg-white/10" />

          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-600">
            Encontre-nos
          </span>

          <span className="h-px w-7 bg-white/10" />
        </div>

        <nav aria-label="Links oficiais" className="flex flex-col gap-3">
          {links.map((link) => (
            <LinkButton key={link.id} link={link} />
          ))}
        </nav>

        <Footer text={profile.footer} />

        <div className="mt-7 flex items-center justify-center gap-1.5 text-[10px] text-zinc-700">
          <Link2 size={11} />
          <span>Todos os nossos canais em um só lugar</span>
        </div>
      </section>
    </main>
  )
}
