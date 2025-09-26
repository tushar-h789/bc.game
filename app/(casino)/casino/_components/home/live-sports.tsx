import React from "react";
// import { Play, Star } from "lucide-react";
import asiaCupLogo from "@/public/images/home/asio-cup-logo.png";
import bangladesh from "@/public/images/home/bangladesh.png";
import india from "@/public/images/home/india.png";
import ReUsableSportsSlider, { type MatchSlideData } from "../re-usable/re-usable-sports-slider";

// Props type definitions
// legacy types from pre-slider card layout (not used after refactor)

export default function LiveSports() {
  const slides: MatchSlideData[] = [
    {
      tournamentLogo: asiaCupLogo,
      tournamentName: "Asia Cup. Group stage. Group B",
      matchType: "T20",
      teams: [
        { flag: bangladesh, name: "Bangladesh", score: "0/0 (0.0 ov)" },
        { flag: india, name: "India", score: "0/0" },
      ],
      odds: [
        { key: "W1", value: "3.65" },
        { key: "X", value: "3.65" },
        { key: "W2", value: "3.65" },
      ],
    },
    {
      tournamentLogo: asiaCupLogo,
      tournamentName: "Asia Cup. Group stage. Group A",
      matchType: "ODI",
      teams: [
        { flag: india, name: "India", score: "120/2 (22.4 ov)" },
        { flag: bangladesh, name: "Bangladesh", score: "—" },
      ],
      odds: [
        { key: "W1", value: "1.85" },
        { key: "X", value: "3.20" },
        { key: "W2", value: "4.10" },
      ],
    },
    {
      tournamentLogo: asiaCupLogo,
      tournamentName: "Asia Cup. Super Four",
      matchType: "T20",
      teams: [
        { flag: bangladesh, name: "Bangladesh", score: "—" },
        { flag: india, name: "India", score: "—" },
      ],
      odds: [
        { key: "W1", value: "2.45" },
        { key: "X", value: "3.75" },
        { key: "W2", value: "2.85" },
      ],
    },
  ];

  return (
    <ReUsableSportsSlider title="Live Sports" slides={slides} />
  );
}

// Legacy single-card helpers kept for reference (unused after slider refactor)
// function TeamRow({ flag, name, score }: TeamRowProps) {
//   return (
//     <div className="flex items-center justify-between">
//       <div className="flex items-center gap-3">
//         <div className="w-9 h-9 rounded-full flex items-center justify-center">
//           <Image
//             src={flag}
//             alt={`${name} flag`}
//             width={26}
//             height={26}
//             className="rounded-full"
//           />
//         </div>
//         <div className="text-sm font-medium">{name}</div>
//       </div>
//       <div className="text-sm font-medium">{score}</div>
//     </div>
//   );
// }

// function OddsButton({ label, value }: OddsButtonProps) {
//   return (
//     <div className="w-full bg-slate-700/60 rounded-md px-2 py-1.5 flex  items-center text-center justify-between border border-white/6">
//       <div className="">{label}</div>
//       <div className=" font-semibold">{value}</div>
//     </div>
//   );
// }
