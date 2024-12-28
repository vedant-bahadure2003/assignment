"use client"
import { FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link'
import { useRef } from "react";



function Navbar() {
  const navRef = useRef();
  

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  

  return (
    
    <div className="w-full h-16 shadow-md sticky top-0 left-0 right-0 z-50 bg-white ">
      <header className="flex items-center justify-between h-full w-[90%] sm:w-[80%] text-black mx-auto">
        <Link href="/dashboard">Dashboard</Link>
        <nav id="navref" className="flex items-center z-50">
          <Link className="mx-4 text-black hover:text-gray-600  font-semibold text-lg" href="/">
            Home
          </Link>
          <Link className=" mx-4 text-black hover:text-gray-600  font-semibold text-lg" href="/about">
            About
          </Link>
          <Link className=" mx-4 text-black hover:text-gray-600 text-lg font-semibold " href="/tours">
            Tours
          </Link>
        

          <button className="nav-btn nav-close-btn md:hidden" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn md:hidden" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
