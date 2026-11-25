import { SiteHeader } from "@/components/site/SiteHeader";
import { HeroSection } from "@/components/site/HeroSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { WorkflowSection } from "@/components/site/WorkflowSection";
import { WhyImproxSection } from "@/components/site/WhyImproxSection";
import { EnquirySection } from "@/components/site/EnquirySection";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <WorkflowSection />
        <WhyImproxSection />
        <EnquirySection />
      </main>
    </>
  );
}
