"use client";

import React from "react";
import { FaChevronRight } from "react-icons/fa";

type MenuSection = {
  id: string;
  title: string;
  items: { id: string; label: string }[];
};

const SECTIONS: MenuSection[] = [
  {
    id: "casino",
    title: "Casino",
    items: [
      { id: "game-lobby", label: "Game Lobby" },
      { id: "favorites", label: "Favorites" },
      { id: "rb-originals", label: "RB Originals" },
      { id: "rb-exclusive", label: "RB Exclusive" },
      { id: "slots", label: "Slots" },
      { id: "game-shows", label: "Game Shows" },
      { id: "live-casino", label: "Live Casino" },
      { id: "hot-games", label: "Hot Games" },
      { id: "jackpots", label: "Jackpots" },
      { id: "blackjack", label: "Blackjack" },
      { id: "new-release", label: "New Release" },
    ],
  },
  {
    id: "sports",
    title: "Sports",
    items: [
      { id: "football", label: "Football (Soccer)" },
      { id: "cricket", label: "Cricket" },
      { id: "tennis", label: "Tennis" },
      { id: "basketball", label: "Basketball" },
      { id: "esports", label: "eSports" },
      { id: "american-football", label: "American Football" },
      { id: "ice-hockey", label: "Ice Hockey" },
    ],
  },
  {
    id: "lottery",
    title: "Lottery",
    items: [
      { id: "my-bets", label: "My Bets" },
      { id: "all-lottery", label: "All Lottery" },
      { id: "results", label: "Results" },
      { id: "power-lottery", label: "Power Lottery" },
      { id: "rb-lottery", label: "RB Lottery" },
      { id: "lottery-draw", label: "Lottery Draw" },
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
                  <span className="font-medium">{section.title}</span>
                  <FaChevronRight
                    className={`transition-transform ${isOpen ? "rotate-90" : "rotate-0"}`}
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


