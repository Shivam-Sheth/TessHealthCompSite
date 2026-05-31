const APP_URL = "https://6a1671ef4cb3f600098508ac--tesserhealth.netlify.app/";

export default function Hero({ onLearnMore }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 via-white to-white bg-grid-pattern">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 text-center lg:text-left animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1.5 text-sm font-medium text-teal-700">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            AI care coordination for home care
          </span>
          <h1 className="mt-6 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.05]">
            The health record that connects your <span className="text-teal-700">doctor</span>, your <span className="text-teal-700">nurse</span>, and your <span className="text-teal-700">family</span>.
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            One shared record. An AI that watches over it. Everyone on the same page — finally. Built for families managing care at home, it works on any phone, with no app store needed.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-teal-700 text-white font-semibold shadow-lg shadow-teal-700/25 hover:bg-teal-800 hover:shadow-teal-700/30 transition-all duration-200"
            >
              Get Started Free
            </a>
            <button
              onClick={onLearnMore}
              className="px-6 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-teal-500 hover:text-teal-700 hover:bg-teal-50/50 transition-all duration-200"
            >
              See How It Works
            </button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-slate-500">
            <span className="flex items-center gap-2"><CheckIcon /> Works on any phone</span>
            <span className="flex items-center gap-2"><CheckIcon /> No app store needed</span>
            <span className="flex items-center gap-2"><CheckIcon /> Set up in 5 minutes</span>
          </div>
        </div>
        <div className="flex-1 w-full max-w-md animate-slide-up">
          <AppMockup />
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function AppMockup() {
  return (
    <div className="relative animate-float">
      <div className="rounded-[2rem] border-8 border-slate-900 bg-slate-900 shadow-2xl shadow-teal-900/20 overflow-hidden">
        <div className="rounded-[1.4rem] overflow-hidden bg-slate-50">
          <div className="bg-teal-700 px-5 pt-5 pb-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-teal-100">Good morning,</p>
                <p className="text-lg font-semibold">Dr. Avery Chen</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-teal-500/40 flex items-center justify-center text-sm font-semibold">AC</div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/10 p-3">
                <p className="text-xs text-teal-100">Active patients</p>
                <p className="text-2xl font-bold">128</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="text-xs text-teal-100">Alerts today</p>
                <p className="text-2xl font-bold">6</p>
              </div>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <VitalRow name="Heart rate" value="72 bpm" tone="text-teal-600" />
            <VitalRow name="Blood pressure" value="118/76" tone="text-slate-700" />
            <VitalRow name="SpO₂" value="98%" tone="text-teal-600" />
            <div className="rounded-xl bg-white border border-slate-200 p-3">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Today's trend</p>
              <div className="mt-2 flex items-end gap-1.5 h-16">
                {[40, 55, 48, 70, 62, 80, 58, 75, 90].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-teal-500/80" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VitalRow({ name, value, tone }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white border border-slate-200 px-4 py-3">
      <span className="text-sm text-slate-600">{name}</span>
      <span className={`text-sm font-semibold ${tone}`}>{value}</span>
    </div>
  );
}
