const steps = [
  {
    title: "Create your record",
    copy: "Enter the basics — name, date of birth, blood type, conditions, allergies, and current medications. Takes about 5 minutes, and the record grows as care happens.",
  },
  {
    title: "Share with your care team",
    copy: "Give your nurse and doctor a code; they link their account in 30 seconds. Family abroad? Same code, instant access. Everyone sees the same record from their own phone.",
  },
  {
    title: "Log. The AI does the rest.",
    copy: "Anyone can log an observation in plain English. The AI reads every entry, extracts what's clinically relevant, and routes it to the right person. No one has to chase anyone.",
  },
  {
    title: "Everything in one place",
    copy: "Lab reports, prescriptions, wound photos, appointment history, handover notes — uploaded once, accessible to everyone, parsed by AI so nothing gets buried.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">How it works</p>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-slate-900">
            Set up in 5 minutes. Running in the background forever.
          </h2>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-2xl border border-slate-200 bg-slate-50/60 p-7">
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-teal-700 text-white font-display font-bold text-lg shadow-md shadow-teal-700/25">
                {i + 1}
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed text-sm">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
