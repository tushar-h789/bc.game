// app/page.tsx (for Next.js 13+ with App Router)
import Image from "next/image";

export default function BigWin() {
  const cards = [
    { type: "Slots", amount: "$154.245k" },
    { type: "Lottery", amount: "$154.245k" },
    { type: "Lottery", amount: "$154.245k" },
    { type: "Lottery", amount: "$154.245k" },
    { type: "Lottery", amount: "$154.245k" },
  ];

  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="bg-[#0f2a3c] rounded-xl p-4 w-full max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-4">
          <div className="w-2 h-2 bg-sky-400 rounded-full mr-2"></div>
          <span className="text-white font-medium">Recent Big win</span>
        </div>

        {/* Cards Row */}
        <div className="flex gap-4 overflow-x-auto">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-40 bg-gradient-to-b from-[#102c40] to-[#0f2a3c] rounded-xl p-3 text-center shadow-md"
            >
              {/* Rocket image */}
              <div className="flex justify-center mb-2">
                <Image
                  src="/rocket.png" // <- put your rocket image inside public/rocket.png
                  alt="Rocket"
                  width={60}
                  height={60}
                />
              </div>

              {/* Title */}
              <p className="text-white font-bold text-lg">LIMBO</p>
              <p className="text-xs text-sky-300">500x</p>

              {/* Bottom Section */}
              <div className="mt-2">
                <p className="text-sm text-gray-300">{card.type}</p>
                <p className="text-green-400 font-semibold">{card.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
