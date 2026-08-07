import { About } from "@/components/features/About";
import { BlogPreview } from "@/components/features/BlogPreview";
import { Contact } from "@/components/features/Contact";
import { Experience } from "@/components/features/Experience";
import { Hero } from "@/components/features/Hero";
import { Projects } from "@/components/features/Projects";
import { Skills } from "@/components/features/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <BlogPreview />
      <Contact />
    </>
  );
}
