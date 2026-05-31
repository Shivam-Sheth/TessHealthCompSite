import { useState } from "react";

const founders = [
  {
    name: "Shivam Sheth",
    role: "Co-Founder & CEO",
    bio: "Engineer and 6x hackathon winner with published research on AI-enabled maternal care. Ex-Dell SDE, building healthcare AI from D.J. Sanghvi to Northwestern.",
    initials: "SS",
    photo: "/founders/shivam.jpg",
    linkedin: "https://www.linkedin.com/in/shivamsheth/",
  },
  {
    name: "Ananya Raj Girish",
    role: "Co-Founder & CPO",
    bio: "Product leader and AI evaluation engineer at Northwestern's The Garage. Ex-CarDekho PM, she turns ambiguous care needs into measurable, shippable product.",
    initials: "AG",
    photo: "/founders/ananya.jpg",
    linkedin: "https://www.linkedin.com/in/ananyarajgirish/",
  },
  {
    name: "Aryaan Peshoton",
    role: "Co-Founder & CTO",
    bio: "AI engineer specializing in deep learning, NLP, and medical imaging — from chest X-ray abnormality detection to RAG systems. MS in AI at Northwestern.",
    initials: "AP",
    photo: "/founders/aryaan.jpg",
    linkedin: "https://www.linkedin.com/in/aryaan-peshoton/",
  },
  {
    name: "Ishita Kasliwal",
    role: "Co-Founder & COO",
    bio: "Medical student (MBChB) at the University of Aberdeen. She grounds the product in real clinical practice and how home care actually happens at the bedside.",
    initials: "IK",
    photo: "/founders/ishita.jpg",
    linkedin: "https://www.linkedin.com/in/ishita-kasliwal/",
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
    <section id="founders" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">Meet the team</p>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-slate-900">
            Four founders, one mission
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Engineers, a product leader, and a future doctor who came together to fix what healthcare technology has long overlooked — the coordination.
          </p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {founders.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 bg-slate-50/60 p-6 text-center shadow-sm hover:shadow-lg hover:border-teal-200 transition-all duration-300"
            >
              <Avatar founder={f} gradient={gradients[i]} />
              <h3 className="mt-5 font-display font-semibold text-lg text-slate-900">{f.name}</h3>
              <p className="text-sm font-medium text-teal-700">{f.role}</p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.bio}</p>
              <div className="mt-5 flex items-center justify-center gap-3 text-slate-400">
                <a href={f.linkedin} target="_blank" rel="noreferrer" aria-label={`${f.name} on LinkedIn`} className="hover:text-teal-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 18.5v-7.39H6.06v7.39h2.28zM7.2 10.1a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64zm11.3 8.4v-4.04c0-2.16-.46-3.82-2.99-3.82-1.21 0-2.03.66-2.36 1.29h-.03v-1.09h-2.19v7.39h2.28v-3.66c0-.96.18-1.9 1.38-1.9 1.18 0 1.2 1.1 1.2 1.96v3.6h2.28z" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Avatar({ founder, gradient }) {
  const [showImage, setShowImage] = useState(Boolean(founder.photo));

  return (
    <div className={`mx-auto w-24 h-24 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-2xl font-bold shadow-md overflow-hidden`}>
      {showImage ? (
        <img
          src={founder.photo}
          alt={founder.name}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={() => setShowImage(false)}
        />
      ) : (
        founder.initials
      )}
    </div>
  );
}
