import Hero from "./(component)/hero";
import Section3 from "@/app/(component)/section3";
import ProjectsSection from "@/app/(component)/project";
import Skills from "@/app/(component)/skills"; // Absolute import (Recommended)
import Skillss from "@/app/(component)/skillss";
export default function Home() {
  return (
     <>
          <section className="bg-gradient-to-br from-black to-gray-900">
          <Hero />
         <Section3/>
         <Skillss/>
         <ProjectsSection/>
         <Skills/>
          </section>
     </>
  );
}
