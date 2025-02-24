"use client"
import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Left Section - Image */}
          <div className="text-center md:order-1 order-2">
            <Image src="https://www.wsclinic.org/assets/ourmission-BBV-K6W5.jpg" alt="Our Mission" className="rounded-lg h-auto w-full object-cover" width={100} height={100} />
          </div>

          {/* Right Section - Text */}
          <div className="md:order-2 order-1">
            <div className="mb-6">
              <h2 className="text-gray-400 text-xl md:text-2xl font-bold uppercase relative mb-3">
                Our Mission
              </h2>
              <p className="text-gray-700">
                To be an exemplary multispecialty clinic, acknowledged for
                outstanding patient care, helping and empowering patients
                throughout their whole health journey.
              </p>
            </div>

            <div>
              <h2 className="text-gray-400 text-xl md:text-2xl font-bold uppercase relative mb-3">
                Our Vision
              </h2>
              <p className="text-gray-700 text-justify">
                Our mission is to strengthen every patient to feel
                appreciated, supported, and in control of their health at
                every stage of their journey by offering comprehensive,
                compassionate, and cutting-edge medical care. We are
                committed to patient-centred care and continual improvement
                in each aspect of healthcare, and we pursue excellence
                through a multidisciplinary approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
