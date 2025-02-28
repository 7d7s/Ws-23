"use client"
import Button from "@/components/buttons/bookAppointment";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import './aboutModule.css'

function AboutUs() {
  return (
    <section className="relative pt-20 bg-gray-100">
        <div className="absolute top-0 left-0 w-1/3 opacity-50">
          <Image
            src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647813/shap1_ixhwud.png"
            alt="Shape"
            className="w-full h-100"
            width={100}
            height={100}
          />
        </div>

        {/* Container */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left - Image & Video */}
            <div className="thumb-box">
              <Image
                src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647750/2_bjpgaf.jpg"
                alt="About"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />

              {/* Video Play Button */}
              <div className="intro-video">
                <div className="video">
                  <Link
                    href="https://www.youtube.com/watch?v=5vY-D42NFP4"
                    className="popup-youtube relative theme video-play-button item-center"
                  >
                    <FaPlay className="md:text-2xl text-sm playIcon" />
                  </Link>
                </div>
                <div className="content">
                  <h5>Let&apos;s see our intro video</h5>
                  <p className="text-black md:text-sm text-xs text-justify">
                    If your smile is not becoming to you, then you should be
                    coming.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - About Content */}
            <div>
              <div className="section-title text-center md:text-left mb-6">
                <h1 className="font-bold uppercase text-red-800 relative inline-block bottom-line">
                  About Us
                </h1>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                The number one choice for reliable holistic medical care is WS
                Clinic. At WS Clinic, we&apos;re dedicated to providing excellent
                medical treatment through a multidisciplinary approach, ensuring
                that every patient gets care personalised to their individual
                needs. We provide complete medical care, attending to your
                mental and physical well-being. We have an amazing number of
                highly skilled doctors on staff, so we&apos;re ready to provide you
                with the exceptional care you deserve. We make sure that your
                health journey is accompanied at every turn by compassionate,
                ongoing care that is customised to help you meet all of your
                medical needs. We stand strong with you at every step.
              </p>

              {/* Button */}
              <div className="mt-6 text-center md:text-right">
                <Button
                  text="Make Appointment"
                  link="/contact"
                  className="my-10 rounded-none py-4 px-7"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutUs
