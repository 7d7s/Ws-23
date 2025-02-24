"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/buttons/bookAppointment";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import SocialIcons from "@/components/socialIcons/index";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const pardaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (pardaRef.current) {
        if (window.scrollY > 100) {
          pardaRef.current.classList.add("h-100");
        } else {
          pardaRef.current.classList.remove("h-100");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full bg-gray-transparent text-white shadow-lg z-50">
      <svg width="0" height="0">
        <defs>
          <radialGradient
            id="radial-gradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="0%"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#970000" offset="0%" />
            <stop stopColor="#400707" offset="100%" />
          </radialGradient>
        </defs>
      </svg>

      {/* Top Bar */}
      <div className="z-999-parda" ref={pardaRef}></div>
      <div className="hidden md:flex justify-between items-center py-2 px-10 border-b border-gray-100">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODkuMyA0Mi4zNCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZm9udC1mYW1pbHk6IEdvdWR5VHJhamFuLU1lZGl1bSwgR291ZHlUcmFqYW4tTWVkaXVtOwogICAgICAgIGZvbnQtc2l6ZTogMjUuNzRweDsKICAgICAgICBmb250LXdlaWdodDogNTAwOwogICAgICAgIHN0cm9rZTogI2ZmZjsKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtMSwgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6ICNjYzIyMjk7CiAgICAgICAgZm9udC1mYW1pbHk6IENvbWljU2Fuc01TLCAnQ29taWMgU2FucyBNUyc7CiAgICAgICAgZm9udC1zaXplOiAxMC42MnB4OwogICAgICB9CgogICAgICAuY2xzLTQgewogICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAxZW07CiAgICAgIH0KCiAgICAgIC5jbHMtNSB7CiAgICAgICAgZmlsbDogI2NkMzMzMzsKICAgICAgfQoKICAgICAgLmNscy01LCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTYgewogICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAyZW07CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgICA8dGV4dCBjbGFzcz0iY2xzLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ5LjkgMjIuNikiPjx0c3BhbiB4PSIwIiB5PSIwIj5XUyA8L3RzcGFuPjx0c3BhbiBjbGFzcz0iY2xzLTQiIHg9IjQ4LjEzIiB5PSIwIj5DPC90c3Bhbj48dHNwYW4geD0iNjYuNDQiIHk9IjAiPkxJTjwvdHNwYW4+PHRzcGFuIGNsYXNzPSJjbHMtNiIgeD0iMTExLjM1IiB5PSIwIj5JPC90c3Bhbj48dHNwYW4geD0iMTIwLjM0IiB5PSIwIj5DPC90c3Bhbj48L3RleHQ+CiAgICA8dGV4dCBjbGFzcz0iY2xzLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxLjUgMzYuNzIpIj48dHNwYW4geD0iMCIgeT0iMCI+d2l0aCB5b3UgYXQgZXZlcnkgc3RlcC4uLjwvdHNwYW4+PC90ZXh0PgogICAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMy43OSw2LjY3aDMxLjIxdjI0LjYzczEuODgsMi4xMSwzLjU4LDBjMCwwLC4xNC0yNy4yNC0uMDYtMjcuODUtLjE4LS41Ni0xLjU4LS40Ni01LjA2LS41LTYuNDktLjA3LTI4LjgyLS4xMi0yOS4xNi0uMDVDMy44MSwzLDAsMi40OSwwLDYuMTNjLjE2LDEuMDQsMCwzMy45MSwwLDMzLjkxLDAsMC0uMzEsMi41OSwyLjc2LDIuMjdzMjYuNzguMDMsMjYuNzguMDNjMCwwLDEuODgtMi4xMy0uMTctMy43NWwtMjUuNDItLjA4LS4xNy0zMS44NFoiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTE5LjY1LDE1LjQxYy4wOS4xLjI1LjExLjM1LjAyLjU5LS41NSwyLjU0LTIuMywzLjgzLTIuNTEsMS41NC0uMjQsNy4wOC0uMTYsNi43NCw2LjI0LDAsMCwuMTcsMi40Mi0zLjIzLDYuMDYsMCwwLS4wMi4wMi0uMDMuMDItLjY3LjU0LTQuNCwzLjUtNS44Myw1LjIsMCwwLS44NiwxLjA2LTEuMzUsMS44Mi0uMDkuMTUtLjMxLjE0LS40MSwwLS40OS0uNzQtMS44NC0yLjYxLTQuMTQtNC40NCwwLDAtNi42Mi01LjAyLTYuNDItOS4xOC4yLTQuMTUsMi42NC01LjkxLDYuNTMtNS43OSwwLDAsMCwwLC4wMiwwLC4xLDAsMS43LjE3LDMuOTQsMi41NloiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIyLjksMTkuNzF2My40M2gtMy44NHYzLjI0aDMuODRjMCwuODcsMCwxLjc0LDAsMi42Mi0uMTUuMTQtLjMuMjgtLjQ0LjQyLjA0LS45Mi4wOC0xLjg1LjEyLTIuNzdsLTMuNzUuMDN2LTMuODNsMy43NS4wNXYtMy41MWgzLjcydjMuNzNjLjkzLS4wMiwxLjg1LS4wNSwyLjc4LS4wNy0uMDguMTItLjE3LjI1LS4yNS4zN2gtMi44N2wuMDYtMy42Ny0zLjEzLS4wM1oiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIzLjEsMTkuODloMi42MXYzLjY3Yy45OS4wMiwxLjk5LjA0LDIuOTguMDUtLjMuNDUtLjcuOTgtMS4yNSwxLjUtLjM3LjM2LS43NC42Ni0xLjA3Ljg5LS4yMSwwLS40MiwwLS42MywwLDAsLjE4LDAsLjM1LS4wMS41My0uODYuNzQtMS43MSwxLjQ4LTIuNTcsMi4yMi0uMDItLjkxLS4wNC0xLjgzLS4wNi0yLjc0bC0zLjg5LS4wOHYtMi40YzEuMzEsMCwyLjYxLjAyLDMuOTIuMDMiLz4KICA8L2c+Cjwvc3ZnPg=="
              alt="WS Clinic"
              width={150}
              height={80}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex space-x-6">
          <a href="tel:+918800007740" className="flex items-center space-x-1">
            <FaPhoneAlt style={{ fill: "url(#radial-gradient)" }} />
            <span>Call (+91) 88000-07740</span>
          </a>
          <span className="items-center space-x-1 hidden lg:flex">
            <FaMapMarkerAlt style={{ fill: "url(#radial-gradient)" }} />
            <span>WS Clinic, I-102, Kirti Nagar, Delhi, 110015</span>
          </span>
          <a
            href="mailto:info@wsclinic.org"
            className="flex items-center space-x-1"
          >
            <FaEnvelope style={{ fill: "url(#radial-gradient)" }} />
            <span>info@wsclinic.org</span>
          </a>
        </div>
        <div className="flex space-x-3">
          <SocialIcons className="p-2 text-sm" />
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center py-3 px-10 mo-menu-shadow">
        {/* Mobile Menu Button */}
        <Image
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODkuMyA0Mi4zNCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZm9udC1mYW1pbHk6IEdvdWR5VHJhamFuLU1lZGl1bSwgR291ZHlUcmFqYW4tTWVkaXVtOwogICAgICAgIGZvbnQtc2l6ZTogMjUuNzRweDsKICAgICAgICBmb250LXdlaWdodDogNTAwOwogICAgICAgIHN0cm9rZTogI2ZmZjsKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtMSwgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6ICNjYzIyMjk7CiAgICAgICAgZm9udC1mYW1pbHk6IENvbWljU2Fuc01TLCAnQ29taWMgU2FucyBNUyc7CiAgICAgICAgZm9udC1zaXplOiAxMC42MnB4OwogICAgICB9CgogICAgICAuY2xzLTQgewogICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAxZW07CiAgICAgIH0KCiAgICAgIC5jbHMtNSB7CiAgICAgICAgZmlsbDogI2NkMzMzMzsKICAgICAgfQoKICAgICAgLmNscy01LCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTYgewogICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAyZW07CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgICA8dGV4dCBjbGFzcz0iY2xzLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ5LjkgMjIuNikiPjx0c3BhbiB4PSIwIiB5PSIwIj5XUyA8L3RzcGFuPjx0c3BhbiBjbGFzcz0iY2xzLTQiIHg9IjQ4LjEzIiB5PSIwIj5DPC90c3Bhbj48dHNwYW4geD0iNjYuNDQiIHk9IjAiPkxJTjwvdHNwYW4+PHRzcGFuIGNsYXNzPSJjbHMtNiIgeD0iMTExLjM1IiB5PSIwIj5JPC90c3Bhbj48dHNwYW4geD0iMTIwLjM0IiB5PSIwIj5DPC90c3Bhbj48L3RleHQ+CiAgICA8dGV4dCBjbGFzcz0iY2xzLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxLjUgMzYuNzIpIj48dHNwYW4geD0iMCIgeT0iMCI+d2l0aCB5b3UgYXQgZXZlcnkgc3RlcC4uLjwvdHNwYW4+PC90ZXh0PgogICAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMy43OSw2LjY3aDMxLjIxdjI0LjYzczEuODgsMi4xMSwzLjU4LDBjMCwwLC4xNC0yNy4yNC0uMDYtMjcuODUtLjE4LS41Ni0xLjU4LS40Ni01LjA2LS41LTYuNDktLjA3LTI4LjgyLS4xMi0yOS4xNi0uMDVDMy44MSwzLDAsMi40OSwwLDYuMTNjLjE2LDEuMDQsMCwzMy45MSwwLDMzLjkxLDAsMC0uMzEsMi41OSwyLjc2LDIuMjdzMjYuNzguMDMsMjYuNzguMDNjMCwwLDEuODgtMi4xMy0uMTctMy43NWwtMjUuNDItLjA4LS4xNy0zMS44NFoiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTE5LjY1LDE1LjQxYy4wOS4xLjI1LjExLjM1LjAyLjU5LS41NSwyLjU0LTIuMywzLjgzLTIuNTEsMS41NC0uMjQsNy4wOC0uMTYsNi43NCw2LjI0LDAsMCwuMTcsMi40Mi0zLjIzLDYuMDYsMCwwLS4wMi4wMi0uMDMuMDItLjY3LjU0LTQuNCwzLjUtNS44Myw1LjIsMCwwLS44NiwxLjA2LTEuMzUsMS44Mi0uMDkuMTUtLjMxLjE0LS40MSwwLS40OS0uNzQtMS44NC0yLjYxLTQuMTQtNC40NCwwLDAtNi42Mi01LjAyLTYuNDItOS4xOC4yLTQuMTUsMi42NC01LjkxLDYuNTMtNS43OSwwLDAsMCwwLC4wMiwwLC4xLDAsMS43LjE3LDMuOTQsMi41NloiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIyLjksMTkuNzF2My40M2gtMy44NHYzLjI0aDMuODRjMCwuODcsMCwxLjc0LDAsMi42Mi0uMTUuMTQtLjMuMjgtLjQ0LjQyLjA0LS45Mi4wOC0xLjg1LjEyLTIuNzdsLTMuNzUuMDN2LTMuODNsMy43NS4wNXYtMy41MWgzLjcydjMuNzNjLjkzLS4wMiwxLjg1LS4wNSwyLjc4LS4wNy0uMDguMTItLjE3LjI1LS4yNS4zN2gtMi44N2wuMDYtMy42Ny0zLjEzLS4wM1oiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIzLjEsMTkuODloMi42MXYzLjY3Yy45OS4wMiwxLjk5LjA0LDIuOTguMDUtLjMuNDUtLjcuOTgtMS4yNSwxLjUtLjM3LjM2LS43NC42Ni0xLjA3Ljg5LS4yMSwwLS40MiwwLS42MywwLDAsLjE4LDAsLjM1LS4wMS41My0uODYuNzQtMS43MSwxLjQ4LTIuNTcsMi4yMi0uMDItLjkxLS4wNC0xLjgzLS4wNi0yLjc0bC0zLjg5LS4wOHYtMi40YzEuMzEsMCwyLjYxLjAyLDMuOTIuMDMiLz4KICA8L2c+Cjwvc3ZnPg=="
          alt="WS Clinic"
          width={120}
          height={60}
          className="md:hidden"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/"
              className="relative before:absolute before:top-9 before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-gradient-to-r before:from-[#970000] before:via-[#700404] before:to-[#400707] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="relative before:absolute before:top-9 before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-gradient-to-r before:from-[#970000] before:via-[#700404] before:to-[#400707] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
            >
              About Us
            </Link>
          </li>
          <li className="relative group">
            <button className="relative before:absolute before:top-9 before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-gradient-to-r before:from-[#970000] before:via-[#700404] before:to-[#400707] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full">
              Services ▾
            </button>
            <ul className="absolute hidden group-hover:block bg-gray-800 text-white py-2 w-40 mt-1 rounded-md shadow-lg">
              <li>
                <Link
                  href="/services/physicalHealth"
                  className="block px-4 py-2 hover:bg-red-900"
                >
                  Physical Health
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mentalHealth"
                  className="block px-4 py-2 hover:bg-red-900"
                >
                  Mental Health
                </Link>
              </li>
              <li>
                <Link
                  href="/services/kidsCare"
                  className="block px-4 py-2 hover:bg-red-900"
                >
                  Kids Care
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/doctors"
              className="relative before:absolute before:top-9 before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-gradient-to-r before:from-[#970000] before:via-[#700404] before:to-[#400707] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
            >
              Our Doctors
            </Link>
          </li>
          <li>
            <Link
              href="/articles"
              className="relative before:absolute before:top-9 before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-gradient-to-r before:from-[#970000] before:via-[#700404] before:to-[#400707] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="relative before:absolute before:top-9 before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-gradient-to-r before:from-[#970000] before:via-[#700404] before:to-[#400707] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(true)}
        >
          <FaBars />
        </button>

        <Button
          text="Book An Appointment"
          link="/contact"
          className="py-3 px-7 hidden md:flex"
        />
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-gray-900 shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <Image
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODkuMyA0Mi4zNCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZm9udC1mYW1pbHk6IEdvdWR5VHJhamFuLU1lZGl1bSwgR291ZHlUcmFqYW4tTWVkaXVtOwogICAgICAgIGZvbnQtc2l6ZTogMjUuNzRweDsKICAgICAgICBmb250LXdlaWdodDogNTAwOwogICAgICAgIHN0cm9rZTogI2ZmZjsKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtMSwgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6ICNjYzIyMjk7CiAgICAgICAgZm9udC1mYW1pbHk6IENvbWljU2Fuc01TLCAnQ29taWMgU2FucyBNUyc7CiAgICAgICAgZm9udC1zaXplOiAxMC42MnB4OwogICAgICB9CgogICAgICAuY2xzLTQgewogICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAxZW07CiAgICAgIH0KCiAgICAgIC5jbHMtNSB7CiAgICAgICAgZmlsbDogI2NkMzMzMzsKICAgICAgfQoKICAgICAgLmNscy01LCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTYgewogICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAyZW07CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgICA8dGV4dCBjbGFzcz0iY2xzLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ5LjkgMjIuNikiPjx0c3BhbiB4PSIwIiB5PSIwIj5XUyA8L3RzcGFuPjx0c3BhbiBjbGFzcz0iY2xzLTQiIHg9IjQ4LjEzIiB5PSIwIj5DPC90c3Bhbj48dHNwYW4geD0iNjYuNDQiIHk9IjAiPkxJTjwvdHNwYW4+PHRzcGFuIGNsYXNzPSJjbHMtNiIgeD0iMTExLjM1IiB5PSIwIj5JPC90c3Bhbj48dHNwYW4geD0iMTIwLjM0IiB5PSIwIj5DPC90c3Bhbj48L3RleHQ+CiAgICA8dGV4dCBjbGFzcz0iY2xzLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxLjUgMzYuNzIpIj48dHNwYW4geD0iMCIgeT0iMCI+d2l0aCB5b3UgYXQgZXZlcnkgc3RlcC4uLjwvdHNwYW4+PC90ZXh0PgogICAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMy43OSw2LjY3aDMxLjIxdjI0LjYzczEuODgsMi4xMSwzLjU4LDBjMCwwLC4xNC0yNy4yNC0uMDYtMjcuODUtLjE4LS41Ni0xLjU4LS40Ni01LjA2LS41LTYuNDktLjA3LTI4LjgyLS4xMi0yOS4xNi0uMDVDMy44MSwzLDAsMi40OSwwLDYuMTNjLjE2LDEuMDQsMCwzMy45MSwwLDMzLjkxLDAsMC0uMzEsMi41OSwyLjc2LDIuMjdzMjYuNzguMDMsMjYuNzguMDNjMCwwLDEuODgtMi4xMy0uMTctMy43NWwtMjUuNDItLjA4LS4xNy0zMS44NFoiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTE5LjY1LDE1LjQxYy4wOS4xLjI1LjExLjM1LjAyLjU5LS41NSwyLjU0LTIuMywzLjgzLTIuNTEsMS41NC0uMjQsNy4wOC0uMTYsNi43NCw2LjI0LDAsMCwuMTcsMi40Mi0zLjIzLDYuMDYsMCwwLS4wMi4wMi0uMDMuMDItLjY3LjU0LTQuNCwzLjUtNS44Myw1LjIsMCwwLS44NiwxLjA2LTEuMzUsMS44Mi0uMDkuMTUtLjMxLjE0LS40MSwwLS40OS0uNzQtMS44NC0yLjYxLTQuMTQtNC40NCwwLDAtNi42Mi01LjAyLTYuNDItOS4xOC4yLTQuMTUsMi42NC01LjkxLDYuNTMtNS43OSwwLDAsMCwwLC4wMiwwLC4xLDAsMS43LjE3LDMuOTQsMi41NloiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIyLjksMTkuNzF2My40M2gtMy44NHYzLjI0aDMuODRjMCwuODcsMCwxLjc0LDAsMi42Mi0uMTUuMTQtLjMuMjgtLjQ0LjQyLjA0LS45Mi4wOC0xLjg1LjEyLTIuNzdsLTMuNzUuMDN2LTMuODNsMy43NS4wNXYtMy41MWgzLjcydjMuNzNjLjkzLS4wMiwxLjg1LS4wNSwyLjc4LS4wNy0uMDguMTItLjE3LjI1LS4yNS4zN2gtMi44N2wuMDYtMy42Ny0zLjEzLS4wM1oiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIzLjEsMTkuODloMi42MXYzLjY3Yy45OS4wMiwxLjk5LjA0LDIuOTguMDUtLjMuNDUtLjcuOTgtMS4yNSwxLjUtLjM3LjM2LS43NC42Ni0xLjA3Ljg5LS4yMSwwLS40MiwwLS42MywwLDAsLjE4LDAsLjM1LS4wMS41My0uODYuNzQtMS43MSwxLjQ4LTIuNTcsMi4yMi0uMDItLjkxLS4wNC0xLjgzLS4wNi0yLjc0bC0zLjg5LS4wOHYtMi40YzEuMzEsMCwyLjYxLjAyLDMuOTIuMDMiLz4KICA8L2c+Cjwvc3ZnPg=="
            alt="WS Clinic"
            width={120}
            height={60}
          />
          <button
            className="text-white text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Menu Links */}
        <ul className="flex flex-col space-y-4 mt-4 px-6">
          <li>
            <Link href="/" className="block text-white hover:text-red-800" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="block text-white hover:text-red-800" onClick={closeMenu}
            >
              About Us
            </Link>
          </li>
          <li className="relative group">
            <button className="relative before:absolute before:top-9 before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-gradient-to-r before:from-[#970000] before:via-[#700404] before:to-[#400707] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full">
              Services ▾
            </button>
            <ul className="absolute hidden group-hover:block bg-gray-800 text-white py-2 w-40 mt-1 rounded-md shadow-lg">
              <li>
                <Link
                  href="/services/physicalHealth"
                  className="block px-4 py-2 hover:bg-gray-700" onClick={closeMenu}
                >
                  Physical Health
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mentalHealth"
                  className="block px-4 py-2 hover:bg-gray-700" onClick={closeMenu}
                >
                  Mental Health
                </Link>
              </li>
              <li>
                <Link
                  href="/services/kidsCare"
                  className="block px-4 py-2 hover:bg-gray-700" onClick={closeMenu}
                >
                  Kids Care
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/doctors"
              className="block text-white hover:text-red-800" onClick={closeMenu}
            >
              Our Doctors
            </Link>
          </li>
          <li>
            <Link
              href="/articles"
              className="block text-white hover:text-red-800" onClick={closeMenu}
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block text-white hover:text-red-800" onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Contact Info */}
        <div className="mt-6 px-6 space-y-4 text-white">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-red-900" />
            <span>Call (+91) 88000-07740</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-red-900" />
            <span>WS Clinic, I-102, Kirti Nagar, Delhi, 110015</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-red-900" />
            <span>info@wsclinic.org</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-3 mt-6 px-6">
          <SocialIcons className="p-2 text-sm" />
        </div>
      </div>
    </header>
  );
};

export default Header;
