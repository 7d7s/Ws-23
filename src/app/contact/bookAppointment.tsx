"use client";
import ContectUs from "@/components/contactus/index";
import Button from "@/components/buttons/bookAppointment";

function BookAppointment() {
  return (
    <div className="md:relative w-full h-[75vh] mt-32 md:mt-0">
      {/* Google Map - Fullscreen */}
      <div className="absolute inset-0 z-0 md:flex hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1110.0150147830323!2d77.14428295263008!3d28.65124100812288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0310af515fd9%3A0xce0d7b6154db1cb3!2sWS%20Clinic(Formerly%20WellSkool%20Clinic)!5e1!3m2!1sen!2sin!4v1719987931734!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Appointment Form - Overlay on Map */}
      <div className="relative z-10 flex justify-end items-end h-full p-5">
        <div className="bg-gray-dark  md:w-1/2 md:h-full flex flex-col justify-center text-center md:p-12 p-4">
          <h1 className="text-2xl md:text-4xl text-white mb-5 font-bold">
            Book An Appointment
          </h1>
          <ContectUs />
          <Button
            text="Book An Appointment"
            link={""}
            className="mt-7 py-4 px-7 w-full bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;
