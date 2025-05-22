
import About from "@/components/Home/About";
import BreakthroughJourney from "@/components/Home/BreakthroughJourney";
import ClientBeforeAfter from "@/components/Home/ClientBeforeAfter";
import HeroSection from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import Process from "@/components/Home/Process";
import Services from "@/components/Home/Services";
import WhatAreBreakthroughMethods from "@/components/Home/WhatAreBT";
import WhoIsItFor from "@/components/Home/WhoFor";
import WhyItWorks from "@/components/Home/WhyItWorks";


export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <WhatAreBreakthroughMethods></WhatAreBreakthroughMethods>
      <WhoIsItFor></WhoIsItFor>
      <BreakthroughJourney></BreakthroughJourney>
      <WhyItWorks></WhyItWorks>
      <ClientBeforeAfter></ClientBeforeAfter>
      <HowItWorks></HowItWorks>
      <Process></Process>
      <Services></Services>
      <About></About>
    </>
  );
}
