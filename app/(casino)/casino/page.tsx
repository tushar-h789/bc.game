"use client";
import React, { useRef } from "react";
import Banner from "./_components/re-usable/banner";
import bannerImg from "@/public/images/common/banner-img.png";
import GameCarousel, {
  GameCarouselHandle,
} from "./_components/re-usable/game-carosel";
import gameCardImage from "@/public/images/common/game-card-img.png";
import BigWin from "./_components/home/bigwin";
import casinoIcon from "@/public/images/common/icon.png";

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
    players: "2,110",
  },
  {
    image: gameCardImage,
    title: "LIMBO",
    multiplier: "500",
    players: "2,110",
  },
];

// This is the Home tab page: /casino
export default function CasinoHome() {
  const carouselRef = useRef<GameCarouselHandle | null>(null);
  return (
    <div>
      <div className="py-4 flex items-center justify-center">
        <Banner
          title="Stay Untamed"
          description="Registration Now & Unlock Up To $10,000 in Casino or Sports!"
          buttonText="Join Now"
          imageSrc={bannerImg}
        />
      </div>
      <div>
        <BigWin />
      </div>
        <div >
        {/* Hot game carosel */}
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
