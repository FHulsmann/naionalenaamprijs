export default function PartnersPage() {
  const partners = [
    { name: "DPG Media", img: "/images/partner-dpg.png" },
    { name: "De Ondernemer", img: "/images/partner-ondernemer.png" },
    { name: "Partner 3", img: "/images/partner-3.png" },
    { name: "Partner 4", img: "/images/partner-4.png" },
  ];
  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <h1 className="text-3xl font-bold text-[#3F3F40]">Partners</h1>
      <p className="mt-2 text-neutral-700">Sluit je aan als partner. Kies een pakket en bereik de naming-community.</p>
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
        {partners.map(p => (
          <div key={p.name} className="flex items-center justify-center rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-full bg-neutral-100" style={{ backgroundImage: `url(${p.img})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} />
          </div>
        ))}
      </div>
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6"><h3 className="font-semibold text-[#E73331]">Gold</h3><ul className="mt-2 list-disc pl-5 text-sm text-neutral-700"><li>Logo groot + podiumvermelding</li><li>Juryplaats</li><li>Contentpakket</li></ul></div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6"><h3 className="font-semibold text-[#E73331]">Silver</h3><ul className="mt-2 list-disc pl-5 text-sm text-neutral-700"><li>Logo midden</li><li>Social mentions</li></ul></div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6"><h3 className="font-semibold text-[#E73331]">Friends</h3><ul className="mt-2 list-disc pl-5 text-sm text-neutral-700"><li>Logo klein</li><li>2 tickets</li></ul></div>
      </section>
      <div className="mt-8 rounded-xl bg-neutral-50 p-4 text-sm">Interesse? Mail <a href="mailto:info@nationalenaamprijs.nl" className="underline">info@nationalenaamprijs.nl</a>.</div>
    </main>
  );
}