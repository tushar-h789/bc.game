"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export default function SearchFilters() {
  const categories = ["Casino", "Sports", "Live Games"];
  const providers = ["All Providers", "NetEnt", "Pragmatic Play", "Evolution"];

  const [category, setCategory] = useState("Casino");
  const [provider, setProvider] = useState("Providers");

  const [openCategory, setOpenCategory] = useState(false);
  const [openProvider, setOpenProvider] = useState(false);

  // Wrap whole row so clicks on input are considered "inside"
  const categoryRowRef = useRef<HTMLDivElement | null>(null);
  const providerRowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (categoryRowRef.current && !categoryRowRef.current.contains(target)) {
        setOpenCategory(false);
      }
      if (providerRowRef.current && !providerRowRef.current.contains(target)) {
        setOpenProvider(false);
      }
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenCategory(false);
        setOpenProvider(false);
      }
    }

    document.addEventListener("click", handleDocClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleDocClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div className="bg-[#0f1c2e] px-3 space-y-3 rounded-lg w-full max-w-md">
      {/* First Row */}
      <div ref={categoryRowRef} className="relative">
        <div className="flex items-center bg-[#213744] p-2 rounded-md overflow-hidden">
          {/* Left dropdown button */}
          <button
            onClick={() => setOpenCategory((v) => !v)}
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-[#243b57]"
            aria-expanded={openCategory}
            aria-haspopup="listbox"
          >
            {category} <ChevronDown size={14} />
          </button>

          {/* Search input */}
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search Games"
              className="w-full py-2 pl-9 pr-3 text-sm text-gray-200 placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Category dropdown menu */}
        {openCategory && (
          <div className="absolute top-full left-0 mt-1 w-44 rounded-md shadow-lg ring-1 ring-black/20 z-20">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCategory(c);
                  setOpenCategory(false);
                }}
                className="block w-full text-left px-3 bg-[#213744] py-2 text-sm text-slate-200 hover:bg-[#243b57]"
              >
                {c}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Second Row */}
      <div ref={providerRowRef} className="relative">
        <div className="flex items-center bg-[#213744] py-2 rounded-md overflow-hidden">
          {/* Left provider button */}
          <button
            onClick={() => setOpenProvider((v) => !v)}
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-[#243b57]"
            aria-expanded={openProvider}
            aria-haspopup="listbox"
          >
            {provider}
          </button>

          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Search size={16} />
            </span>

            <input
              type="text"
              placeholder="Search Provider"
              className="w-full py-2 pl-9 pr-8 text-sm text-gray-200 placeholder-gray-400 focus:outline-none"
            />

            {/* Right chevron inside input - also toggles provider menu */}
            <button
              onClick={() => setOpenProvider((v) => !v)}
              aria-label="toggle providers"
              className="absolute inset-y-0 right-3 flex items-center text-gray-400"
            >
              <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Provider dropdown menu */}
        {openProvider && (
          <div className="absolute top-full right-0 mt-1 w-44 bg-[#213744] rounded-md shadow-lg ring-1 ring-black/20 z-20">
            {providers.map((p) => (
              <button
                key={p}
                onClick={() => {
                  setProvider(p);
                  setOpenProvider(false);
                }}
                className="block w-full text-left px-3 py-2 text-sm text-slate-200"
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
