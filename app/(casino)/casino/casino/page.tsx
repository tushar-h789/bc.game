"use client";

import React, { useRef } from "react";
import casinoIcon from "@/public/images/common/icon.png";
import gameCardImage from "@/public/images/common/game-card-img.png";
// import searchCasino from "./_components/search-casino";
import GameCarousel, {
  GameCarouselHandle,
} from "../_components/re-usable/game-carosel";
import Banner from "../_components/re-usable/banner";
import bannerImg from "@/public/images/common/banner-img.png";

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
const slots = [
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
const liveCasino = [
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
const gameShows = [
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
const bingo = [
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
const bonusBuy = [
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
const blackJack = [
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
const tableGames = [
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
const exclusive = [
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
const newRealeases = [
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
    <div>
      <div className="text-white">
      <div className="py-4 flex items-center justify-center">
        <Banner
          title="Stay Untamed"
          description="Registration Now & Unlock Up To $10,000 in Casino or Sports!"
          buttonText="Join Now"
          imageSrc={bannerImg}
        />
      </div>

        <div className=" p-4">
          <div className="relative w-full max-w-sm">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                />
              </svg>
            </span>

            <input
              type="text"
              placeholder="Search Games"
              className="w-full rounded-md bg-[#213744] pl-10 pr-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/*   New Releases carosel */}
        <div className="mt-5">
          <GameCarousel
            ref={carouselRef}
            title="Hot Games"
            titleIcon={casinoIcon}
            games={games}
          />
        </div>
        {/* slots carosel */}
        <div className="mt-5">
          <GameCarousel
            ref={carouselRef}
            title="Slots"
            titleIcon={casinoIcon}
            games={slots}
          />
        </div>
        {/*  Live Casino carosel */}
        <div className="mt-5">
          <GameCarousel
            ref={carouselRef}
            title=" Live Casino"
            titleIcon={casinoIcon}
            games={liveCasino}
          />
        </div>
        {/* game shows carosel */}
        <div className="mt-5">
          <GameCarousel
            ref={carouselRef}
            title="Game Shows"
            titleIcon={casinoIcon}
            games={gameShows}
          />
        </div>
        {/*  Bingo carosel */}
        <div className="mt-5">
          <GameCarousel
            ref={carouselRef}
            title="Bingo"
            titleIcon={casinoIcon}
            games={bingo}
          />
        </div>
        {/* bonud buy carosel */}
        <div className="mt-5">
          <GameCarousel
            ref={carouselRef}
            title="Bonus Buy"
            titleIcon={casinoIcon}
            games={bonusBuy}
          />
        </div>
        {/* black jack carosel */}
        <div className="mt-5">
          <GameCarousel
            ref={carouselRef}
            title="Blackjack"
            titleIcon={casinoIcon}
            games={blackJack}
          />
        </div>
        {/* table games carosel */}
        <div className="mt-5">
          <GameCarousel
            ref={carouselRef}
            title="Table Games"
            titleIcon={casinoIcon}
            games={tableGames}
          />
        </div>
        {/* new exclusive carosel */}
        <div className="mt-5">
          <GameCarousel
            ref={carouselRef}
            title="Exclusive"
            titleIcon={casinoIcon}
            games={exclusive}
          />
        </div>
        {/* new releases carosel */}
        <div className="mt-5">
          <GameCarousel
            ref={carouselRef}
            title="New Releases"
            titleIcon={casinoIcon}
            games={newRealeases}
          />
        </div>
      </div>
    </div>
  );
}
