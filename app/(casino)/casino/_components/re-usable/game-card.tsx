// GameCard.tsx
import Image, { StaticImageData } from "next/image";
import React from "react";

interface GameItem {
  image: string | StaticImageData;
  title: string;
  multiplier: string;
  players: string;
}

interface GameCardProps {
  gameData: GameItem;
}

const GameCard = ({ gameData }: GameCardProps) => {
  return (
    <div className="game-card">
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-md">
        <Image
          src={gameData.image}
          alt="game"
          fill
          sizes="(max-width: 768px) "
          className="object-cover w-full"
        />
      </div>
      <div className="game-card__details">
        {/* <h3 className="game-card__title">{gameData.title}</h3>
        <p className="game-card__multiplier">{gameData.multiplier}x</p> */}
        <p className="game-card__players flex items-center mt-2">
          <span
            className="w-2 h-2 rounded-full mr-2"
            style={{ backgroundColor: "#00F480" }}
          ></span>
          {gameData.players}{" "}
          <span className="text-[#00F480] ml-1">Playing</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
