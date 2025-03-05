"use client"; 
import { useState, useEffect } from "react";
import Button from "@/components/buttons/bookAppointment";
import './headerModule.css';

const Slider = () => {
  const slides = [
    { src: "https://res.cloudinary.com/ddgbehuxg/video/upload/v1740647786/finn_1_ta0jcd.mp4", type: "video/mp4", containt: "with you at every", heading: "Child Care" },
    // { src: "https://res.cloudinary.com/ddgbehuxg/video/upload/v1740647790/HomeSlide2_tfnkxm.mp4", type: "video/mp4", containt: "with you at every", heading: "Physical Health" },
    // { src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", type: "video/mp4", containt: "with you at every", heading: "Mental Health" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 
    return () => clearInterval(interval);
  }, [currentSlide]); 

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

  return (
    <div className="relative w-full mx-auto">
      <div className="slider relative flex transition-transform duration-700 ease-in-out h-100vh">
        {slides.map((slide, index) => (
          <div
            className={`absolute w-full transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            key={index}
          >
            <video className="w-full h-auto" autoPlay loop muted>
              <source src={slide.src} type={slide.type} />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 md:mt-96 mt-28 flex flex-col items-center justify-center text-white text-center">
  {/* <h2 className="md:text-6xl text-sm uppercase">{slide.containt} <span className="text-red-800">Step...</span></h2> */}
  {/* <h1 className="md:text-6xl text-sm font-extrabold uppercase md:my-8 my-2">{slide.heading}</h1> */}
  <div className="">
    <Button text="Book An Appointment" link="/contact" className="md:py-3 md:px-7 text-xs md:text-xl " />
  </div>
</div>

          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {/* <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 px-3 py-2 rounded-full">
        ❮
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 px-3 py-2 rounded-full">
        ❯
      </button> */}
    </div>
  );
};

export default Slider;
