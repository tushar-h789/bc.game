"use client";

import React, { useState } from "react";
import logo from "@/public/images/common/logo.png";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-dark-gray p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src={logo} alt="logo" width={100} height={100} />
          <span className="text-white text-lg ml-2 font-semibold">Rellbet</span>
        </div>

        {/* Desktop Navigation Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-transparent text-white py-2 px-4 rounded border border-white">
            Log in
          </button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded">
            Registration
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button className="text-white text-xl" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-gray p-4 flex flex-col space-y-4">
          <button className="bg-transparent text-white py-2 px-4 rounded border border-white">
            Log in
          </button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded">
            Registration
          </button>
        </div>
      )}
    </nav>
  );
}
