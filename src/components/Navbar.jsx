"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { IoMdHome, IoMdInformationCircle, IoMdSchool } from "react-icons/io";
import { FaBlog, FaUniversity, FaPhotoVideo, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Menu items data with icons
  const menuItems = [
    {
      label: "Home",
      href: "/",
      icon: <IoMdHome className="text-xl text-black" />,
    },
    {
      label: "About",
      href: "#about",
      icon: <IoMdInformationCircle className="text-xl text-black" />,
    },
    {
      label: "MBBS in Uzbekistan",
      href: "/mbbsinUzbekistan",
      icon: <IoMdSchool className="text-xl text-black" />,
    },
    {
      label: "Universities",
      href: "#universities",
      icon: <FaUniversity className="text-xl text-black" />,
    },
    {
      label: "Blogs",
      href: "#blogs",
      icon: <FaBlog className="text-xl text-black" />,
    },
    {
      label: "Gallery",
      href: "#gallery",
      icon: <FaPhotoVideo className="text-xl text-black" />,
    },
    {
      label: "Contact Us",
      href: "#contact",
      icon: <FaPhoneAlt className="text-xl text-black" />,
    },
  ];

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-[#00000080] backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="w-[90%] md:w-[80%] mx-auto flex justify-between items-center py-4 md:py-6">
        {/* Logo */}
        <h1 className="text-[16px] md:text-3xl font-bold text-white">
          Uzbekistan <br className="md:hidden" /> Medi
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex flex-wrap gap-4 md:gap-6 mt-2 lg:mt-0">
          <Link href="/">
            <h1 className="text-base md:text-lg text-white hover:text-[#14e1eb] cursor-pointer">
              Home
            </h1>
          </Link>
          <Link href="#">
            <h1 className="text-base md:text-lg text-white hover:text-[#14e1eb] cursor-pointer">
              About
            </h1>
          </Link>
          <Link href="/mbbsinUzbekistan">
            <h1 className="text-base md:text-lg text-white hover:text-[#14e1eb] cursor-pointer">
              MBBS in Uzbekistan
            </h1>
          </Link>
          <Link href="#">
            <h1 className="text-base md:text-lg text-white hover:text-[#14e1eb] cursor-pointer">
              Universities
            </h1>
          </Link>
          <Link href="#">
            <h1 className="text-base md:text-lg text-white hover:text-[#14e1eb] cursor-pointer">
              Blogs
            </h1>
          </Link>
          <Link href="#">
            <h1 className="text-base md:text-lg text-white hover:text-[#14e1eb] cursor-pointer">
              Gallery
            </h1>
          </Link>
          <Link href="#">
            <h1 className="text-base md:text-lg text-white hover:text-[#14e1eb] cursor-pointer">
              Contact Us
            </h1>
          </Link>
        </div>

        {/* Call-to-Action & Mobile Menu Icon */}
        <div className="flex items-center gap-2 xl:hidden">
          <button className="inline-block text-base py-1 px-3 bg-[#0da9b0] text-white rounded-md hover:bg-teal-600 transition">
            Apply Now
          </button>
          <IoMdMenu
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 left-0 w-[69%] h-screen bg-gradient-to-r from-[#0da9b0] to-cyan-300 z-40 transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-700 ease-in-out xl:hidden`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center px-4 py-5 border-b border-white">
            <h2 className="text-xl font-bold">Uzbekistan Medi</h2>
            <IoMdClose
              className="text-2xl text-black cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col gap-8 mt-6 px-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-4 text-lg font-semibold text-white hover:text-black transition duration-200 ease-in-out"
                onClick={toggleMobileMenu} // Close menu on link click
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="mt-[300px] py-4 px-4 pb-4 border-t border-white">
            <button
              className="flex items-center gap-2 text-lg font-semibold text-white hover:text-black transition duration-200 ease-in-out w-full"
              onClick={() => alert("Logged out successfully!")} // Replace with your logout logic
            >
              <FiLogOut className="text-2xl text-black" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
