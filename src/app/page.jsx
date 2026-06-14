import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundEffects from "@/components/layout/BackgroundEffects";
import Hero from "@/components/hero/Hero";
import ProblemSection from "@/components/problem/ProblemSection";

export default function HomePage() {
  return (
    <>
      <BackgroundEffects />

      <Header />

      <main>
          <Hero />
         <ProblemSection />
        {/* HowItWorks */}
        {/* Impact */}
        {/* Pilot */}
      </main>

      <Footer />
    </>
  );
}