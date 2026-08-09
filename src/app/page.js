import Header from "@/components/layout/Header";

import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Community from "@/components/sections/Community";
import FeatureHighlight from "@/components/sections/FeatureHighlight";
import FutureBright from "@/components/sections/futurebright ";
import Statistics from "@/components/sections/Statistics";
import Testimonial from "@/components/sections/Testimonial";
import Blog from "@/components/sections/Blog";
import FooterDesign from "@/components/sections/FooterDesign";
import CTA from "@/components/sections/CTA";

import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Clients />
        <Community />
        <FeatureHighlight />
        <Statistics />
        <FutureBright />
        <Testimonial />
        <Blog />
        {/* <FooterDesign /> */}
        <CTA />
      </main>

      <Footer />
    </>
  );
}