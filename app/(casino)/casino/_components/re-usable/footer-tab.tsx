"use client";

import React from "react";
import { FaBars, FaBasketballBall, FaHome, FaSearch } from "react-icons/fa";
import casinoIcon from "@/public/images/common/casino-icon.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideMenu from "./side-menu";

export default function FooterTab() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <div className="bg-[#213744] p-4 fixed bottom-0 left-0 w-full flex justify-between items-center text-white">
      {/* Home Tab */}
      <Link
        href="/casino"
        className={`flex flex-col items-center ${
          isActive("/casino") ? "text-white" : "text-gray-400"
        }`}
        aria-current={isActive("/casino") ? "page" : undefined}
      >
        <FaHome size={24} />
        <span className="text-sm mt-1">Home</span>
        {isActive("/casino") && <div className="w-full h-1 bg-blue-500 mt-1" />}
      </Link>

      {/* Casino Tab */}
      <Link
        href="/casino/casino"
        className={`flex flex-col items-center ${
          isActive("/casino/casino") ? "text-white" : "text-gray-400"
        }`}
        aria-current={isActive("/casino/casino") ? "page" : undefined}
      >
        <Image src={casinoIcon} alt="casino icon" width={25} height={25} />
        <span className="text-sm mt-1">Casino</span>
        {isActive("/casino/casino") && (
          <div className="w-full h-1 bg-blue-500 mt-1" />
        )}
      </Link>

      {/* Explore Tab */}
      <Link
        href="/casino/explore"
        className={`flex flex-col items-center ${
          isActive("/casino/explore") ? "text-white" : "text-gray-400"
        }`}
        aria-current={isActive("/casino/explore") ? "page" : undefined}
      >
        <FaSearch size={24} />
        <span className="text-sm mt-1">Explore</span>
        {isActive("/casino/explore") && (
          <div className="w-full h-1 bg-blue-500 mt-1" />
        )}
      </Link>

      {/* Sports Tab */}
      <Link
        href="/casino/sport"
        className={`flex flex-col items-center ${
          isActive("/casino/sport") ? "text-white" : "text-gray-400"
        }`}
        aria-current={isActive("/casino/sport") ? "page" : undefined}
      >
        <FaBasketballBall size={24} />
        <span className="text-sm mt-1">Sport</span>
        {isActive("/casino/sport") && (
          <div className="w-full h-1 bg-blue-500 mt-1" />
        )}
      </Link>

      {/* Menu Tab */}
      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        className="flex flex-col items-center text-gray-400 focus:outline-none"
        aria-haspopup="dialog"
        aria-expanded={menuOpen}
        aria-label="Open menu"
      >
        <FaBars size={24} />
        <span className="text-sm mt-1">Menu</span>
      </button>

      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
