import Building from "./_sections/buildingSection";
import CaseStudy from "./_sections/caseStudySection";
import Hero from "./_sections/heroSection";
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
    </>
  );
}
