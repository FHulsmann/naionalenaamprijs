export default function JuryPage() {
  const jury = [
    { name: "Juryvoorzitter", role: "Naamstrateeg", img: "/images/jury-1.jpg" },
    { name: "Jurylid 2", role: "Creative Director", img: "/images/jury-2.jpg" },
    { name: "Jurylid 3", role: "Merkjurist", img: "/images/jury-3.jpg" },
    { name: "Jurylid 4", role: "CMO", img: "/images/jury-4.jpg" },
  ];
  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <h1 className="text-3xl font-bold text-[#3F3F40]">Jury</h1>
      <p className="mt-2 text-neutral-700">Onafhankelijke vakjury. Criteria: strategische fit, taalkundige kwaliteit, onderscheid, juridische haalbaarheid, effect in de markt.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {jury.map(j => (
          <div key={j.name} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="aspect-square w-full rounded-xl bg-neutral-100" style={{ backgroundImage: `url(${j.img})`, backgroundSize: 'cover' }} />
            <h3 className="mt-3 font-semibold text-[#3F3F40]">{j.name}</h3>
            <p className="text-sm text-neutral-600">{j.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}