"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
import casinoIcon from "@/public/images/common/icon.png";
import gameCardImage from "@/public/images/common/game-card-img.png";
import providersImg from "@/public/images/common/logo.png";
// import searchCasino from "./_components/search-casino";
import GameCarousel, {
  GameCarouselHandle,
} from "../_components/re-usable/game-carosel";
import Banner from "../_components/re-usable/banner";
import bannerImg from "@/public/images/common/banner-img.png";
import CasinoTab, { type CasinoTabKey } from "./_components/casino-tab";
import ProvidersCarousel from "./_components/providers-carosel";

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
const providers = [
  {
    image: providersImg,
    title: "LIMBO",
    multiplier: "500",
    players: "2,110",
  },
  {
    image: providersImg,
    title: "LIMBO",
    multiplier: "500",
    players: "3,410",
  },
  {
    image: providersImg,
    title: "LIMBO",
    multiplier: "500",
    players: "1,110",
  },
  {
    image: providersImg,
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
  const [activeTab, setActiveTab] = useState<CasinoTabKey>("lobby");
  const [query, setQuery] = useState("");

  const filterByQuery = useCallback(
    (items: typeof games) => {
      if (!query.trim()) return items;
      const q = query.trim().toLowerCase();
      return items.filter((g) => g.title.toLowerCase().includes(q));
    },
    [query]
  );

  const filtered = useMemo(
    () => ({
      games: filterByQuery(games),
      slots: filterByQuery(slots),
      liveCasino: filterByQuery(liveCasino),
      gameShows: filterByQuery(gameShows),
      providers: filterByQuery(providers),
      bingo: filterByQuery(bingo),
      bonusBuy: filterByQuery(bonusBuy),
      blackJack: filterByQuery(blackJack),
      tableGames: filterByQuery(tableGames),
      exclusive: filterByQuery(exclusive),
      newRealeases: filterByQuery(newRealeases),
    }),
    [filterByQuery]
  );

  const showLobby = activeTab === "lobby";
  const showHot = activeTab === "hot" || showLobby;
  const showNew = activeTab === "new" || showLobby;

  return (
    <div>
      <div className="text-white">
        <div className="flex items-center justify-center mx-2">
          <Banner
            title="Stay Untamed"
            subTitle="Registration Now & Unlock"
            description=" Up To $10,000 in Casino or Sports!"
            buttonText="Join Now"
            imageSrc={bannerImg}
          />
        </div>

        {/* Casino tab */}
        <div className="container">
          {/* search field */}
          <div className="py-4 px-2">
            <div className="relative w-full ">
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
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Games"
                className="w-full rounded-md bg-[#213744] pl-10 pr-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <CasinoTab activeTab={activeTab} onChange={setActiveTab} />

          {/* hot game */}
          {showHot ? (
            <div className=" mt-5">
              <GameCarousel
                ref={carouselRef}
                title="Hot Games"
                titleIcon={casinoIcon}
                games={filtered.games}
              />
            </div>
          ) : null}
        </div>

        {/* slots carosel */}
        {showLobby ? (
          <div className="mt-10">
            <GameCarousel
              ref={carouselRef}
              title="Slots"
              titleIcon={casinoIcon}
              games={filtered.slots}
            />
          </div>
        ) : null}
        {/*  Live Casino carosel */}
        {showLobby ? (
          <div className="mt-10">
            <GameCarousel
              ref={carouselRef}
              title=" Live Casino"
              titleIcon={casinoIcon}
              games={filtered.liveCasino}
            />
          </div>
        ) : null}
        {/* game shows carosel */}
        {showLobby ? (
          <div className="mt-10">
            <GameCarousel
              ref={carouselRef}
              title="Game Shows"
              titleIcon={casinoIcon}
              games={filtered.gameShows}
            />
          </div>
        ) : null}

        {/* poker carosel */}
        {showLobby ? (
          <div className="mt-10">
            <GameCarousel
              ref={carouselRef}
              title="Poker"
              titleIcon={casinoIcon}
              games={filtered.gameShows}
            />
          </div>
        ) : null}

        {/* providers  carosel*/}
        {showLobby ? (
          <div className="mt-10">
            <ProvidersCarousel
              ref={carouselRef}
              title="Providers"
              titleIcon={casinoIcon}
              games={filtered.providers}
            />
          </div>
        ) : null}

        {/*  Bingo carosel */}
        {showLobby ? (
          <div className="mt-10">
            <GameCarousel
              ref={carouselRef}
              title="Bingo"
              titleIcon={casinoIcon}
              games={filtered.bingo}
            />
          </div>
        ) : null}
        {/* bonud buy carosel */}
        {showLobby ? (
          <div className="mt-10">
            <GameCarousel
              ref={carouselRef}
              title="Bonus Buy"
              titleIcon={casinoIcon}
              games={filtered.bonusBuy}
            />
          </div>
        ) : null}
        {/* black jack carosel */}
        {showLobby ? (
          <div className="mt-10">
            <GameCarousel
              ref={carouselRef}
              title="Blackjack"
              titleIcon={casinoIcon}
              games={filtered.blackJack}
            />
          </div>
        ) : null}

         {/* Themes carosel*/}
         {showLobby ? (
          <div className="mt-10">
            <ProvidersCarousel
              ref={carouselRef}
              title="Themes"
              titleIcon={casinoIcon}
              games={filtered.providers}
            />
          </div>
        ) : null}


        {/* table games carosel */}
        {showLobby ? (
          <div className="mt-10">
            <GameCarousel
              ref={carouselRef}
              title="Table Games"
              titleIcon={casinoIcon}
              games={filtered.tableGames}
            />
          </div>
        ) : null}
        {/* new exclusive carosel */}
        {showLobby ? (
          <div className="mt-10">
            <GameCarousel
              ref={carouselRef}
              title="Exclusive"
              titleIcon={casinoIcon}
              games={filtered.exclusive}
            />
          </div>
        ) : null}
        {/* new releases carosel */}
        {showNew ? (
          <div className="mt-10">
            <GameCarousel
              ref={carouselRef}
              title="New Releases"
              titleIcon={casinoIcon}
              games={filtered.newRealeases}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
