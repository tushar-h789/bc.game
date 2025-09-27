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

const ProvidersCard = ({ gameData }: GameCardProps) => {
  return (
    <div className="game-card">
      <div className="relative w-full overflow-hidden rounded-md bg-[#213744] px-2">
        <Image
          src={gameData.image}
          alt="game"
          width={150}
          height={100}
          // sizes="(max-width: 768px)"
          className=""
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

export default ProvidersCard;
