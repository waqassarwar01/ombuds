import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] mt-10">
      {" "}
      {/* Adjust h-64 to desired height */}
      <Image src="/heroimg.png" alt="ombud" fill className="object-cover" />
    </div>
  );
};

export default Hero;
