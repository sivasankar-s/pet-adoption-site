import Image from "next/image";
import React from "react";
import heroimg from "@/public/hero-cat.jpg";

const Hero = () => {
  return (
    <div className="flex w-full justify-between bg-gradient-to-r from-[#994D1C] to-[#994D1C] rounded-xl overflow-hidden">
      <div className="p-5 text-white mr-7">
        <h1 className="font-extrabold text-6xl mb-7">
          Connecting Hearts, Creating Homes.
        </h1>
        <h1 className="font-semibold text-lg">
          No need to leave your loved pets on streets, when you can connect to
          safe hands.
        </h1>
      </div>
      <Image
        className="flex justify-end"
        src={heroimg}
        alt="hero image"
        width={550}
      />
    </div>
  );
};

export default Hero;
