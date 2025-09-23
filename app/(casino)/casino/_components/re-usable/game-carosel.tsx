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
}

export interface GameCarouselHandle {
  next: () => void;
  prev: () => void;
}

const GameCarousel = forwardRef<GameCarouselHandle, GameCarouselProps>(({ games }, ref) => {
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
  );
});

GameCarousel.displayName = 'GameCarousel';

export default GameCarousel;
