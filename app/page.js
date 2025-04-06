import Hero from "./(component)/hero";
import Section3 from "@/app/(component)/section3";
import ProjectsSection from "@/app/(component)/project";
import Skills from "@/app/(component)/skills"; // Absolute import (Recommended)
export default function Home() {
  return (
     <>
         <Hero />
         <Section3/>
         <ProjectsSection/>
         <Skills/>
     </>
  );
}
