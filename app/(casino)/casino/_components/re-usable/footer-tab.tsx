"use client";

import React from "react";
import { FaBars, FaBasketballBall, FaHome, FaSearch } from "react-icons/fa";
import casinoIcon from "@/public/images/common/casino-icon.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideMenu from "./side-menu";
import type { IconType } from "react-icons";
import type { StaticImageData } from "next/image";

export default function FooterTab() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);
  const [visibleTabs, setVisibleTabs] = React.useState(5);

  React.useEffect(() => {
    setIsClient(true);

    // Debug: Check tab visibility after render
    const checkTabs = () => {
      const tabs = document.querySelectorAll("[data-tab]");
      console.log("Visible tabs:", tabs.length);
      setVisibleTabs(tabs.length);
    };

    checkTabs();
    const interval = setInterval(checkTabs, 1000);

    return () => clearInterval(interval);
  }, []);

  const isActive = (href: string) => pathname === href;

  type TabItem = {
    key: string;
    label: string;
    type: "link" | "menu";
    href?: string;
    Icon?: IconType;
    imageSrc?: StaticImageData;
  };

  const tabs: TabItem[] = [
    { key: "home", label: "Home", type: "link", href: "/casino", Icon: FaHome },
    {
      key: "casino",
      label: "Casino",
      type: "link",
      href: "/casino/casino",
      imageSrc: casinoIcon,
    },
    {
      key: "explore",
      label: "Explore",
      type: "link",
      href: "/casino/explore",
      Icon: FaSearch,
    },
    {
      key: "sport",
      label: "Sport",
      type: "link",
      href: "/casino/sport",
      Icon: FaBasketballBall,
    },
    { key: "menu", label: "Menu", type: "menu", Icon: FaBars },
  ];

  if (!isClient) {
    return (
      <div className="bg-[#213744] p-3 fixed bottom-0 left-0 right-0 z-[60] h-16" />
    );
  }

  return (
    <>
      <div className="bg-[#213744] p-3 fixed bottom-0 left-0 right-0 z-[60]">
        <div className="flex justify-between items-center w-full px-2">
          {tabs.map((tab, index) => {
            if (tab.type === "link" && tab.href) {
              const active = isActive(tab.href);
              return (
                <Link
                  key={tab.key}
                  href={tab.href}
                  data-tab={tab.key}
                  data-index={index}
                  className={`flex flex-col items-center flex-1 min-w-0 ${
                    active ? "text-white" : "text-gray-400"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {tab.imageSrc ? (
                    <Image
                      src={tab.imageSrc}
                      alt={`${tab.label.toLowerCase()} icon`}
                      width={25}
                      height={25}
                      className="flex-shrink-0"
                    />
                  ) : tab.Icon ? (
                    <tab.Icon size={24} className="flex-shrink-0" />
                  ) : null}
                  <span className="text-xs mt-1 truncate w-full text-center">
                    {tab.label}
                  </span>
                  {active && (
                    <div className="w-full h-1 bg-blue-500 mt-1 max-w-[80%] mx-auto" />
                  )}
                </Link>
              );
            }

            if (tab.type === "menu") {
              const MenuIcon = tab.Icon ?? FaBars;
              return (
                <button
                  key={tab.key}
                  data-tab={tab.key}
                  data-index={4}
                  type="button"
                  onClick={() => setMenuOpen(true)}
                  className="flex flex-col items-center text-gray-400 focus:outline-none flex-1 min-w-0"
                  aria-haspopup="dialog"
                  aria-expanded={menuOpen}
                  aria-label="Open menu"
                >
                  <MenuIcon size={24} className="flex-shrink-0" />
                  <span className="text-xs mt-1 truncate w-full text-center">
                    {tab.label}
                  </span>
                </button>
              );
            }

            return null;
          })}
        </div>

        <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </>
  );
}
