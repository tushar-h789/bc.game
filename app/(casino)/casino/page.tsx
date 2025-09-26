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
import LiveSports from "./_components/home/live-sports";
import DepositBonus from "./_components/home/deposit-bonus";

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

      {/* Hot game carosel */}
      <div className="my-5">
        <GameCarousel
          ref={carouselRef}
          title="Hot Games"
          titleIcon={casinoIcon}
          games={games}
        />
      </div>

      {/* slots carosel */}
      <div className="mt-10">
        <GameCarousel
          ref={carouselRef}
          title="Slots"
          titleIcon={casinoIcon}
          games={slots}
        />
      </div>

      <div className="mt-10">
        <LiveSports />
      </div>

      {/* game shows carosel */}
      <div className="mt-10">
        <GameCarousel
          ref={carouselRef}
          title="Game Shows"
          titleIcon={casinoIcon}
          games={gameShows}
        />
      </div>

      {/*  Live Casino carosel */}
      <div className="mt-10">
        <GameCarousel
          ref={carouselRef}
          title=" Live Casino"
          titleIcon={casinoIcon}
          games={liveCasino}
        />
      </div>

      {/*  Bingo carosel */}
      <div className="mt-10">
        <GameCarousel
          ref={carouselRef}
          title="Bingo"
          titleIcon={casinoIcon}
          games={bingo}
        />
      </div>

      {/*   Exclusive carosel */}
      <div className="mt-10">
        <GameCarousel
          ref={carouselRef}
          title=" Exclusive"
          titleIcon={casinoIcon}
          games={exclusive}
        />
      </div>

      <div className="mt-10">
        <DepositBonus/>
      </div>

      {/*   New Releases carosel */}
      <div className="mt-10">
        <GameCarousel
          ref={carouselRef}
          title="New Releases"
          titleIcon={casinoIcon}
          games={exclusive}
        />
      </div>
    </div>
  );
}
