"use client";
import Image from "next/image";
import Banner from "@/components/banner/index";
import Link from "next/link";

const aboutBanner = {
  title: "Kids Care",
  subtitle: "Kids Care",
  backgroundImage: "https://www.wsclinic.org/assets/servicesimg-CDlGIeX-.jpg", // Custom image for About page
};
const KidsCare = () => {
  const services = [
    {
      title: "Occupational Therapy",
      text: "Our occupational therapists help patients regain independence in daily activities, focusing on improving physical, cognitive, and sensory skills.",
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740746084/Occupational_sou3uh.png",
      imgAlt: "Occupational Therapy",
      reverse: false,
      id: "Servic-OccupationalTherapy",
    },

    {
      title: "Speech Therapy",
      text: "Our speech therapists assist individuals with speech, language, and swallowing disorders, helping to improve communication skills.",
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740746083/Speech_k1et2i.png",
      imgAlt: "Speech Therapy",
      reverse: true,
      id: "Servic-SpeechTherapy",
    },

    {
      title: "Child Specialist",
      text: "Our dedicated child specialists offer compassionate care for children, from routine check-ups to managing complex pediatric conditions.",
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740746083/Child_Specialist_cqyf4w.png",
      imgAlt: "Child Specialist",
      reverse: false,
      id: "Servic-ChildSpecialist",
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
            <div
              className={`flex-1 text-center px-6 ${
                service.reverse ? "md:text-right" : "md:text-left"
              }`}
            >
              <h2 className="md:text-2xl text-lg font-bold text-gray-700 uppercase">
                {service.title}
              </h2>
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

export default KidsCare;
