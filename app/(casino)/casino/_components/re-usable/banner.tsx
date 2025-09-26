import Image, { StaticImageData } from "next/image";
import React from "react";

interface BannerProps {
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
  imageSrc: string | StaticImageData;
}

export default function Banner({
  title,
  subTitle,
  description,
  buttonText,
  imageSrc,
}: BannerProps) {
  return (
    <div className="container bg-[#213744] p-4 rounded-lg flex items-center justify-between gap-2 mx-1">
      {/* Left Side Content */}
      <div className="text-white flex flex-col">
        <h2 className="text-[#E2E5E7] bg-[#2F4553] p-2 rounded-[4px] max-w-[120px] font-semibold">
          {title}
        </h2>
        <p className="font-semibold">{subTitle}</p>
        <p className="text-[14px]  mb-4 mt-2 text-gray-300">{description}</p>
        <button className="border border-[#FFFFFF] text-white py-1 max-w-[120px] px-3 rounded mt-2">
          {buttonText}
        </button>
      </div>

      {/* Right Side Image */}
      <div className="w-[120px]">
        <Image
          src={imageSrc}
          alt="Banner Image"
          className="object-cover w-full h-full rounded-lg"
          width={135} // adjust based on your preferred size
          height={142} // adjust based on your preferred size
        />
      </div>
    </div>
  );
}
