"use client"
import Link from "next/link";
// import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { BsCaretRightFill } from "react-icons/bs";
import './footerModule.css'
import SocialIcons from "@/components/socialIcons/index";
import Image from "next/image";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray text-white py-8">

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

      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 md:text-left">
          {/* Quick Links */}
          <div>
            <h2 className="text-2xl  font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="/"><span className="hover:text-red-700 cursor-pointer flex items-center"><BsCaretRightFill style={{ fill: "url(#radial-gradient)" }}/> &nbsp; Home</span></Link></li>
              <li><Link href="/about-us"><span className="hover:text-red-700 cursor-pointer flex items-center"><BsCaretRightFill style={{ fill: "url(#radial-gradient)" }}/> &nbsp; About Us</span></Link></li>
              <li><Link href="/services/physicalHealth"><span className="hover:text-red-700 cursor-pointer flex items-center"><BsCaretRightFill style={{ fill: "url(#radial-gradient)" }}/> &nbsp; Services</span></Link></li>
              <li><Link href="/doctors"><span className="hover:text-red-700 cursor-pointer flex items-center"><BsCaretRightFill style={{ fill: "url(#radial-gradient)" }}/> &nbsp; Doctors</span></Link></li>
              <li><Link href="/articles"><span className="hover:text-red-700 cursor-pointer flex items-center"><BsCaretRightFill style={{ fill: "url(#radial-gradient)" }}/> &nbsp; Articles</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-red-700 cursor-pointer flex items-center"><BsCaretRightFill style={{ fill: "url(#radial-gradient)" }}/> &nbsp; Contact</span></Link></li>
            </ul>
          </div>

          {/* Popular Links */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Popular Links</h2>
            <ul className="space-y-2">
              <li><Link href="/"><span className="hover:text-red-700 cursor-pointer flex items-center"><BsCaretRightFill style={{ fill: "url(#radial-gradient)" }}/> &nbsp; General Surgery</span></Link></li>
              <li><Link href="/"><span className="hover:text-red-700 cursor-pointer flex items-center"><BsCaretRightFill style={{ fill: "url(#radial-gradient)" }}/> &nbsp; Body Surgery</span></Link></li>
              <li><Link href="/"><span className="hover:text-red-700 cursor-pointer flex items-center"><BsCaretRightFill style={{ fill: "url(#radial-gradient)" }}/> &nbsp; Dermatology</span></Link></li>
              <li><Link href="/"><span className="hover:text-red-700 cursor-pointer flex items-center"><BsCaretRightFill style={{ fill: "url(#radial-gradient)" }}/> &nbsp; General Physician</span></Link></li>
              <li><Link href="/"><span className="hover:text-red-700 cursor-pointer flex items-center"><BsCaretRightFill style={{ fill: "url(#radial-gradient)" }}/> &nbsp; Skin Treatment</span></Link></li>
              <li><Link href="/"><span className="hover:text-red-700 cursor-pointer flex items-center"><BsCaretRightFill style={{ fill: "url(#radial-gradient)" }}/> &nbsp; Heart Surgery</span></Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <ul className="space-y-2">
              <li className="flex items-center justify-start"><MdEmail className="mr-2 text-xl" style={{ fill: "url(#radial-gradient)" }} /> info@wsclinic.org</li>
              <li className="flex items-center justify-start"><MdPhone className="mr-2 text-xl " style={{ fill: "url(#radial-gradient)" }} /> +(91) 88000-07740</li>
              <li className="flex items-center justify-start"><MdLocationOn className="mr-2 text-xl" style={{ fill: "url(#radial-gradient)" }} />WS Clinic, I-102, Kirti Nagar, Delhi, 110015</li>
            </ul>
</div>
            {/* Social Media */}
            <div className="">
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex flex-col justify-center md:justify-start">
            <SocialIcons className="p-3" />
            <Image src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647826/WSClinicLogo_mk.svg" alt="WS Clinic" width={250} height={160} className="mt-4"/>
            </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-4">
        <div className="container mx-auto px-6">
          <p>© 2024 Copyright <span className="text-red-500">WS Clinic</span>. All Rights Reserved.</p>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
