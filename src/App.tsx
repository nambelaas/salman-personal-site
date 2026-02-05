import "./App.css";
import { AboutMe } from "./section/AboutMe";
import Hero from "./section/Hero";
import { WhatICanHelpWith } from "./section/WhatICanHelpWith";
import { Experience } from "./section/Experience";
import TechStack from "./section/TechStack";
import { HowIWork } from "./section/HowIWork";
import { Navbar } from "./section/Navbar";
import { Footer } from "./section/Footer";
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <>
      <div className="bg-(--custom-dark-color-4)">
        <Navbar />
        <div className="max-w-350 mx-auto px-4">
          <Hero />
          <AboutMe />
          <WhatICanHelpWith />
          <TechStack />
          <Experience />
        </div>
        <div className="bg-(--custom-dark-color-1) w-full">
          <div className="max-w-350 mx-auto px-4">
            <HowIWork />
            <Footer />
          </div>
        </div>
      </div>
      <Analytics />
    </>
  );
}

export default App;
