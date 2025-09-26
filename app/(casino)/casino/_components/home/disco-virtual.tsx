import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import disco from "@/public/images/home/disco.png";
import nix from "@/public/images/home/nix.png";

export default function DiscoVirtual() {
  return (
    <Card className=" container bg-transparent text-white rounded-2xl shadow-lg">
      <CardContent className="flex flex-col gap-6">
        {/* Top Logos */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400">
              <span className="text-sm font-bold">18+</span>
            </div>
          </div>
          <Image src={nix} alt="NIX18" width={90} height={40} />
          <Image src={disco} alt="Disco Virtual" width={90} height={30} />
        </div>

        {/* Text Content */}
        <div className="text-sm leading-relaxed space-y-2 text-gray-200">
          <p>
            Rellbet offers an entertaining gaming experience that may involve
            certain risks.
          </p>
          <p>You must be at least 18 years old to use this site.</p>
          <p>Play responsibly and enjoy your time on Rellbet.</p>
          <p>
            Rellbet is operated by Rell Corporation. Unauthorized use, copying,
            or distribution of any content is strictly prohibited.
          </p>
        </div>

        {/* Footer */}
        <div className="w-full flex justify-between gap-2">
          <div className="w-1/2">
            <p className="text-xs text-gray-400">
              Copyright © 2025 Rellbet.com All rights reserved.
            </p>
          </div>

          <div className="w-1/2 flex items-center justify-center py-1 gap-2 bg-[#233540] rounded-md text-xs">
            <div className="w-4 h-4 flex items-center justify-center bg-green-500 rounded-full">
              <span className="text-gray-900 font-semibold">$</span>
            </div>
            <span className="text-green-400 text-sm">1 USDT = $1.00</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
