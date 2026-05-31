const features = [
  {
    title: "AI Care Coordination",
    copy: "The agent that never goes off-shift. It reads every observation, flags what's clinically significant, creates tasks, and alerts the right person — automatically.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    title: "Doctor's Pre-Visit Brief",
    copy: "Walk into every visit knowing exactly what happened. Vital trends, nurse observations, medication changes, and suggested questions — generated in 4 seconds.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
  },
  {
    title: "Carer Shift Briefing",
    copy: "The handover that actually happens. A personalised briefing before each shift, and a clean, structured summary for the next carer at the end of it.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    ),
  },
  {
    title: "Lab Report Parsing",
    copy: "Photograph any paper lab report. Vision AI extracts every result, flags abnormal values, and stores it all — searchable for the whole team — in 15 seconds.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 2v6l-4.5 7.5A2 2 0 006.2 19h11.6a2 2 0 001.7-3.5L15 8V2M8 2h8M8 13h8" />
    ),
  },
  {
    title: "Emergency QR Code",
    copy: "Critical info for the moment it matters most. One scan gives any paramedic or ER doctor instant access to allergies, medications, and contacts — no login.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m-4 8h.01M4 4h4v4H4V4zm12 0h4v4h-4V4zM4 16h4v4H4v-4z" />
    ),
  },
  {
    title: "Drug Interaction Checking",
    copy: "Know before you prescribe or dispense. Every new medication is checked across the full list — contraindicated, major, or moderate — with allergy conflict alerts.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M5 19h14a2 2 0 001.84-2.75L13.74 4a2 2 0 00-3.5 0L3.16 16.25A2 2 0 005 19z" />
    ),
  },
  {
    title: "Prescription Scanning",
    copy: "From handwritten Rx to digital record in seconds. Vision AI reads printed or handwritten scripts — English or Hindi — and extracts dose, frequency, and route.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    ),
  },
  {
    title: "Care Team Messaging",
    copy: "One thread for the patient, nurse, doctor, and family. Type @ai to ask about the record — and the AI answers with real data and can act from the thread.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 21l1.8-4A8 8 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    ),
  },
  {
    title: "Ask My Records",
    copy: "Your entire health history, answerable in plain English. Ask anything across logs, documents, labs, and vitals — answers come with source citations.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: "Wound & Issue Tracking",
    copy: "For conditions that need watching visit by visit. Carers attach photos; the AI assesses progression, stage, and whether something needs escalation.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
  {
    title: "Vitals Tracking",
    copy: "Every reading, in context. BP, heart rate, SpO₂, glucose and more are extracted from plain-text logs automatically, trended over 30 days with threshold alerts.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h4l2 6 4-12 2 6h6" />
    ),
  },
  {
    title: "Document Intelligence",
    copy: "Upload once, AI reads everything. Discharge summaries, imaging, GP letters — type, date, findings, diagnoses, and follow-ups extracted and searchable.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z M9 13h6m-6 4h3" />
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
            Everything your care team needs. Nothing it doesn't.
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            A shared record, an AI agent that acts on every observation, and vision AI that reads the paper your care already runs on.
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
