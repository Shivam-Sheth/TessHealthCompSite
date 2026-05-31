const founders = [
  {
    name: "Founder One",
    role: "Co-Founder & CEO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
    initials: "F1",
  },
  {
    name: "Founder Two",
    role: "Co-Founder & CTO",
    bio: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.",
    initials: "F2",
  },
  {
    name: "Founder Three",
    role: "Co-Founder & COO",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    initials: "F3",
  },
  {
    name: "Founder Four",
    role: "Co-Founder & CPO",
    bio: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.",
    initials: "F4",
  },
];

const gradients = [
  "from-teal-500 to-teal-700",
  "from-emerald-500 to-teal-600",
  "from-cyan-500 to-teal-600",
  "from-teal-600 to-emerald-700",
];

export default function Founders() {
  return (
    <section id="founders" className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">Meet the team</p>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-slate-900">
            Four founders, one mission
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. We came together to fix what healthcare technology has long overlooked.
          </p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {founders.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm hover:shadow-lg hover:border-teal-200 transition-all duration-300"
            >
              <div className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-br ${gradients[i]} flex items-center justify-center text-white text-xl font-bold shadow-md`}>
                {f.initials}
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg text-slate-900">{f.name}</h3>
              <p className="text-sm font-medium text-teal-700">{f.role}</p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.bio}</p>
              <div className="mt-5 flex items-center justify-center gap-3 text-slate-400">
                <a href="#" aria-label="LinkedIn" className="hover:text-teal-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 18.5v-7.39H6.06v7.39h2.28zM7.2 10.1a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64zm11.3 8.4v-4.04c0-2.16-.46-3.82-2.99-3.82-1.21 0-2.03.66-2.36 1.29h-.03v-1.09h-2.19v7.39h2.28v-3.66c0-.96.18-1.9 1.38-1.9 1.18 0 1.2 1.1 1.2 1.96v3.6h2.28z" /></svg>
                </a>
                <a href="#" aria-label="Email" className="hover:text-teal-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
