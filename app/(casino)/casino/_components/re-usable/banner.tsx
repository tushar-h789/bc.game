import Image, { StaticImageData } from "next/image";
import React from "react";

interface BannerProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string | StaticImageData;
}

export default function Banner({
  title,
  description,
  buttonText,
  imageSrc,
}: BannerProps) {
  return (
    <div className="bg-[#213744] p-4 rounded-lg max-w-lg flex items-center justify-between space-x-4 mx-3 md:mx-0">
      {/* Left Side Content */}
      <div className="text-white flex flex-col">
        <h2 className="text-[16px] text-[#E2E5E7] bg-[#2F4553] p-1 rounded-[4px] max-w-[114px] font-semibold">{title}</h2>
        <p className="text-[14px] mt-1">{description}</p>
        <button className="border border-[#FFFFFF] text-white py-1 max-w-[120px] px-3 rounded mt-2">
          {buttonText}
        </button>
      </div>

      {/* Right Side Image */}
      <div className="w-48 h-48 ">
        <Image
          src={imageSrc}
          alt="Banner Image"
          className="object-cover w-full h-full rounded-lg"
          width={112} // adjust based on your preferred size
          height={112} // adjust based on your preferred size
        />
      </div>
    </div>
  );
}
