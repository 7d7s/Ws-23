import Image from "next/image";
import React from "react";


interface BannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="w-full h-[60vh] flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-slate-800 bg-opacity-50"></div>

      {/* Content Container */}
      <div className="relative text-center text-white z-10 px-4 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        
        <p className="mt-3 text-lg md:text-xl flex">Home &nbsp; 
          <Image src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647803/Plush_zyqa8z.png" width={30} height={30} alt="heart"/>&nbsp; 
          {subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
