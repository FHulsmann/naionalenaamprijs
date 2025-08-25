import Image from "next/image";
import { GradientButton } from "@/components/GradientButton";
import { categories } from "@/components/data";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Image src="/images/logo-nnp.png" alt="Nationale Naamprijs" width={160} height={40} />
          <nav className="hidden gap-6 md:flex">
            <a href="/jury" className="hover:text-[#E73331]">Jury</a>
            <a href="/partners" className="hover:text-[#E73331]">Partners</a>
            <a href="#faq" className="hover:text-[#E73331]">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="/inschrijven" className="rounded-xl bg-gradient-to-r from-[#FFB800] to-[#E73331] px-4 py-2 text-sm font-medium text-white hover:opacity-90">Schrijf in</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/banner-nnp.png" alt="Banner Nationale Naamprijs" fill className="object-cover opacity-80" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-24 text-center">
          <h1 className="text-4xl font-bold text-white drop-shadow md:text-6xl">De Nationale Naamprijs</h1>
          <p className="mt-4 text-lg text-white drop-shadow">De jaarlijkse bekroning van de beste namen van Nederland</p>
          <div className="mt-6 flex justify-center gap-3">
            <GradientButton href="/inschrijven">Dien je case in</GradientButton>
            <a href="/jury" className="rounded-2xl border border-white/80 bg-white/20 px-6 py-3 font-semibold text-white hover:bg-white hover:text-[#3F3F40]">Ontmoet de jury</a>
          </div>
        </div>
      </section>

      <section id="categories" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h2 className="text-2xl font-bold text-[#3F3F40] md:text-3xl">Categorieën</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div key={c.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md">
                <h3 className="font-semibold text-[#E73331]">{c.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="updates" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-2xl font-bold text-[#3F3F40] md:text-3xl">Blijf op de hoogte</h2>
          <p className="mt-2 text-neutral-700">Ontvang nieuws over deadlines, shortlist en tickets.</p>
          <form name="updates" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/dankje" className="mt-4 flex gap-3">
            <input type="hidden" name="form-name" value="updates" />
            <p className="hidden"><label>Laat dit leeg: <input name="bot-field" /></label></p>
            <input type="email" name="email" className="min-w-0 flex-1 rounded-xl border border-neutral-300 px-3 py-3" placeholder="jouw@e-mail.nl" required />
            <GradientButton href="#">Aanmelden</GradientButton>
          </form>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-[#3F3F40] text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-4">
          <div>
            <Image src="/images/logo-nnp.png" alt="Logo Nationale Naamprijs" width={150} height={36} />
            <p className="mt-2 text-sm text-neutral-300">De jaarlijkse bekroning van excellente naamgeving.</p>
          </div>
          <div>
            <h4 className="font-semibold">Navigatie</h4>
            <ul className="mt-2 space-y-1 text-sm text-neutral-300">
              <li><a href="/jury" className="hover:text-white">Jury</a></li>
              <li><a href="/partners" className="hover:text-white">Partners</a></li>
              <li><a href="#categories" className="hover:text-white">Categorieën</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-2 space-y-1 text-sm text-neutral-300">
              <li>info@nationalenaamprijs.nl</li>
              <li>Amsterdam en Deventer</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-2 space-y-1 text-sm text-neutral-300">
              <li><a href="/reglement" className="hover:text-white">Reglement</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-neutral-300">© {new Date().getFullYear()} De Nationale Naamprijs</div>
      </footer>
    </div>
  );
}