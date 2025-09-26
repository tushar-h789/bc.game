"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image, { type StaticImageData } from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Play, Star } from "lucide-react";

interface MatchOdds {
  key: string;
  value: string;
}

interface Team {
  flag: StaticImageData;
  name: string;
  score: string;
}

interface MatchSlideData {
  tournamentLogo: StaticImageData;
  tournamentName: string;
  matchType: string;
  teams: [Team, Team];
  odds: MatchOdds[];
}

export type { MatchSlideData };

interface ReUsableSportsSliderProps {
  title: string;
  titleIcon?: string | StaticImageData;
  slides: MatchSlideData[];
}

function OddsButton({ label, value }: { label: string; value: string }) {
  return (
    <div className="w-full bg-slate-700/60 rounded-md px-2 py-1.5 flex items-center justify-between text-center border border-white/6">
      <div className="text-xs sm:text-sm">{label}</div>
      <div className="text-sm sm:text-base font-semibold">{value}</div>
    </div>
  );
}

function TeamRow({ flag, name, score }: Team) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-9 h-9 rounded-full flex items-center justify-center">
          <Image
            src={flag}
            alt={`${name} flag`}
            width={26}
            height={26}
            className="rounded-full"
          />
        </div>
        <div className="text-sm font-medium truncate">{name}</div>
      </div>
      <div className="text-sm font-medium text-right">{score}</div>
    </div>
  );
}

function SportsCard({ data }: { data: MatchSlideData }) {
  return (
    <div className="container bg-[#1A2C38] text-slate-100 rounded-xl p-3 shadow-md ring-1 ring-white/5 h-full">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3 min-w-0">
          <Image src={data.tournamentLogo} alt="tournament logo" />
          <div className="min-w-0">
            <div className="text-sm font-semibold leading-5 truncate">
              {data.tournamentName}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            aria-label="play"
            className="w-8 h-8 rounded-full bg-green-500/95 flex items-center justify-center shadow-md ring-1 ring-white/10"
          >
            <Play size={14} />
          </button>
          <button
            aria-label="favorite"
            className="w-9 h-9 rounded-full bg-slate-700/50 flex items-center justify-center border border-white/6"
          >
            <Star size={14} />
          </button>
        </div>
      </div>

      <div className="mt-3 text-xs font-medium text-slate-400">
        {data.matchType}
      </div>

      <div className="mt-3 space-y-2">
        <TeamRow {...data.teams[0]} />
        <TeamRow {...data.teams[1]} />
      </div>

      <div className="my-3">
        <div className="my-2 text-lg sm:text-xl font-semibold">1x2</div>
        <div className="flex gap-2">
          {data.odds.map((o) => (
            <OddsButton key={o.key} label={o.key} value={o.value} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ReUsableSportsSlider({
  title,
  titleIcon,
  slides,
}: ReUsableSportsSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    containScroll: "trimSnaps",
  });

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  return (
    <div className="container">
      <div className="flex items-center justify-between mb-5 mx-2">
        <div className="flex items-center gap-2">
          {titleIcon ? (
            <Image src={titleIcon} alt="section icon" width={24} height={24} />
          ) : null}
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="border border-gray-700 px-3 py-[10px] rounded-xl text-sm">
            All
          </button>
          <button
            onClick={scrollPrev}
            className="carousel-button"
            aria-label="Previous"
          >
            <BiChevronLeft />
          </button>
          <button
            onClick={scrollNext}
            className="carousel-button"
            aria-label="Next"
          >
            <BiChevronRight />
          </button>
        </div>
      </div>

      <div className="carousel-container">
        <div className="container carousel relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="sports-embla__container">
              {slides.map((slide, idx) => (
                <div className="sports-embla__slide" key={idx}>
                  <div className="px-3">
                    <SportsCard data={slide} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
