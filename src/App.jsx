import { useCallback } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import AppPreview from "./components/AppPreview";
import Audiences from "./components/Audiences";
import Founders from "./components/Founders";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero onLearnMore={() => scrollTo("how-it-works")} />
      <About />
      <Features />
      <HowItWorks />
      <AppPreview />
      <Audiences />
      <Stats />
      <Founders />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
