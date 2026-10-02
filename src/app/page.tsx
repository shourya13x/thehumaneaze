import { HeroSection } from "@/components/home/HeroSection";
import { OurPhilosophySection } from "@/components/home/OurPhilosophySection";
import { WhoWeAreSection } from "@/components/home/WhoWeAreSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { ProofSection } from "@/components/home/ProofSection";
import { MeetTheTeamSection } from "@/components/home/MeetTheTeamSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OurPhilosophySection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <HowWeWorkSection />
      <ProofSection />
      <MeetTheTeamSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
