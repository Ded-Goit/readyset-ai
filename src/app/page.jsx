import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundEffects from "@/components/layout/BackgroundEffects";
import Hero from "@/components/hero/Hero";
import ProblemSection from "@/components/problem/ProblemSection";
import HowItWorks from "@/components/how/HowItWorks";
import ImpactSection from "@/components/impact/ImpactSection";
import PilotSection from "@/components/pilot/PilotSection";
import SocialsSection from "@/components/socials/SocialsSection";

export default function HomePage() {
  return (
    <>
      <BackgroundEffects />

      <Header />

      <main>
         <Hero />
         <ProblemSection />
         <HowItWorks />
         <ImpactSection />
         <PilotSection />
         <SocialsSection />
      </main>

      <Footer />
    </>
  );
}