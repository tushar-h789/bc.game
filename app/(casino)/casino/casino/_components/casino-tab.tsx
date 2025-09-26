"use client";

import React from "react";

type CasinoTabKey = "lobby" | "hot" | "new";

interface CasinoTabProps {
  activeTab: CasinoTabKey;
  onChange: (tab: CasinoTabKey) => void;
}

const tabs: { key: CasinoTabKey; label: string }[] = [
  { key: "lobby", label: "Lobby" },
  { key: "hot", label: "Hot Game" },
  { key: "new", label: "New Release" },
];

export type { CasinoTabKey };

export default function CasinoTab({ activeTab, onChange }: CasinoTabProps) {
  return (
    <div className="container px-2">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
        {tabs.map(({ key, label }) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors border ${
                isActive
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-[#213744] text-gray-200 border-transparent hover:bg-[#284556]"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
