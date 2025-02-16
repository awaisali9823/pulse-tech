import Building from "./sections/buildingSection";
import CaseStudy from "./sections/caseStudySection";
import Hero from "./sections/heroSection";
import ServiceSection from "./sections/serviceSection";
import Software from "./sections/softwareSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <ServiceSection /> */}
      <Software />
      <CaseStudy />
      <Building />
    </>
  );
}
