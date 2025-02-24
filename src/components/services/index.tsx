import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import './serviceModule.css';
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";

const serviceCard = [
    { 
      image: "https://www.wsclinic.org/assets/Orthopaedic02-CWBYgWJz.jpg",
      title: "General Physician", 
      link: "/PhysicalHealth#Servic-GeneralPhysician",
      id: "General-Physician"
    },
    { 
      image: "https://www.wsclinic.org/assets/Psychiatrist-DroqxBlC.jpg", 
      title: "Child Specialist", 
      link: "/ChildCare#Servic-ChildSpecialist",
      id: "Child-Specialist"
    },
    { 
      image: "https://www.wsclinic.org/assets/Orthopaedic02-CWBYgWJz.jpg", 
      title: "Gynaecologist", 
      link: "/PhysicalHealth#Servic-Gynaecologist",
      id: "Gynaecologist"
    },
    { 
      image: "https://www.wsclinic.org/assets/Psychiatrist-DroqxBlC.jpg", 
      title: "Dermatologist", 
      link: "/PhysicalHealth#Servic-Dermatologist",
      id: "Dermatologist"
    },
    { 
      image: "https://www.wsclinic.org/assets/Orthopaedic02-CWBYgWJz.jpg", 
      title: "ENT/Hearing", 
      link: "#",
      id: "ENT-Hearing"
    },
    { 
      image: "https://www.wsclinic.org/assets/Psychiatrist-DroqxBlC.jpg", 
      title: "Nephrologist", 
      link: "/PhysicalHealth#Servic-Nephrologist",
      id: "Nephrologist"
    },
    { 
      image: "https://www.wsclinic.org/assets/Orthopaedic02-CWBYgWJz.jpg", 
      title: "Cardiologist", 
      link: "/PhysicalHealth#Servic-Cardiologist",
      id: "Cardiologist"
    },
    { 
      image: "https://www.wsclinic.org/assets/Psychiatrist-DroqxBlC.jpg", 
      title: "Orthopaedic", 
      link: "/PhysicalHealth#Servic-Orthopedic",
      id: "Orthopaedic"
    },
    { 
      image: "https://www.wsclinic.org/assets/Orthopaedic02-CWBYgWJz.jpg", 
      title: "Diabetologist", 
      link: "/PhysicalHealth#Servic-Diabetologist",
      id: "Diabetologist"
    },
    { 
      image: "https://www.wsclinic.org/assets/Psychiatrist-DroqxBlC.jpg", 
      title: "Plastic & Cosmetic Surgeon", 
      link: "/PhysicalHealth",
      id: "Plastic-Cosmetic-Surgeon",
      class: "fs-7 fw-bold"
    },
    { 
      image: "https://www.wsclinic.org/assets/Orthopaedic02-CWBYgWJz.jpg", 
      title: "Psychiatrist", 
      link: "/MentalHealth#Servic-Psychiatrist",
      id: "Psychiatrist"
      
    },
    { 
      image: "https://www.wsclinic.org/assets/Psychiatrist-DroqxBlC.jpg", 
      title: "Psychologist", 
      link: "/MentalHealth#Servic-Psychologist",
      id: "Psychologist"
    },
    { 
      image: "https://www.wsclinic.org/assets/Orthopaedic02-CWBYgWJz.jpg", 
      title: "Speech Therapy", 
      link: "/ChildCare#Servic-SpeechTherapy",
      id: "Speech-Therapy"
    },
    { 
      image: "https://www.wsclinic.org/assets/Psychiatrist-DroqxBlC.jpg", 
      title: "Occupational Therapy", 
      link: "/ChildCare#Servic-OccupationalTherapy",
      id: "Occupational-Therapy",
      class: "fs-6 fw-bold"
    },
    { 
      image: "https://www.wsclinic.org/assets/Orthopaedic02-CWBYgWJz.jpg", 
      title: "Physiotherapist", 
      link: "/PhysicalHealth#Service-Physiotherapist",
      id: "Physiotherapist"
    },
    { 
      image: "https://www.wsclinic.org/assets/Psychiatrist-DroqxBlC.jpg", 
      title: "Dietician", 
      link: "/PhysicalHealth#Servic-Dietician",
      id: "Dietician"
    },
    { 
      image: "https://www.wsclinic.org/assets/Orthopaedic02-CWBYgWJz.jpg", 
      title: "Vaccinations", 
      link: "/PhysicalHealth",
      id: "Vaccinations"
    },
    { 
      image: "https://www.wsclinic.org/assets/Psychiatrist-DroqxBlC.jpg", 
      title: "Infectious Disease Specialist", 
      link: "/PhysicalHealth#Servic-IDS",
      id: "Infectious-Disease-Specialist",
      class: "fs-7 fw-bold"
    },
    { 
      image: "https://www.wsclinic.org/assets/Orthopaedic02-CWBYgWJz.jpg", 
      title: "Child Pysiotherphy", 
      link: "/PhysicalHealth",
      id: "Child-Pysiotherphy"
    },
    { 
      image: "https://www.wsclinic.org/assets/Psychiatrist-DroqxBlC.jpg", 
      title: "HIV AIDS", 
      link: "/PhysicalHealth",
      id: "General-Physician"
    },
    { 
      image: "https://www.wsclinic.org/assets/Orthopaedic02-CWBYgWJz.jpg", 
      title: "Infectious Disease", 
      link: "/PhysicalHealth",
      id: "Infectious-Disease"
    },
    { 
      image: "https://www.wsclinic.org/assets/Psychiatrist-DroqxBlC.jpg", 
      title: "Sexology", 
      link: "/MentalHealth#Servic-Sexology",
      id: "Sexology"
    }
  ];
  

const Service = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1, dots: false } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, dots: false  } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: false  } }
    ]
  };

  return (
    <div className="container mx-auto py-12 overflow-hidden">
      <div className="text-center">
        <div className="section-title mb-6">
          <h1 className="relative uppercase mb-4 bottom-line text-red-600 text-3xl font-bold">
            Our Services
          </h1>
          <h5 className="display-5 my-8 text-gray-600 text-2xl font-bold uppercase">
            Comprehensive Care, Every Step of the Way
          </h5>
        </div>
      </div>
      <div className="">
      <Slider {...settings}>
        {serviceCard.map((item, index) => (
          <div key={index} className="p-3">
            <div className="service text-center service010">
              <div className="service_container mx-auto mb-10">
                <Image src={item.image} alt="service image" width={100} height={100} className="object-fit-cover rounded-circle"/>
              </div>
              <h5 className="service_title my-10">
                <Link href={item.link || "#"} className={`text-dark text-decoration-none  ${item.class}`}>{item.title}</Link>
              </h5>
              <Link href={item.link || "#"} className="rounded btn-airtel px-3 py-2 my-6">
              <FaAngleRight size={20} className="inline"/> Read More
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      <div className="container">
        <div className="flex justify-end">
          <Link href="/services/physicalHealth" className="View-more text-dark -mt-10 font-semibold cursor-pointer">
            View More <FaAngleRight size={20} className="inline"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;