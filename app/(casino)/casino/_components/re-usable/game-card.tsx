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
        <Image src={gameData.image} alt="game" fill sizes="(max-width: 768px) " className="object-cover w-full" />
      </div>
      <div className="game-card__details">
        {/* <h3 className="game-card__title">{gameData.title}</h3>
        <p className="game-card__multiplier">{gameData.multiplier}x</p> */}
        <p className="game-card__players">{gameData.players} Playing</p>
      </div>
    </div>
  );
};

export default GameCard;
