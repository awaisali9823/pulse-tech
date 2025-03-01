import Building from "./_sections/buildingSection";
import CaseStudy from "./_sections/caseStudySection";
import DevelopSection from "./_sections/developSection";
import FeatureSection from "./_sections/featureSection";
import Hero from "./_sections/heroSection";
import HireSection from "./_sections/hireSection";
import MarqueeSection from "./_sections/marqueeSection";
import ServiceSection from "./_sections/serviceSection";
import Software from "./_sections/softwareSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <Software />
      <MarqueeSection />
      <CaseStudy />
      <Building />
      <DevelopSection />
      <FeatureSection />
      <HireSection />
    </>
  );
}
