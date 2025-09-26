import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import token1 from "@/public/images/home/community/social-1.png";
import token2 from "@/public/images/home/community/social-2.png";
import token3 from "@/public/images/home/community/social-3.png";
import token4 from "@/public/images/home/community/social-4.png";
import token5 from "@/public/images/home/community/social-5.png";
import token6 from "@/public/images/home/community/social-6.png";

// JSON Data
const data = {
  heading: "100% Deposit Bonus",
  cryptos: [
    { name: "USD", icon: token1 },
    { name: "Bitcoin", icon: token2 },
    { name: "Tron", icon: token3 },
    { name: "Tether", icon: token4 },
    { name: "Litecoin", icon: token5 },
    { name: "Ethereum", icon: token6 },
  ],
};

export default function JoinOurCommunity() {
  return (
    <Card className="container bg-[#213744] text-white rounded-2xl shadow-lg">
      <CardContent className="flex flex-col items-center gap-6">
        {/* Heading */}
        <h2 className="text-xl font-semibold text-center">Join Our community</h2>

        {/* Crypto Icons Row */}
        <div className="grid grid-cols-6 gap-6">
          {data.cryptos.map((crypto) => (
            <div
              key={crypto.name}
              className="bg-[#222627] p-1 sm:p-3 rounded sm:rounded-xl"
            >
              <Image
                src={crypto.icon}
                alt={crypto.name}
                width={30}
                height={30}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
