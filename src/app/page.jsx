import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundEffects from "@/components/layout/BackgroundEffects";
import Hero from "@/components/hero/Hero";

export default function HomePage() {
  return (
    <>
      <BackgroundEffects />

      <Header />

      <main>
          <Hero />

        {/* Problem */}
        {/* HowItWorks */}
        {/* Impact */}
        {/* Pilot */}
      </main>

      <Footer />
    </>
  );
}