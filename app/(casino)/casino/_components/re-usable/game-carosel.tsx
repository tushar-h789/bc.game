// GameCarousel.tsx
'use client'

import React, { useCallback, useImperativeHandle, forwardRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { StaticImageData } from 'next/image';
import GameCard from './game-card';

interface GameItem {
  image: string | StaticImageData;
  title: string;
  multiplier: string;
  players: string;
}

interface GameCarouselProps {
  games: GameItem[];
  title: string;
}

export interface GameCarouselHandle {
  next: () => void;
  prev: () => void;
}

const GameCarousel = forwardRef<GameCarouselHandle, GameCarouselProps>(({ games, title }, ref) => {
  console.log("games", games);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  useImperativeHandle(ref, () => ({
    next: scrollNext,
    prev: scrollPrev,
  }), [scrollNext, scrollPrev]);

  return (
    <div className="container ">
      <div className="flex items-center justify-between mb-2">
        <h2>{title}</h2>
        <div className="flex items-center gap-2">
          <button onClick={scrollPrev} className="carousel-button" aria-label="Previous">‹</button>
          <button onClick={scrollNext} className="carousel-button" aria-label="Next">›</button>
        </div>
      </div>
      <div className="carousel-container">
        <div className="carousel relative">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container ">
              {games.map((game, index) => (
                <div className="embla__slide" key={index}>
                  <GameCard gameData={game} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

GameCarousel.displayName = 'GameCarousel';

export default GameCarousel;
