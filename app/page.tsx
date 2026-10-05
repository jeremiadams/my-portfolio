import Hero from "@/components/Hero";
import Disciplines from "@/components/Disciplines";
import Bio from "@/components/Bio";
import WorkGallery from "@/components/WorkGallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Disciplines />
      <Bio />
      <WorkGallery />
    </main>
  );
}
