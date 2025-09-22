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
    <div className="bg-[#213744] p-6 rounded-lg max-w-lg flex items-center justify-between space-x-4 mx-2 md:mx-0">
      {/* Left Side Content */}
      <div className="text-white flex flex-col">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm mt-2">{description}</p>
        <button className="bg-[#007BFF] text-white py-2 px-6 rounded mt-4">
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
