import BraSizeCalculator from "@/components/BraSizeCalculator";
import BraStylesSlider from "@/components/BraStylesSlider";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <section className="py-16 px-4 container mx-auto">
          <BraSizeCalculator />
        </section>
        <BraStylesSlider />
        <FAQ />
      </main>
    </>
  );
}
