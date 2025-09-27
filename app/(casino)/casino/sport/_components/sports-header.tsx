import React from "react";
import Image from "next/image";
import groupImg from "@/public/images/sports/group.png";
import PlayImg from "@/public/images/sports/play.png";

const headerItem = [
  { id: 1, image: groupImg, title: "Lobby" },
  { id: 2, image: PlayImg, title: "Live" },
  { id: 3, image: groupImg, title: "My Bets" },
  { id: 4, image: groupImg, title: "Starting soon" },
];

export default function SportsHeader() {
  return (
    <div className="w-full bg-gray-900 py-3">
      <div className="container flex items-center justify-around">
        {headerItem.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-1 cursor-pointer rounded-xl px-4 py-2 hover:bg-gray-700 transition"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800">
              <Image src={item.image} alt={item.title} width={24} height={24} />
            </div>
            <span className="text-xs text-gray-300 text-center">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
