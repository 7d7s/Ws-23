"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6"; 
import Button from "@/components/buttons/bookAppointment";
import Image from "next/image";
import "./teamModule.css";

const teamMemberData = [
    {
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647818/UpinderKaur_tlq0di.png",
      name: 'Dr. Upinder Kaur',
      title: 'Psychologist',
      profileLink: '/doctors',
      appointmentLink: '/contact',
      socialLinks: [
        { href: "#", icon: <FaXTwitter /> },
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaLinkedinIn /> },
      { href: "#", icon: <FaInstagram /> },
      ],
    },
  
    {
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647752/AmitHarshana_mghg54.png",
      name: 'Dr. Amit Harshana',
      title: 'HIV/ AIDS',
      profileLink: '/doctors',
      appointmentLink: '/contact',
      socialLinks: [
        { href: "#", icon: <FaXTwitter /> },
        { href: "#", icon: <FaFacebookF /> },
        { href: "#", icon: <FaLinkedinIn /> },
        { href: "#", icon: <FaInstagram /> },
      ],
    },
    {
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647754/ankur_rtemyv.png",
      name: 'Dr. Ankur',
      title: 'Consultant Anesthesiologist',
      profileLink: '/doctors',
      appointmentLink: '/contact',
      socialLinks: [
        { href: "#", icon: <FaXTwitter /> },
        { href: "#", icon: <FaFacebookF /> },
        { href: "#", icon: <FaLinkedinIn /> },
        { href: "#", icon: <FaInstagram /> },
      ],
    },
    {
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647756/Arvind_suzyrj.png",
      name: 'Dr. Arvind',
      title: 'Psychiatrist',
      profileLink: '/doctors',
      appointmentLink: '/contact',
      socialLinks: [
         { href: "#", icon: <FaXTwitter /> },
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaLinkedinIn /> },
      { href: "#", icon: <FaInstagram /> },
      ],
    },
    {
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647756/AshishShah_nzfzag.png",
      name: 'Dr. Ashish Shah ',
      title: 'Psychiatrist',
      profileLink: '/doctors',
      appointmentLink: '/contact',
      socialLinks: [
        { href: "#", icon: <FaXTwitter /> },
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaLinkedinIn /> },
      { href: "#", icon: <FaInstagram /> },
      ],
    },
    {
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647757/BhanuMishra_onn9h7.png",
      name: 'Dr. Bhanu Mishra',
      title: 'Nephrologist',
      profileLink: '/doctors',
      appointmentLink: '/contact',
      socialLinks: [
         { href: "#", icon: <FaXTwitter /> },
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaLinkedinIn /> },
      { href: "#", icon: <FaInstagram /> },
      ],
    },
    {
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647772/Divija_m9cdkg.png",
      name: 'Dr. Divija Chugh',
      title: 'Gynaecologist',
      profileLink: '/doctors',
      appointmentLink: '/contact',
      socialLinks: [
         { href: "#", icon: <FaXTwitter /> },
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaLinkedinIn /> },
      { href: "#", icon: <FaInstagram /> },
      ],
    },
    {
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647785/Harish_belwlk.png",
      name: 'Dr. Harish Chandra ',
      title: 'Psychiatrist',
      profileLink: '/doctors',
      appointmentLink: '/contact',
      socialLinks: [
         { href: "#", icon: <FaXTwitter /> },
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaLinkedinIn /> },
      { href: "#", icon: <FaInstagram /> },
      ],
    },
    {
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647790/MadhurMahna_havhjo.png",
      name: 'Dr. Madhur Mahna',
      title: 'Orthopaedic',
      profileLink: '/doctors',
      appointmentLink: '/contact',
      socialLinks: [
         { href: "#", icon: <FaXTwitter /> },
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaLinkedinIn /> },
      { href: "#", icon: <FaInstagram /> },
      ],
    },
    {
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647791/Manoj_hbjztv.png",
      name: 'Dr. Manoj Goel',
      title: 'Senior Consultant Physician',
      profileLink: '/doctors',
      appointmentLink: '/contact',
      socialLinks: [
         { href: "#", icon: <FaXTwitter /> },
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaLinkedinIn /> },
      { href: "#", icon: <FaInstagram /> },
      ],
    },
    {
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647794/Naveen_sh5abr.png",
      name: 'Dr. Naveen Bhamri',
      title: 'General Physician',
      profileLink: '/doctors',
      appointmentLink: '/contact',
      socialLinks: [
         { href: "#", icon: <FaXTwitter /> },
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaLinkedinIn /> },
      { href: "#", icon: <FaInstagram /> },
      ],
    },
    {
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647798/Nitya_vhbqf3.png",
      name: 'Dr. Nitya Subramanian',
      title: 'ENT',
      profileLink: '/doctors',
      appointmentLink: '/contact',
      socialLinks: [
         { href: "#", icon: <FaXTwitter /> },
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaLinkedinIn /> },
      { href: "#", icon: <FaInstagram /> },
      ],
    },
    {
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647809/Rajpal_mi0zfz.png",
      name: 'Dr. Rajpal Kaushik',
      title: 'Psychologist',
      profileLink: '/doctors',
      appointmentLink: '/contact',
      socialLinks: [
         { href: "#", icon: <FaXTwitter /> },
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaLinkedinIn /> },
      { href: "#", icon: <FaInstagram /> },
      ],
    },
    {
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647809/SachinRajpal_go363x.png",
      name: 'Dr. Sachin Rajpal',
      title: 'Plastic & Cosmetic Surgeon',
      profileLink: '/doctors',
      appointmentLink: '/contact',
      socialLinks: [
         { href: "#", icon: <FaXTwitter /> },
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaLinkedinIn /> },
      { href: "#", icon: <FaInstagram /> },
      ],
    },
    
    {
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647819/Varun_wiiem9.png",
      name: 'Dr. Varun',
      title: 'Child Specialist',
      profileLink: '/doctors',
      appointmentLink: '/contact',
      socialLinks: [
         { href: "#", icon: <FaXTwitter /> },
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaLinkedinIn /> },
      { href: "#", icon: <FaInstagram /> },
      ],
    },
    {
      imgSrc: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647819/Virat_pxwplf.png",
      name: 'Dr. Virat',
      title: 'Physiotherapist',
      profileLink: '/doctors',
      appointmentLink: '/contact',
      socialLinks: [
         { href: "#", icon: <FaXTwitter /> },
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaLinkedinIn /> },
      { href: "#", icon: <FaInstagram /> },
      ],
    },
  ];

