"use client";

import { useState } from "react";
import Image from "next/image";
import { BiEnvelope } from "react-icons/bi";

const EnquirySection = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) {
      setMobileError("Only numbers allowed");
    } else {
      setMobileError("");
    }
    setMobileNumber(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setButtonText("Sending...");
    setTimeout(() => {
      setIsSending(false);
      setButtonText("Send Message");
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 my-16" id="BookAnAppointment">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative h-full">
          <Image
            src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647814/slider-b-img-01_mdebig.jpg"
            alt="Contact Image"
            className="rounded-lg w-full h-full object-cover"
            width={1000}
            height={1000}
          />
          <div className="hidden md:flex justify-between p-4 bg-white shadow-md rounded-md absolute bottom-4 left-4 right-4">
            <div>
              <h4 className="text-orange-600 flex items-center">Inquiry us</h4>
              <h5 className="text-gray-700">(+91) 88000-07740</h5>
            </div>
            <div>
              <h4 className="text-orange-600 flex items-center">
                <BiEnvelope className="mr-2" /> Email
              </h4>
              <h5 className="text-gray-700">info@wsclinic.org</h5>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg md:p-6 p-2">
          <div className="mb-6">
            <h2 className="text-red-700 text-2xl font-bold">Need help?</h2>
            <h2 className="text-2xl font-semibold">Let&apos;s ask your questions</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border-b-2 border-gray-300 p-2 w-full outline-none focus:border-orange-500 transition-all"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="border-b-2 border-gray-300 p-2 w-full outline-none focus:border-orange-500 transition-all"
                required
              />
              <div className="md:col-span-2">
                <input
                  type="tel"
                  name="number"
                  placeholder="Mobile Number"
                  maxLength={10}
                  value={mobileNumber}
                  onChange={handleMobileChange}
                  className="border-b-2 border-gray-300 p-2 w-full outline-none focus:border-orange-500 transition-all"
                  required
                />
                {mobileError && <span className="text-red-500">{mobileError}</span>}
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="border-b-2 border-gray-300 p-2 w-full outline-none focus:border-orange-500 transition-all"
              />
              <textarea
                rows={4}
                name="message"
                placeholder="How can I help you?"
                className="border-b-2 border-gray-300 p-2 w-full outline-none focus:border-orange-500 transition-all"
              />
            </div>

            <button
              type="submit"
              className="btn-airtel text-white px-6 py-2 rounded-lg transition-all disabled:opacity-50"
              disabled={isSending}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquirySection;
