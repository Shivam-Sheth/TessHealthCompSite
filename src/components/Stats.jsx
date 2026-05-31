const stats = [
  { value: "1.2M+", label: "Patient records managed" },
  { value: "98%", label: "Care team satisfaction" },
  { value: "40%", label: "Faster response times" },
  { value: "24/7", label: "Continuous monitoring" },
];

export default function Stats() {
  return (
    <section id="impact" className="py-20 lg:py-24 bg-teal-700 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl sm:text-4xl">
            Impact you can measure
          </h2>
          <p className="mt-4 text-teal-100 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
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
