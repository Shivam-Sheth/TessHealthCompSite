const APP_URL = "https://6a1671ef4cb3f600098508ac--tesserhealth.netlify.app/";

const points = [
  "Works on any Android or iPhone — no special hardware, no app store.",
  "Patient-owned records: you control all sharing and can revoke access anytime.",
  "Encrypted in transit and at rest, with a full audit trail of every access.",
  "No AI training on your data, with India & EU data residency.",
];

export default function AppPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="rounded-3xl bg-gradient-to-br from-teal-700 to-teal-900 p-8 lg:p-10 glow-teal">
            <div className="rounded-2xl bg-white p-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                </div>
                <span className="text-xs text-slate-400 font-medium">tessera.health/dashboard</span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                <Stat label="Patients" value="1,204" />
                <Stat label="Adherence" value="94%" />
                <Stat label="Avg. response" value="3m" />
              </div>
              <div className="mt-5 rounded-xl bg-slate-50 border border-slate-100 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Recovery trend</span>
                  <span className="text-xs font-semibold text-teal-700">+12%</span>
                </div>
                <div className="mt-3 flex items-end gap-2 h-20">
                  {[30, 45, 40, 60, 55, 72, 68, 85].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-teal-600 to-teal-400" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">See it live</p>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
            Your health data. Your control.
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            One shared record, accessible to everyone in the care circle from their own phone — secured so that no one ever sees data they're not explicitly linked to.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-slate-600">{p}</span>
              </li>
            ))}
          </ul>
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-700 text-white font-semibold shadow-lg shadow-teal-700/25 hover:bg-teal-800 transition-colors"
          >
            Explore the live app
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-teal-50 p-3 text-center">
      <p className="text-lg font-bold text-teal-800">{value}</p>
      <p className="text-xs text-slate-500 mt-0.5">{label}</p>
    </div>
  );
}
