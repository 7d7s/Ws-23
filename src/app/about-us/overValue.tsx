"use client"
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export default function OurValues() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto  px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section - Values */}
          <div className="">
            <h2 className="text-gray-400 text-xl md:text-2xl font-bold uppercase relative mb-6">
              Our Values
            </h2>
            <ul className="space-y-4 text-justify">
              {[
                { title: "Compassion", desc: "We show love, understanding, and respect to each and every patient." },
                { title: "Excellence", desc: "Our objective is to continuously improve our services while adhering to the necessary requirements for medical practice." },
                { title: "Integrity", desc: "We maintain transparency and truthfulness in all of our dealings." },
                { title: "Cooperation", desc: "We think that in order to provide our patients with the greatest results, cooperation and collaborative treatment are essential." },
                { title: "Innovation", desc: "To improve our services, we use cutting-edge technologies and creative solutions." }
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3 text-gray-700">
                  <FaCheckCircle className="text-black text-lg flex-shrink-0" />
                  <span>
                    <b>{item.title} :</b> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Image */}
          <div className="text-center ">
            <Image src="https://www.wsclinic.org/assets/MedicalSupport-Di5-6YX-.jpg" alt="Medical Support" className="rounded-lg shadow-lg w-full h-auto object-cover" width={100} height={100} />
          </div>
        </div>
      </div>
    </section>
  );
}
