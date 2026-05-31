const audiences = [
  {
    label: "For Families",
    title: "Managing care from anywhere",
    copy: "You live in London. Your mother lives in Delhi. Tessera gives you the real version, in real time — every observation, every vital, every medication change. If something is flagged urgent, you know. Ask the AI a question and it answers from the actual data.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-3-1.5" />
    ),
  },
  {
    label: "For Family Doctors",
    title: "Same work, better information",
    copy: "You make house calls and decisions based on what patients remember to mention. Tessera hands you a pre-visit brief in 4 seconds — nurse observations, vital trends, medication changes, lab results — with drug interactions flagged before they become incidents.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m9-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    label: "For Visiting Nurses",
    title: "A real briefing, not a blank notebook",
    copy: "Every morning is a different household. Tessera gives you a shift briefing before you walk in — what's changed, what to check, what's flagged. Log in plain text on your phone. One button at the end generates your handover for the next carer.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    ),
  },
  {
    label: "For Patients",
    title: "Your health. You should see it.",
    copy: "Your record belongs to you — not a hospital or an insurer. You control who sees it, you add what matters, and you ask questions in plain language. In an emergency, your QR code gives paramedics everything they need instantly.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
  },
];

export default function Audiences() {
  return (
    <section id="who-its-for" className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">Who it's for</p>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-slate-900">
            Built for every person in the care circle
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {audiences.map((a, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg hover:border-teal-200 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{a.icon}</svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">{a.label}</p>
                  <h3 className="font-display font-semibold text-lg text-slate-900">{a.title}</h3>
                </div>
              </div>
              <p className="mt-5 text-slate-600 leading-relaxed">{a.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
