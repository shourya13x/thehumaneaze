import { HeroSection } from "@/components/home/HeroSection";
import { WhoWeAreSection } from "@/components/home/WhoWeAreSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { HRLearningSection } from "@/components/home/HRLearningSection";
import { MeetTheTeamSection } from "@/components/home/MeetTheTeamSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <HowWeWorkSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <HRLearningSection />
      <MeetTheTeamSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
