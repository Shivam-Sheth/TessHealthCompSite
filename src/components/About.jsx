const pillars = [
  {
    title: "Patient-owned",
    copy: "Your health record belongs to you — not a hospital, an insurer, or a filing cabinet. You control who sees it and can revoke access anytime.",
  },
  {
    title: "Built for how care really happens",
    copy: "A family doctor who makes house calls, a nurse who comes every morning, and family abroad. We connect the people who are perpetually out of sync.",
  },
  {
    title: "Intelligent by design",
    copy: "An embedded AI agent reads every observation, routes every alert, and briefs every team member — automatically, the moment it matters.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">About Tessera</p>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
            One record. Every person in the circle.
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Tessera Health is an AI care coordination platform for home care. A patient creates one record — their medications, conditions, allergies, lab results, vitals, and care logs — and shares it with their visiting nurse, their family doctor, and family members using a simple code. Everyone sees the same, real-time picture.
          </p>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            The doctors were good. The nurses were trained. The families cared. The coordination was broken. We're building the coordination layer that home care has never had.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-7 hover:border-teal-200 hover:bg-teal-50/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-teal-700 text-white flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{p.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
