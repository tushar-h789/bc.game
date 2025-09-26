// import ReUsableSportsSlider, { type MatchSlideData } from "@/components/ReUsableSportsSlider";
import teamAFlag from "@/public/images/home/india.png";
import teamBFlag from "@/public/images/home/bangladesh.png";
import tournamentLogo from "@/public/images/home/asio-cup-logo.png";
import ReUsableSportsSlider, { type MatchSlideData } from "../_components/re-usable/re-usable-sports-slider";
import Banner from "../_components/re-usable/banner";
import PreMatch from "./_components/pre-match"

const matches: MatchSlideData[] = [
  {
    tournamentLogo: tournamentLogo,
    tournamentName: "Asia cup. Group stage. Group B",
    matchType: "T20",
    teams: [
      { flag: teamBFlag, name: "Bangladesh", score: "0/0 (0.0 ov)" },
      { flag: teamAFlag, name: "India", score: "0/0" },
    ],
    odds: [
      { key: "1", value: "1.80" },
      { key: "X", value: "2.10" },
      { key: "2", value: "3.25" },
    ],
  },
  {
    tournamentLogo: tournamentLogo,
    tournamentName: "World Cup",
    matchType: "Upcoming - T20",
    teams: [
      { flag: teamAFlag, name: "India", score: "-" },
      { flag: teamBFlag, name: "Australia", score: "-" },
    ],
    odds: [
      { key: "1", value: "1.50" },
      { key: "2", value: "2.50" },
    ],
  },
];

export default function Page() {
  return (
   <div>
    <div>
      <Banner />
    </div>
    <div className=" p-4">
          <div className="relative w-full max-w-sm">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                />
              </svg>
            </span>

            <input
              type="text"
              placeholder="Search Games"
              className="w-full rounded-md bg-[#213744] pl-10 pr-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

     <div className="p-1">
      <ReUsableSportsSlider
        title="Upcoming Matches" 
        slides={matches} 
      />
    </div>
    <div>
    <PreMatch
      title="Upcoming Matches" 
      slides={matches}  />
    </div>
   </div>
  );
}
