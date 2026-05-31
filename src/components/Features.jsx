const features = [
  {
    title: "Unified records",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
  },
  {
    title: "Real-time monitoring",
    copy: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h4l2 6 4-12 2 6h6" />
    ),
  },
  {
    title: "Care team coordination",
    copy: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-3-1.5" />
    ),
  },
  {
    title: "Predictive insights",
    copy: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    title: "Secure messaging",
    copy: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 21l1.8-4A8 8 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    ),
  },
  {
    title: "Compliance built-in",
    copy: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
];

export default function Features() {
  return (
    <section id="platform" className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">The Platform</p>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-slate-900">
            One platform for the entire care journey
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
          </p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg hover:border-teal-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{f.icon}</svg>
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{f.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
