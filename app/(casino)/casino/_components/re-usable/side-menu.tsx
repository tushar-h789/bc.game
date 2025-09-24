"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import gameCardImage from "@/public/images/common/icon.png";
import casinoIcon from "@/public/images/menu-item/casino.png";

type MenuSection = {
  id: string;
  image: string | StaticImageData;
  title: string;
  items: { id: string; image: string | StaticImageData; label: string }[];
};

const SECTIONS: MenuSection[] = [
  {
    id: "casino",
    title: "Casino",
    image: casinoIcon,
    items: [
      { id: "game-lobby", image: gameCardImage, label: "Game Lobby" },
      { id: "favorites", image: gameCardImage, label: "Favorites" },
      { id: "rb-originals", image: gameCardImage, label: "RB Originals" },
      { id: "rb-exclusive", image: gameCardImage, label: "RB Exclusive" },
      { id: "slots", image: gameCardImage, label: "Slots" },
      { id: "game-shows", image: gameCardImage, label: "Game Shows" },
      { id: "live-casino", image: gameCardImage, label: "Live Casino" },
      { id: "hot-games", image: gameCardImage, label: "Hot Games" },
      { id: "jackpots", image: gameCardImage, label: "Jackpots" },
      { id: "blackjack", image: gameCardImage, label: "Blackjack" },
      { id: "new-release", image: gameCardImage, label: "New Release" },
    ],
  },
  {
    id: "sports",
    title: "Sports",
    image: gameCardImage,
    items: [
      { id: "football", image: gameCardImage, label: "Football (Soccer)" },
      { id: "cricket", image: gameCardImage, label: "Cricket" },
      { id: "tennis", image: gameCardImage, label: "Tennis" },
      { id: "basketball", image: gameCardImage, label: "Basketball" },
      { id: "esports", image: gameCardImage, label: "eSports" },
      {
        id: "american-football",
        image: gameCardImage,
        label: "American Football",
      },
      { id: "ice-hockey", image: gameCardImage, label: "Ice Hockey" },
    ],
  },
  {
    id: "lottery",
    title: "Lottery",
    image: gameCardImage,
    items: [
      { id: "my-bets", image: gameCardImage, label: "My Bets" },
      { id: "all-lottery", image: gameCardImage, label: "All Lottery" },
      { id: "results", image: gameCardImage, label: "Results" },
      { id: "power-lottery", image: gameCardImage, label: "Power Lottery" },
      { id: "rb-lottery", image: gameCardImage, label: "RB Lottery" },
      { id: "lottery-draw", image: gameCardImage, label: "Lottery Draw" },
    ],
  },
];

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function SideMenu({ open, onClose }: SideMenuProps) {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});

  React.useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  const toggle = (sectionId: string) => {
    setExpanded((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  if (!open) {
    return null;
  }

  return (
    <div
      aria-hidden={!open}
      className={"fixed inset-0 z-50 pointer-events-auto"}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-200 ${
          open ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 h-full w-[86%] max-w-[380px] bg-[#1e2f3a] text-white shadow-xl transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="h-full overflow-y-auto">
          {SECTIONS.map((section) => {
            const isOpen = expanded[section.id];
            return (
              <div key={section.id} className="border-t border-[#2a3f4a]">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-[#264050]"
                  onClick={() => toggle(section.id)}
                  aria-expanded={!!isOpen}
                >
                  <Image
                    className="w-6 h-6"
                    src={section.image}
                    alt={section.title}
                    width={20}
                    height={20}
                  />
                  <span className="font-medium">{section.title}</span>
                  <FaChevronRight
                    className={`transition-transform ${
                      isOpen ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="pb-2">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className="w-full flex items-center justify-between px-6 py-2 text-sm text-gray-200 hover:bg-[#2a3f4a]"
                      >
                        <Image
                          className="w-6 h-6"
                          src={item.image}
                          alt={item.label}
                          width={20}
                          height={20}
                        />
                        <span>{item.label}</span>
                        <FaChevronRight className="opacity-60" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
