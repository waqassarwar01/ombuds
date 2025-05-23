import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[105px] md:h-[348px] mt-10">
      <Image src="/heroimg.png" alt="ombud" fill  />
    </div>
  );
};

export default Hero;
