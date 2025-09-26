import React from "react";
import limbo from "@/public/images/home/recent-card.png";
import Image from "next/image";

export default function BigWin() {
  const wins = [
    { image: limbo, type: "Slots", amount: "$154.245k" },
    { image: limbo, type: "Lottery", amount: "$154.245k" },
    { image: limbo, type: "Roulette", amount: "$98.750k" },
    { image: limbo, type: "Blackjack", amount: "$76.500k" },
    { image: limbo, type: "Poker", amount: "$210.300k" },
  ];

  return (
    <section className="container px-2 py-6 rounded-xl text-white w-full  mx-auto">
      {/* Header */}
      <header className="flex items-center mb-2">
        <span className="h-3 w-3 bg-sky-500 rounded-full mr-3"></span>
        <h2 className="text-xl font-bold">Recent Big Wins</h2>
      </header>

      {/* Cards Container */}
      <div className="grid grid-cols-5 gap-2">
        {wins.map((item, index) => (
          <article
            key={index}
            className="flex flex-col items-center rounded-lg hover:transform hover:scale-105 transition-transform duration-200"
          >
            {/* Game Image - Fixed size 72x90 */}
            <div className="relative mb-3 w-full h-full">
              <Image
                src={item.image}
                alt={`${item.type} Game`}
                // width={72}
                // height={90}
                className="object-cover rounded-md w-full h-full"
              />
            </div>

            {/* Game Info below image */}
            <div className="text-center w-full">
              <p className="text-orange-400 text-xs font-semibold mb-1 truncate">
                {item.type}
              </p>
              <p className="text-green-400 font-semibold text-sm truncate">
                {item.amount}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
