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
    backgroundImage: "https://www.wsclinic.org/assets/contactimg-BySp04I7.jpg", // Custom image for About page
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
