"use client";

import React, { useRef } from "react";
import casinoIcon from "@/public/images/common/icon.png";
import gameCardImage from "@/public/images/common/game-card-img.png";
import GameCarousel, {
  GameCarouselHandle,
} from "../_components/re-usable/game-carosel";
// import rom "..Banner f/_components/re-usable/banner";
// import bannerImg from "@/public/images/common/banner-img.png";

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
      {/* <div>
        <Banner />
      </div> */}
    
    <div className="text-white">
      
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
