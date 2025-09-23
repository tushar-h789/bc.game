import React from "react";
import CasinoSearch from "./_components/casino-search";
import ProvidersSearch from "./_components/providers-search";
import GameCard from "../_components/re-usable/game-card";
import gameCardImage from "@/public/images/common/game-card-img.png";

const gameData = {
  image: gameCardImage,
  title: "LIMBO",
  multiplier: "500",
  players: "1,110",
};

export default function ExplorePage() {
  return (
    <div className="p-4 text-white">
      <CasinoSearch />
      <ProvidersSearch />
      <GameCard gameData={gameData} />
    </div>
  );
}
