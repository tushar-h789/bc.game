import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import token1 from "@/public/images/home/token/token-1.png";
import token2 from "@/public/images/home/token/token-2.png";
import token3 from "@/public/images/home/token/token-3.png";
import token4 from "@/public/images/home/token/token-4.png";
import token5 from "@/public/images/home/token/token-5.png";
import token6 from "@/public/images/home/token/token-6.png";
import card1 from "@/public/images/home/token/card-1.png";
import card2 from "@/public/images/home/token/card-2.png";
import card3 from "@/public/images/home/token/card-3.png";
import card4 from "@/public/images/home/token/card-4.png";
import card5 from "@/public/images/home/token/card-5.png";
import card6 from "@/public/images/home/token/card-6.png";
import card7 from "@/public/images/home/token/card-7.png";
import card8 from "@/public/images/home/token/card-8.png";

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
  payments: [
    { name: "Visa", icon: card1 },
    { name: "MasterCard", icon: card2 },
    { name: "Apple Pay", icon: card3 },
    { name: "Google Pay", icon: card4 },
    { name: "Skrill", icon: card5 },
    { name: "Neteller", icon: card6 },
    { name: "Perfect Money", icon: card7 },
    { name: "AstroPay", icon: card8 },
  ],
};

export default function DepositBonus() {
  return (
    <Card className="container bg-[#213744] text-white rounded-2xl shadow-lg">
      <CardContent className="flex flex-col items-center gap-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center">
          <span className="text-green-400">100% </span>
          Deposit Bonus
        </h2>

        {/* Crypto Icons Row */}
        <div className="grid grid-cols-6 gap-6">
          {data.cryptos.map((crypto) => (
            <Image
              key={crypto.name}
              src={crypto.icon}
              alt={crypto.name}
              width={30}
              height={30}
            />
          ))}
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-4 gap-8">
          {data.payments.map((payment) => (
            <div key={payment.name} className="flex justify-center">
              <Image
                src={payment.icon}
                alt={payment.name}
                width={50}
                height={30}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
