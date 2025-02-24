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
              <li><Link href="#"><span className="hover:text-red-700 cursor-pointer flex items-center"><BsCaretRightFill style={{ fill: "url(#radial-gradient)" }}/> &nbsp; General Surgery</span></Link></li>
              <li><Link href="#"><span className="hover:text-red-700 cursor-pointer flex items-center"><BsCaretRightFill style={{ fill: "url(#radial-gradient)" }}/> &nbsp; Body Surgery</span></Link></li>
              <li><Link href="#"><span className="hover:text-red-700 cursor-pointer flex items-center"><BsCaretRightFill style={{ fill: "url(#radial-gradient)" }}/> &nbsp; Dermatology</span></Link></li>
              <li><Link href="#"><span className="hover:text-red-700 cursor-pointer flex items-center"><BsCaretRightFill style={{ fill: "url(#radial-gradient)" }}/> &nbsp; General Physician</span></Link></li>
              <li><Link href="#"><span className="hover:text-red-700 cursor-pointer flex items-center"><BsCaretRightFill style={{ fill: "url(#radial-gradient)" }}/> &nbsp; Skin Treatment</span></Link></li>
              <li><Link href="#"><span className="hover:text-red-700 cursor-pointer flex items-center"><BsCaretRightFill style={{ fill: "url(#radial-gradient)" }}/> &nbsp; Heart Surgery</span></Link></li>
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
            <Image src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODkuMyA0Mi4zNCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZm9udC1mYW1pbHk6IEdvdWR5VHJhamFuLU1lZGl1bSwgR291ZHlUcmFqYW4tTWVkaXVtOwogICAgICAgIGZvbnQtc2l6ZTogMjUuNzRweDsKICAgICAgICBmb250LXdlaWdodDogNTAwOwogICAgICAgIHN0cm9rZTogI2ZmZjsKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtMSwgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6ICNjYzIyMjk7CiAgICAgICAgZm9udC1mYW1pbHk6IENvbWljU2Fuc01TLCAnQ29taWMgU2FucyBNUyc7CiAgICAgICAgZm9udC1zaXplOiAxMC42MnB4OwogICAgICB9CgogICAgICAuY2xzLTQgewogICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAxZW07CiAgICAgIH0KCiAgICAgIC5jbHMtNSB7CiAgICAgICAgZmlsbDogI2NkMzMzMzsKICAgICAgfQoKICAgICAgLmNscy01LCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTYgewogICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAyZW07CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgICA8dGV4dCBjbGFzcz0iY2xzLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ5LjkgMjIuNikiPjx0c3BhbiB4PSIwIiB5PSIwIj5XUyA8L3RzcGFuPjx0c3BhbiBjbGFzcz0iY2xzLTQiIHg9IjQ4LjEzIiB5PSIwIj5DPC90c3Bhbj48dHNwYW4geD0iNjYuNDQiIHk9IjAiPkxJTjwvdHNwYW4+PHRzcGFuIGNsYXNzPSJjbHMtNiIgeD0iMTExLjM1IiB5PSIwIj5JPC90c3Bhbj48dHNwYW4geD0iMTIwLjM0IiB5PSIwIj5DPC90c3Bhbj48L3RleHQ+CiAgICA8dGV4dCBjbGFzcz0iY2xzLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxLjUgMzYuNzIpIj48dHNwYW4geD0iMCIgeT0iMCI+d2l0aCB5b3UgYXQgZXZlcnkgc3RlcC4uLjwvdHNwYW4+PC90ZXh0PgogICAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMy43OSw2LjY3aDMxLjIxdjI0LjYzczEuODgsMi4xMSwzLjU4LDBjMCwwLC4xNC0yNy4yNC0uMDYtMjcuODUtLjE4LS41Ni0xLjU4LS40Ni01LjA2LS41LTYuNDktLjA3LTI4LjgyLS4xMi0yOS4xNi0uMDVDMy44MSwzLDAsMi40OSwwLDYuMTNjLjE2LDEuMDQsMCwzMy45MSwwLDMzLjkxLDAsMC0uMzEsMi41OSwyLjc2LDIuMjdzMjYuNzguMDMsMjYuNzguMDNjMCwwLDEuODgtMi4xMy0uMTctMy43NWwtMjUuNDItLjA4LS4xNy0zMS44NFoiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTE5LjY1LDE1LjQxYy4wOS4xLjI1LjExLjM1LjAyLjU5LS41NSwyLjU0LTIuMywzLjgzLTIuNTEsMS41NC0uMjQsNy4wOC0uMTYsNi43NCw2LjI0LDAsMCwuMTcsMi40Mi0zLjIzLDYuMDYsMCwwLS4wMi4wMi0uMDMuMDItLjY3LjU0LTQuNCwzLjUtNS44Myw1LjIsMCwwLS44NiwxLjA2LTEuMzUsMS44Mi0uMDkuMTUtLjMxLjE0LS40MSwwLS40OS0uNzQtMS44NC0yLjYxLTQuMTQtNC40NCwwLDAtNi42Mi01LjAyLTYuNDItOS4xOC4yLTQuMTUsMi42NC01LjkxLDYuNTMtNS43OSwwLDAsMCwwLC4wMiwwLC4xLDAsMS43LjE3LDMuOTQsMi41NloiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIyLjksMTkuNzF2My40M2gtMy44NHYzLjI0aDMuODRjMCwuODcsMCwxLjc0LDAsMi42Mi0uMTUuMTQtLjMuMjgtLjQ0LjQyLjA0LS45Mi4wOC0xLjg1LjEyLTIuNzdsLTMuNzUuMDN2LTMuODNsMy43NS4wNXYtMy41MWgzLjcydjMuNzNjLjkzLS4wMiwxLjg1LS4wNSwyLjc4LS4wNy0uMDguMTItLjE3LjI1LS4yNS4zN2gtMi44N2wuMDYtMy42Ny0zLjEzLS4wM1oiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIzLjEsMTkuODloMi42MXYzLjY3Yy45OS4wMiwxLjk5LjA0LDIuOTguMDUtLjMuNDUtLjcuOTgtMS4yNSwxLjUtLjM3LjM2LS43NC42Ni0xLjA3Ljg5LS4yMSwwLS40MiwwLS42MywwLDAsLjE4LDAsLjM1LS4wMS41My0uODYuNzQtMS43MSwxLjQ4LTIuNTcsMi4yMi0uMDItLjkxLS4wNC0xLjgzLS4wNi0yLjc0bC0zLjg5LS4wOHYtMi40YzEuMzEsMCwyLjYxLjAyLDMuOTIuMDMiLz4KICA8L2c+Cjwvc3ZnPg==" alt="WS Clinic" width={250} height={160} className="mt-4"/>
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
