const APP_URL = "https://6a1671ef4cb3f600098508ac--tesserhealth.netlify.app/";

export default function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-14 lg:px-16 lg:py-20 text-center">
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-teal-600/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-teal-500/20 blur-3xl pointer-events-none" />
          <div className="relative">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Ready to bring your care together?
            </h2>
            <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 rounded-xl bg-teal-600 text-white font-semibold shadow-lg shadow-teal-600/30 hover:bg-teal-500 transition-colors"
              >
                Launch the App
              </a>
              <a
                href="mailto:hello@tessera.health"
                className="px-7 py-3.5 rounded-xl border border-slate-600 text-slate-200 font-semibold hover:border-teal-400 hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
