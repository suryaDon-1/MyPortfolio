// app/page.js
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skill from "./components/Skill.jsx";

export default function Home() {
  return (
    <>
      <Hero/>
      <About />
      <Skill />
      <Projects/>
      <Contact />
    </>
  );
}
