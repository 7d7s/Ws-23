"use client"
import { FaUserCircle, FaStore, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const ContactSection = () => {
  return (
    <section className="my-10 container mx-auto px-4">
          {/* SVG Gradient Definition */}
      <svg width="0" height="0">
        <defs>
          <radialGradient
            id="radial-gradient"
            cx="29.69%" cy="6.25%" r="87.5%"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#970000" offset="0%" />
            <stop stopColor="#400707" offset="100%" />
          </radialGradient>
        </defs>
      </svg>

      {/* Section Title */}
      <div className="text-center my-10 section-title">
        <h1 className="relative inline-block font-bold bottom-line">
          Contact Us
        </h1>
        <h2 className="font-semibold mt-5 bottom-line">
          Let &apos; s Create Positive Change Together!
        </h2>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Contact */}
        <div className="bg-white shadow-md p-6 rounded-lg text-center transition-all duration-300 hover:shadow-none hover:scale-105">
          <div className="flex justify-center items-center text-4xl  mb-3">
            <FaUserCircle style={{ fill: "url(#radial-gradient)" }} />
          </div>
          <h5 className="text-lg font-semibold text-gray-800 ">
            Contact
          </h5>
          <p className="text-gray-600">
            WsClinic
          </p>
        </div>

        {/* Visit The Office */}
        <div className="bg-white shadow-md p-6 rounded-lg text-center transition-all duration-300 hover:shadow-none hover:scale-105">
          <div className="flex justify-center items-center text-4xl mb-3">
            <FaStore style={{ fill: "url(#radial-gradient)" }} />
          </div>
          <h5 className="text-lg font-semibold text-gray-800">
            Visit The Office
          </h5>
          <p className="text-gray-600">
            WS Clinic, I-102, Second Floor, Block I, Kirti Nagar, Delhi, 110015
          </p>
        </div>

        {/* Phone Inquiry */}
        <div className="bg-white shadow-md p-6 rounded-lg text-center transition-all duration-300 hover:shadow-none hover:scale-105">
          <div className="flex justify-center items-center text-4xl mb-3">
            <FaPhoneAlt style={{ fill: "url(#radial-gradient)" }} />
          </div>
          <h5 className="text-lg font-semibold text-gray-800">
            Phone Inquiry
          </h5>
          <p className="text-gray-600">
            (+91) 88000-07740
          </p>
        </div>

        {/* Send Email */}
        <div className="bg-white shadow-md p-6 rounded-lg text-center transition-all duration-300 hover:shadow-none hover:scale-105">
          <div className="flex justify-center items-center text-4xl mb-3">
            <FaEnvelope style={{ fill: "url(#radial-gradient)" }} />
          </div>
          <h5 className="text-lg font-semibold text-gray-800">
            Send Email
          </h5>
          <p className="text-gray-600">
            info@wsclinic.org
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
