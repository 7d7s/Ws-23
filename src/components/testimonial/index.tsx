"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testimonialModule.css'
import StarRating from "@/components/starRating/index";

const testimonials = [
  {
    id: 1,
    text: "My family members and I have been patients of Dr. Neena for many years and I can honestly say she is an amazing doctor. She and the hospital staff provide excellent care and always take time to answer questions. I also appreciate that she offers online check-in so I can get in and out quickly instead of spending hours in the waiting room. The entire staff is very supportive and helpful.",
    author: "Mohan Kaushik",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647816/Testimnialimg_kev7dv.png",
    rating: 5,
  },
  {
    id: 2,
    text: "I am forever grateful to Dr. Greg at Sundown Hospital for fixing my medical problems. The hospital has the best doctors and I could not have asked for a better experience. I will always be thankful for the care I received and will always recommend Sundown Hospital to anyone looking for the best care.",
    author: "Vinu Raj",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647816/Testimnialimg_kev7dv.png",
    rating: 4,
  },
  {
    id: 3,
    text: "Dr. Jane has the best team at Indigo Hospital. Thank you so much for the wonderful experience of post-operation care even during the weekend hours by the Doctor and compassionate nurses.",
    author: "Sonu Bhatiya",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647816/Testimnialimg_kev7dv.png",
    rating: 3,
  },
  {
    id: 4,
    text: "I am forever grateful to Dr. Greg at Sundown Hospital for fixing my medical problems. The hospital has the best doctors and I could not have asked for a better experience. I will always be thankful for the care I received and will always recommend Sundown Hospital to anyone looking for the best care.",
    author: "Vishnu Dev Shaay",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647816/Testimnialimg_kev7dv.png",
    rating: 4,
  },
];

const TestimonialSlider = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    focusOnSelect: true,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-textimonial py-12 overflow-x-hidden">
      <div className="container mx-auto px-4">
      <div className="section-title relative">
              <h1 className="display-5 font-bold mb-0 text-white text-center bottom-line">
                Patient Testimonials
              </h1>
            </div>
          </div>

        <div className="testimonial-slider">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide">
               <div className="testimonial-content md:mx-24 lg:mx-0 mx-5">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={80}
                      height={80}
                      className="rounded-full mb-4"
                    />
                  <p className="text-gray-700 text-sm">&ldquo;{testimonial.text}&ldquo;</p>
                  <h4 className="text-gray-900 text-xl font-semibold mt-4">
                    - {testimonial.author}
                  </h4>
                  <div className="mt-2">
                    <StarRating rating={testimonial.rating}/>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
  );
};

export default TestimonialSlider;
