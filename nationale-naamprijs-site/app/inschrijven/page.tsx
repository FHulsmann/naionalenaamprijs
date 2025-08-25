import { categories } from "@/components/data";

export default function InschrijvenPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold text-[#3F3F40]">Dien je case in</h1>
      <p className="mt-2 text-neutral-700">Gebruik dit formulier. Je ontvangt per e-mail een bevestiging.</p>
      <form name="inzending" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/dankje" className="mt-6 grid gap-4">
        <input type="hidden" name="form-name" value="inzending" />
        <p className="hidden"><label>Laat dit leeg: <input name="bot-field" /></label></p>
        <label className="text-sm font-medium">Naam organisatie<input name="organisatie" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" required /></label>
        <div className="grid gap-2 md:grid-cols-2">
          <label className="text-sm font-medium">Contactpersoon<input name="contact" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" required /></label>
          <label className="text-sm font-medium">E-mail<input type="email" name="email" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" required /></label>
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          <label className="text-sm font-medium">Categorie<select name="categorie" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2">{categories.map(c => (<option key={c.title}>{c.title}</option>))}</select></label>
          <label className="text-sm font-medium">Lancering of rebrand datum<input type="date" name="datum" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" /></label>
        </div>
        <label className="text-sm font-medium">Case URL of dossier<input name="case_url" className="mt-1 rounded-xl border border-neutral-300 px-3 py-2" placeholder="https://link-naar-presentatie" /></label>
        <label className="text-sm font-medium">Motivatie<textarea name="motivatie" rows={6} className="mt-1 rounded-xl border border-neutral-300 px-3 py-2" placeholder="Waarom is deze naam award-waardig?" /></label>
        <label className="flex items-center gap-3 text-sm"><input id="terms2" type="checkbox" name="akkoord" className="h-4 w-4 rounded border-neutral-300" required />Ik ga akkoord met het reglement en privacyverklaring</label>
        <button type="submit" className="rounded-2xl bg-gradient-to-r from-[#FFB800] to-[#E73331] px-6 py-3 font-semibold text-white">Verstuur inzending</button>
      </form>
    </main>
  );
}