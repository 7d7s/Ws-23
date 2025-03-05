"use client"
import Image from "next/image";
import Counter from "@/components/counter/index";
import Link from "next/link";

function WhyPeopleTrust() {
  return (
    <div className="bg-gray-100 py-10 "> 
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-600 uppercase">
              Why People <span className="text-red-600">Trust Us?</span>
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed text-justify">
              The cornerstone of our work at WS Clinic is trust. We are committed to offering comprehensive, multispecialty healthcare
              with a personal touch, which is why patients and their families select us. Our group of highly qualified and experienced medical
              professionals collaborate to provide personalized care by leveraging the most recent developments in medical technology and therapies.
              We place a high value on open communication, making sure that our patients understand their care plans and feel at ease with them.
            </p>
            {/* Counter Section */}
            <div className="flex flex-wrap justify-center lg:justify-start mt-6 gap-6">
              <Counter start={0} end={15000} duration={4000} label="Happy Patients" />
              <Counter start={0} end={8} duration={3000} label="Years of Trust" />
              <Counter start={0} end={21} duration={3000} label="Kinds of Specialties" />
            </div>

            <div className="mt-10 text-center">
              <Link href="/contect" className='mt-64 btn-airtel px-6 py-3 rounded-md'> Book An Appointment</Link>
            </div>
          </div>
          <div className="">
            <Image 
              className="rounded-lg shadow-md  w-full" 
              src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647820/WhyPeopleTrustUs_ygd96g.jpg" 
              alt="Why People Trust Us" 
              width={500} 
              height={400} 
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyPeopleTrust;
