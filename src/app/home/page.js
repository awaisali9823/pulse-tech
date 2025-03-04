import Footer from "@/_components/Footer";
import Building from "./_sections/buildingSection";
import CaseStudy from "./_sections/caseStudySection";
import DevelopSection from "./_sections/developSection";
import FeatureSection from "./_sections/featureSection";
import Hero from "./_sections/heroSection";
import HireSection from "./_sections/hireSection";
import MarqueeSection from "./_sections/marqueeSection";
import ServiceSection from "./_sections/serviceSection";
import Software from "./_sections/softwareSection";
import TabSection from "./_sections/tabSection";

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
      <TabSection />
      <FeatureSection />
      <HireSection />
      <Footer />
    </>
  );
}
