const pillars = [
  {
    title: "Patient-first",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Every decision starts with the person receiving care.",
  },
  {
    title: "Built on trust",
    copy: "Ut enim ad minim veniam, quis nostrud exercitation. Security and privacy are foundational, not afterthoughts.",
  },
  {
    title: "Intelligent by design",
    copy: "Duis aute irure dolor in reprehenderit. Insights surface the moment they matter, not hours later.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">About Tessera</p>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
            We're reassembling the broken pieces of modern healthcare.
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tessera takes the scattered tiles of patient data and care workflows and fits them into one coherent picture. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
