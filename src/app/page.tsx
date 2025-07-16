import BraSizeCalculator from "@/components/BraSizeCalculator";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <section className="py-16 container mx-auto">
          <BraSizeCalculator />
        </section>
        <FAQ />
      </main>
    </>
  );
}
