import React from "react";
import { Navbar } from "./component/Navbar";
import { Hero } from "./component/Hero";
import { About } from "./component/About";
import { Technologies } from "./component/Technologies";
import { Expperience } from "./component/Expperience";
import { Projects } from "./component/Projects";
import { Contact } from "./component/Contact";

export const App = () => {
  return (
    <div
      className="overflow-x-hidden text-neutral-300 antialiased  
     selection:bg-cyan-300 selection:text-cyan-900"
    >
      <div className="fixed top-0 z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen
       bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),
       rgba(255,255,255,0))]"
        ></div>
      </div>

      <div className=" relative z-20 container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Expperience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};
export default App;
