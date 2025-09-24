"use client";

import React, { useRef } from "react";
import casinoIcon from "@/public/images/common/icon.png";
import gameCardImage from "@/public/images/common/game-card-img.png";
import GameCarousel, {
  GameCarouselHandle,
} from "../_components/re-usable/game-carosel";

const games = [
  {
    image: gameCardImage,
    title: "LIMBO",
    multiplier: "500",
    players: "2,110",
  },
  {
    image: gameCardImage,
    title: "LIMBO",
    multiplier: "500",
    players: "3,410",
  },
  {
    image: gameCardImage,
    title: "LIMBO",
    multiplier: "500",
    players: "1,110",
  },
  {
    image: gameCardImage,
    title: "LIMBO",
    multiplier: "500",
    players: "4,240",
  },
];

export default function CasinoPage() {
  const carouselRef = useRef<GameCarouselHandle | null>(null);
  return (
    <div className="text-white">
      Casino
      {/*   New Releases carosel */}
      <div className="mt-10">
        <GameCarousel
          ref={carouselRef}
          title="Hot Games"
          titleIcon={casinoIcon}
          games={games}
        />
      </div>
    </div>
  );
}
