import React from "react";
import Banner from "./_components/re-usable/banner";
import bannerImg from "@/public/images/common/banner-img.png";

// This is the Home tab page: /casino
export default function CasinoHome() {
  return (
    <div>
      <div className="py-4 bg-gray-900 flex items-center justify-center">
        <Banner
          title="Stay Untamed"
          description="Registration Now & Unlock Up To $10,000 in Casino or Sports!"
          buttonText="Join Now"
          imageSrc={bannerImg}
        />
      </div>
    </div>
  );
}
