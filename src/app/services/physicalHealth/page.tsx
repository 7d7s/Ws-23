"use client";
import Image from "next/image";
import Banner from '@/components/banner/index'
import Link from "next/link";

const aboutBanner = {
    title: "Physical Health",
    subtitle: "Physical Health",
    backgroundImage: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647810/servicesimg_svkeib.jpg", // Custom image for About page
  };
const PhysicalHealth = () => {
  const services = [
    {
      title: "General Physician",
      text: "Our experienced general physicians provide comprehensive primary care, addressing a wide range of medical conditions with personalized treatment plans.",
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647777/GeneralPhyscian_vmfl1u.png", 
      imgAlt: "General Physician",
      id: "Servic-GeneralPhysician",
      reverse: false,
    },
    {
      title: "Gynaecologist",
      text: "Our skilled gynecologists provide expert care in women's health, including reproductive health, pregnancy, and menopause management.",
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647784/gynecology_be9zqh.png",
      imgAlt: "Gynaecologist",
      id: "Servic-Gynaecologist",
      reverse: true,
    },
    {
      title: "Dermatologist",
      text: "Our dermatologists specialize in treating skin, hair, and nail disorders, offering advanced solutions for a variety of dermatological conditions.",
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647769/Dermatologist2_w8swkc.png", 
      imgAlt: "Dermatologist",
      reverse: false,
      id: "Servic-Dermatologist"
    },
   
    {
      title: "Nephrologist",
      text: "Our nephrologists provide expert care for kidney-related issues, including chronic kidney disease, dialysis, and transplant preparation.",
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647796/nephrologist_tngff4.png",
      imgAlt: "Nephrologist",
      reverse: true,
      id: "Servic-Nephrologist"
    },
   
    {
      title: "Cardiologist",
      text: "Our cardiologists offer advanced care for heart health, including diagnostics, treatment, and management of cardiovascular diseases.",
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647762/cardiologist2_exofhp.png", 
      imgAlt: "Cardiologist",
      reverse: false,
      id: "Servic-Cardiologist"
    },
   
    {
      title: "Orthopedic",
      text: "Our orthopedic specialists treat musculoskeletal conditions, from fractures to joint replacements, ensuring optimal mobility and function.",
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647799/orthopedics_wcdi2w.png",
      imgAlt: "Orthopedic",
      reverse: true,
      id: "Servic-Orthopedic"
    },
    
    {
      title: "Diabetologist",
      text: "Our diabetologists provide specialized care for diabetes management, focusing on personalized treatment plans to control blood sugar levels.",
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647771/DIABETOLOGIST_gsbnnj.png", 
      imgAlt: "Diabetologist",
      reverse: false,
      id: "Servic-Diabetologist"
    },
   
    {
      title: "Physiotherapist",
      text: "Our physiotherapists provide rehabilitation for injuries and chronic conditions, enhancing physical function and promoting overall well-being.",
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647803/physiotherapist_e9zr78.png",
      imgAlt: "Physiotherapist",
      reverse: true,
      id: "Service-Physiotherapist"
    },
  
    {
      title: "Dietician",
      text: "Our dieticians offer personalized nutrition plans, promoting healthy eating habits and managing dietary-related health conditions.",
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740745309/DIETICIAN2_mkb5sf.png", 
      imgAlt: "Dietician",
      reverse: false,
      id:"Servic-Dietician"
    },
    
    {
      title: "Infectious Disease Specialists",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740745397/infection_derwaq.png",
      imgAlt: "Infectious",
      reverse: true,
      id: "Servic-IDS"
    }
  ];

  return (
    <>
<Banner {...aboutBanner} />

    <div className="max-w-5xl mx-auto py-10">
      {services.map((service, index) => (
        <div
          key={index}
          className={`relative flex flex-col md:flex-row mx-4 ${
            service.reverse ? "md:flex-row-reverse" : ""
          } items-center card-left rounded-md md:p-6 p-3 shadow-lg my-6`}
        >
          {/* Image + Border Container */}
          <div className="flex items-center space-x-4">
            {/* Image */}
            {!service.reverse && (
              <Image
                src={service.imgSrc}
                alt={service.imgAlt}
                width={100}
                height={100}
                className="object-contain"
              />
            )}

            {/* Red Border */}
            <div
              className={`md:h-32 w-1 bg-red-800 ${
                service.reverse ? "order-first" : "order-last"
              }`}
            ></div>

            {service.reverse && (
              <Image
                src={service.imgSrc}
                alt={service.imgAlt}
                width={100}
                height={100}
                className="object-contain"
              />
            )}
          </div>

          {/* Text Content */}
          <div className={`flex-1 text-center px-6 ${service.reverse ? "md:text-right" : "md:text-left"}`}>
            <h2 className="md:text-2xl text-lg font-bold text-gray-700 uppercase">{service.title}</h2>
            <p className="text-gray-600 mt-2 mb-4">{service.text}</p>
            <Link href="/contact" className=" px-4 py-2 btn-airtel font-semibold rounded-md">
              Book An Appointment
            </Link>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default PhysicalHealth;
