"use client";

import React, { useState } from "react";
import ProvidersSearch from "./_components/providers-search";
import GameCard from "../_components/re-usable/game-card";
import gameCardImage from "@/public/images/common/game-card-img.png";
import SearchFilters from "./_components/search-filters";
import { ChevronDown } from "lucide-react";

// Generate more games data for pagination
const generateGames = () => {
  const gameTitles = ["LIMBO", "PLINKO", "CRASH", "MINES", "DIAMOND", "BLACKJACK", "ROULETTE", "SLOTS"];
  const multipliers = ["500", "1000", "250", "750", "100", "50", "200", "300"];
  
  return Array.from({ length: 9000 }, (_, index) => ({
    image: gameCardImage,
    title: gameTitles[index % gameTitles.length],
    multiplier: multipliers[index % multipliers.length],
    players: Math.floor(Math.random() * 5000 + 100).toLocaleString(),
  }));
};

const allGames = generateGames();

export default function ExplorePage() {
  const [visibleGamesCount, setVisibleGamesCount] = useState(3);
  const totalGames = allGames.length;
  const visibleGames = allGames.slice(0, visibleGamesCount);
  const progressPercentage = (visibleGamesCount / totalGames) * 100;

  const handleShowMore = () => {
    setVisibleGamesCount(prev => Math.min(prev + 12, totalGames));
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <SearchFilters />
      
      {/* Games Grid */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {visibleGames.map((game, index) => (
            <div key={index} className="w-full">
              <GameCard gameData={game} />
            </div>
          ))}
        </div>

        {/* Progress Section */}
        <div className="mt-8 max-w-md mx-auto">
          {/* Games Count */}
          <div className="text-center text-white mb-4">
            <p className="text-sm">Games shown: {visibleGamesCount} of {totalGames}</p>
          </div>

          {/* Progress Bar */}
          <div className="w-1/2 mx-auto bg-gray-700 rounded-full h-2 mb-6">
            <div 
              className="bg-[#00F480] h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          {/* Show More Button */}
          {visibleGamesCount < totalGames && (
            <div className="text-center">
              <button
                onClick={handleShowMore}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 mx-auto transition-colors duration-200"
              >
                Show more
                <ChevronDown size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
