import React from "react";
import ProvidersSearch from "./_components/providers-search";
import GameCard from "../_components/re-usable/game-card";
import gameCardImage from "@/public/images/common/game-card-img.png";


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

export default function ExplorePage() {
  return (
    <div>
    <div className="p-2 text-white">
      <div className="carousel-container">
          <div className="carousel relative">
            <div className="embla" >
              <div className="embla__container ">
                {games.map((game, index) => (
                  <div className="embla__slide mt-5" key={index}>
                    <GameCard gameData={game} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      <div className="carousel-container">
          <div className="carousel relative">
            <div className="embla" >
              <div className="embla__container ">
                {games.map((game, index) => (
                  <div className="embla__slide mt-5" key={index}>
                    <GameCard gameData={game} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      <div className="carousel-container">
          <div className="carousel relative">
            <div className="embla" >
              <div className="embla__container ">
                {games.map((game, index) => (
                  <div className="embla__slide mt-5" key={index}>
                    <GameCard gameData={game} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      <div className="carousel-container">
          <div className="carousel relative">
            <div className="embla" >
              <div className="embla__container ">
                {games.map((game, index) => (
                  <div className="embla__slide mt-5" key={index}>
                    <GameCard gameData={game} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
}
