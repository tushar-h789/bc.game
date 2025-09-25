"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import gameCardImage from "@/public/images/common/icon.png";
import casinoIcon from "@/public/images/menu-item/casino.png";
import sportsIcon from "@/public/images/menu-item/sports.png";
import lotteryIcon from "@/public/images/menu-item/lottery.png";
import hotGamesIcon from "@/public/images/menu-item/hot-games.png";
import newReleasesIcon from "@/public/images/menu-item/release.png";
import slotsIcon from "@/public/images/menu-item/slots.png";
import bonusBuyIcon from "@/public/images/menu-item/bonus.png";
import liveCasinoIcon from "@/public/images/menu-item/live-casino.png";
import tableGamesIcon from "@/public/images/menu-item/table-games.png";
import gameShowsIcon from "@/public/images/menu-item/game-shows.png";
import bingoIcon from "@/public/images/menu-item/bingo.png";
import themesIcon from "@/public/images/menu-item/themes.png";
import provideIcon from "@/public/images/menu-item/provide.png";

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
      { id: "Hot Games", image: hotGamesIcon, label: "Game Lobby" },
      { id: "New Releases", image: newReleasesIcon, label: "Favorites" },
      { id: "Slots", image: slotsIcon, label: "RB Originals" },
      { id: "Bonus Buy", image: bonusBuyIcon, label: "RB Exclusive" },
      { id: "Live Casino", image: liveCasinoIcon, label: "Slots" },
      { id: "Table Games", image: tableGamesIcon, label: "Game Shows" },
      { id: "Game Shows", image: gameShowsIcon, label: "Live Casino" },
      { id: "Bingo", image: bingoIcon, label: "Hot Games" },
      { id: "Themes", image: themesIcon, label: "Jackpots" },
      { id: "Provide", image: provideIcon, label: "Blackjack" },
    ],
  },
  {
    id: "sports",
    title: "Sports",
    image: sportsIcon,
    items: [
      { id: "football", image: hotGamesIcon, label: "Football (Soccer)" },
      { id: "cricket", image: newReleasesIcon, label: "Cricket" },
      { id: "tennis", image: slotsIcon, label: "Tennis" },
      { id: "basketball", image: bonusBuyIcon, label: "Basketball" },
      { id: "esports", image: liveCasinoIcon, label: "eSports" },
      {
        id: "american-football",
        image: tableGamesIcon,
        label: "American Football",
      },
      { id: "ice-hockey", image: bingoIcon, label: "Ice Hockey" },
    ],
  },
  {
    id: "lottery",
    title: "Lottery",
    image: lotteryIcon,
    items: [
      { id: "my-bets", image: hotGamesIcon, label: "My Bets" },
      { id: "all-lottery", image: newReleasesIcon, label: "All Lottery" },
      { id: "results", image: slotsIcon, label: "Results" },
      { id: "power-lottery", image: bonusBuyIcon, label: "Power Lottery" },
      { id: "rb-lottery", image: bingoIcon, label: "RB Lottery" },
      { id: "lottery-draw", image: tableGamesIcon, label: "Lottery Draw" },
    ],
  },
  {
    id: "Responsible-Gambling",
    title: "Responsible Gambling",
    image: casinoIcon,
    items: [
      { id: "Responsible-Gambling", image: hotGamesIcon, label: "Game Lobby" },
      { id: "Rellbet Smart", image: newReleasesIcon, label: "Favorites" },
      { id: "Recognise the Signs", image: slotsIcon, label: "RB Originals" },
      { id: "Responsible Gambling FAQ's", image: bonusBuyIcon, label: "RB Exclusive" },
      { id: "Self-Assessment", image: liveCasinoIcon, label: "Slots" },
      { id: "Budget Calculator", image: tableGamesIcon, label: "Game Shows" },
      
    ],
  },
  {
    id: "About-Us",
    title: "About Us",
    image: casinoIcon,
    items: [
      { id: "About-Us", image: hotGamesIcon, label: "Game Lobby" },
      { id: "License", image: newReleasesIcon, label: "Favorites" },
      { id: "AML Policy", image: slotsIcon, label: "RB Originals" },
      { id: "License", image: bonusBuyIcon, label: "RB Exclusive" },
      { id: "Terms and Conditions", image: liveCasinoIcon, label: "Slots" },
      
    ],
  },
  {
    id: "Sponsorship",
    title: "Sponsorship",
    image: casinoIcon,
    items: [
      { id: "oni Sing", image: hotGamesIcon, label: "Game Lobby" },
      { id: "Rell Team", image: newReleasesIcon, label: "Favorites" },
      { id: "Ariana Frost", image: slotsIcon, label: "RB Originals" },
      { id: "Bharat Warriors", image: bonusBuyIcon, label: "RB Exclusive" },
      { id: "India Royal Club", image: liveCasinoIcon, label: "Slots" },
      { id: "Legend Athletics", image: tableGamesIcon, label: "Game Shows" },
      { id: "Nova Football Club", image: gameShowsIcon, label: "Live Casino" },
    ],
  },
  {
    id: "Help-Center",
    title: "Help Center",
    image: casinoIcon,
    items: [
      { id: "How to Play", image: hotGamesIcon, label: "Game Lobby" },
      { id: "Deposit Guide", image: newReleasesIcon, label: "Favorites" },
      { id: "Withdraw Guide", image: slotsIcon, label: "RB Originals" },
      { id: "FAQ", image: bonusBuyIcon, label: "RB Exclusive" },
      { id: "Security", image: liveCasinoIcon, label: "Slots" },
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
              <div key={section.id} className="">
                <button
                  type="button"
                  className="w-full flex items-center justify-between mb-2 px-4 py-3 bg-[#213744]"
                  onClick={() => toggle(section.id)}
                  aria-expanded={!!isOpen}
                >
                  <div className="flex items-center gap-2">
                    <Image
                      className="w-6 h-6"
                      src={section.image}
                      alt={section.title}
                      width={20}
                      height={20}
                    />
                    <span className="font-medium">{section.title}</span>
                  </div>
                  <div>
                    <FaChevronRight
                      className={`transition-transform ${
                        isOpen ? "rotate-90" : "rotate-0"
                      }`}
                    />
                  </div>
                </button>
                {isOpen && (
                  <div className="pb-2">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className="w-full flex items-center justify-between px-6 py-2 text-sm text-gray-200 hover:bg-[#2a3f4a]"
                      >
                        <div className="flex items-center gap-2">
                          <Image
                            className="w-6 h-6"
                            src={item.image}
                            alt={item.label}
                            width={20}
                            height={20}
                          />
                          <span>{item.label}</span>
                        </div>
                        <div>
                          <FaChevronRight className="opacity-60" />
                        </div>
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
