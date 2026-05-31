import Logo from "./Logo";

const APP_URL = "https://6a1671ef4cb3f600098508ac--tesserhealth.netlify.app/";

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <Logo className="w-8 h-8" />
            <div>
              <p className="font-display font-bold text-white text-lg">Tessera Health</p>
              <p className="text-sm text-slate-400 -mt-0.5">Connected, intelligent care</p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#platform" className="hover:text-teal-400 transition-colors">Platform</a>
            <a href="#founders" className="hover:text-teal-400 transition-colors">Founders</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
            <a href={APP_URL} target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">Open App</a>
          </nav>
        </div>
        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Tessera Health. All rights reserved.</p>
          <p>HIPAA-ready · SOC 2 Type II · Built with care.</p>
        </div>
      </div>
    </footer>
  );
}
