import { useState } from "react";
import Logo from "./Logo";

const APP_URL = "https://6a1671ef4cb3f600098508ac--tesserhealth.netlify.app/";

const links = [
  { label: "About", id: "about" },
  { label: "Platform", id: "platform" },
  { label: "How it works", id: "how-it-works" },
  { label: "Founders", id: "founders" },
  { label: "Contact", id: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("about")} className="flex items-center gap-2.5">
          <Logo className="w-8 h-8" />
          <span className="font-display font-bold text-xl text-slate-900">Tessera Health</span>
        </button>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-teal-700 text-white text-sm font-semibold shadow-sm shadow-teal-700/20 hover:bg-teal-800 transition-colors"
          >
            Open App
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          aria-label="Menu"
        >
          <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left py-2 font-medium text-slate-700 hover:text-teal-700">
              {l.label}
            </button>
          ))}
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 px-4 py-2.5 rounded-lg bg-teal-700 text-white text-center font-semibold"
          >
            Open App
          </a>
        </div>
      )}
    </header>
  );
}
