import Hero from "@/components/Hero";
import Disciplines from "@/components/Disciplines";
import Bio from "@/components/Bio";
import WorkGallery from "@/components/WorkGallery";
import Starfield from "@/components/Starfield";

export default function Home() {
  return (
    <main>
      <Starfield />
      <Hero />
      <Disciplines />
      <Bio />
      <WorkGallery />
    </main>
  );
}