const DoctorsTeam = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="Team_Section py-3 mt-3 overflow-x-hidden">
      <div className="container mx-auto md:px-10 px-4">
        <div className="md:flex">
          {/* Left Side Content */}
          <div className="w-full md:w-1/3 md:py-12">
            <div className="doc-section-title bg-gray-50 team-item-box rounded-lg flex flex-col justify-center items-center">
              <div className="container mx-auto md:px-24 px-5">
              <h2 className=" font-bold text-gray-700 mb-4" style={{lineHeight:1.3}}>
                Our Expert Doctors, Our Backbone
              </h2>
              <Button text="Book Appointment" link="/contact" className="mt-7 py-4 px-7" />
            </div>
            </div>
          </div>

          {/* Slick Slider */}
          <div className="w-full lg:w-2/3">
            {teamMemberData.length > 0 ? (
              <Slider {...settings}>
                {teamMemberData.map((member, index) => (
                  <div key={index} className="p-2">
                    <div className="team-item team-item-box pt-5 md:mx-5">
                      <div className="relative flex flex-col items-center justify-center">
                        <Image
                          className="img-fluid  w-100"
                          src={member.imgSrc || "/default-image.jpg"}
                          alt={member.name || "Doctor Image"}
                          width={300}
                          height={300}
                        />
                        <div className=" bg-slate-100 -mt-1 flex justify-center space-x-2 rounded p-2">
                          {member.socialLinks.map((link, idx) => (
                            <Link key={idx} className="flex justify-center items-center rounded bg-gray-dark text-white btn-square" href={link.href}>
                            {link.icon}
                          </Link>
                          ))}
                        </div>
                      </div>
                      <div className="team-text text-center bg-slate-100">
                        <h4 className="py-2 text-2xl font-semibold">{member.name}</h4>
                        <p className="text-red-700 text-lg">{member.title}</p>
                        <div className="pb-9 pt-4">
                        <Button text=" View Profile" link={member.profileLink} className="mt-7 p-2 mr-3" />
                        <Button text=" Book Appointment" link={member.appointmentLink} className="mt-7 p-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <p className="text-center">No team members are available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsTeam;
