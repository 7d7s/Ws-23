import React from 'react'
import Banner from '@/components/banner/index'
import ContactSection from './contactSection';
import EnquirySection from './enquirySection';
import BookAppointment from './bookAppointment';


function page() {
    const aboutBanner = {
        title: "Contact",
        subtitle: "Contact",
        backgroundImage: "https://www.wsclinic.org/assets/contactimg-BySp04I7.jpg", // Custom image for About page
      };
  return (
    <>
      <Banner {...aboutBanner} />
      <ContactSection/>
      <EnquirySection/>
      <BookAppointment/>
    </>
  )
}

export default page
