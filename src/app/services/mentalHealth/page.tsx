"use client";
import Image from "next/image";
import Banner from '@/components/banner/index'
import Link from "next/link";

const aboutBanner = {
    title: "Mental Health",
    subtitle: "Mental Health",
    backgroundImage: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647810/servicesimg_svkeib.jpg",
  };
const MentalHealth = () => {
  const services = [
    {
        title: "Psychiatrist",
        text: "Our psychiatrists provide expert care for mental health conditions, offering therapy, medication management, and comprehensive psychiatric evaluations.",
        imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647804/psychiatrist_undlio.png", 
        imgAlt: "Psychiatrist",
        reverse: false,
        id: "Servic-Psychiatrist"
      },
      {
        title: "Psychologist",
        text: "Our psychologists offer therapeutic support for emotional and mental well-being, helping patients navigate stress, anxiety, and other psychological issues.",
        imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647808/psychologist_ukg0as.png",
        imgAlt: "Psychologist",
        reverse: true,
        id: "Servic-Psychologist"
      },
      {
        title: "Sexology",
        text: "Our sexologists provide confidential and compassionate care for sexual health concerns, including dysfunctions and relationship issues",
        imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647752/53_z5u9ps.png", 
      imgAlt: "Sexology",
      reverse: false,
        id: "Servic-Sexology"
      },
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
            <p className="text-gray-600 mt-2 mb-3">{service.text}</p>
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

export default MentalHealth;
