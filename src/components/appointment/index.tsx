import ContectUs from "@/components/contactus/index";
import './appointmentModule.css'
import Link from "next/link";

function Appoinment() {
  return (
    <div className="w-full bg-appointment mt-10 md:mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left  py-10 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              We Are Your Trusted Certified Medical Health Provider
            </h1>
            <p className="text-white text-md text-justify">
              Schedule your appointment with our experienced medical professionals today. We offer flexible booking options to suit your busy lifestyle. Whether you need a routine check-up or specialized care, our dedicated team is here to deliver the highest quality service. Book now and take the first step towards a healthier you.
            </p>
          </div>

          <div
                className="appointment-form h-100 flex flex-col justify-center text-center md:p-12 p-4"
              >
                    <h1 className="text-2xl md:text-4xl text-white mb-5 font-bold">Book An Appointment</h1>
          <ContectUs/>
          <Link href="#" className="btn-airtel mt-7 py-4 px-7 rounded-md">Book An Appointment</Link>
    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appoinment;
