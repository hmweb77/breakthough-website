
import About from "@/components/Home/About";
import BreakthroughJourney from "@/components/Home/BreakthroughJourney";
import ClientBeforeAfter from "@/components/Home/ClientBeforeAfter";
import HeroSection from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import NewHeroSection from "@/components/Home/NewHero";
import Process from "@/components/Home/Process";
import Services from "@/components/Home/Services";
import WhatAreBreakthroughMethods from "@/components/Home/WhatAreBT";
import WhoIsItFor from "@/components/Home/WhoFor";
import WhyItWorks from "@/components/Home/WhyItWorks";


export default function Home() {
  return (
    <>
      {/* <HeroSection></HeroSection> */}
      <NewHeroSection></NewHeroSection>
      <WhatAreBreakthroughMethods></WhatAreBreakthroughMethods>
      <section id="whofor">
        <WhoIsItFor></WhoIsItFor>
      </section>
      <ClientBeforeAfter></ClientBeforeAfter>
      {/* <BreakthroughJourney></BreakthroughJourney> */}
      <section id="why">
        <WhyItWorks></WhyItWorks>
      </section>
      
    
      {/* <HowItWorks></HowItWorks> */}
      <section id="process">
        <Process></Process>
      </section>
      <section id="services">
        <Services></Services>
      </section>
      <section id="about">
        <About></About>
      </section>
    </>
  );
}
