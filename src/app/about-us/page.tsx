"use client";
// import { useAdvancedLayout } from '@/hooks/useAdvancedLayout';
import Banner from "@/components/banner/index";
import AboutUs from "./aboutUs";
import OurValues from "./overValue";
import MissionVision from "./missionVision";


function About() {
  // useAdvancedLayout('main', 'dark'); // Set layout and theme
  const aboutBanner = {
    title: "About",
    subtitle: "About-Us",
    backgroundImage: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647753/about-us_raocxn.jpg", // Custom image for About page
  };
  return (
    <>
      <Banner {...aboutBanner} />
      <AboutUs/>
     <OurValues/>
     <MissionVision/>
    </>
  );
}

export default About;
