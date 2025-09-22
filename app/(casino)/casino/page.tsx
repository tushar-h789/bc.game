'use client'
import React, { useRef } from "react";
import Banner from "./_components/re-usable/banner";
import bannerImg from "@/public/images/common/banner-img.png";
import GameCarousel, { GameCarouselHandle } from "./_components/re-usable/game-carosel";
import gameCardImage from "@/public/images/common/game-card-img.png"

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
    players: "2,110",
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
      <div className="py-4 bg-gray-900 flex items-center justify-center">
        <Banner
          title="Stay Untamed"
          description="Registration Now & Unlock Up To $10,000 in Casino or Sports!"
          buttonText="Join Now"
          imageSrc={bannerImg}
        />
      </div>

      {/* Hot game carosel */}
      <div className="app-container">
        <div className="flex items-center justify-between mb-2">
          <h2>Hot Games</h2>
          <div className="flex items-center gap-2">
            <button onClick={() => carouselRef.current?.prev()} className="carousel-button" aria-label="Previous">‹</button>
            <button onClick={() => carouselRef.current?.next()} className="carousel-button" aria-label="Next">›</button>
          </div>
        </div>
        <GameCarousel ref={carouselRef} games={games} />
      </div>
    </div>
  );
}
