const stats = [
  { value: "50M+", label: "Elderly Indians receiving home care without a shared system" },
  { value: "₹8,000cr", label: "Home care market in India, growing 15% a year" },
  { value: "300M+", label: "Diaspora Indians managing care decisions from abroad" },
  { value: "15s", label: "To parse a paper lab report with vision AI" },
];

export default function Stats() {
  return (
    <section id="impact" className="py-20 lg:py-24 bg-teal-700 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl sm:text-4xl">
            The coordination layer home care never had
          </h2>
          <p className="mt-4 text-teal-100 text-lg">
            Competent doctors. Trained nurses. Caring families. No shared system — until now.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-display font-extrabold text-4xl sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-teal-100 text-sm sm:text-base">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
