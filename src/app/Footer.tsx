"use client";
import { RedirectionLinks } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#007282] text-white p-10">
        <div className="flex flex-col items-center gap-4 md:gap-0 md:flex-row justify-between max-w-[932px] mx-auto">
          <div className="flex flex-col gap-4">
            <span className="font-bold text-lg">Registered Address</span>
            <span className="text-sm">Premier House</span>
            <span className="text-sm">First Floor, 1-5 Argyle Way</span>
            <span className="text-sm">Stevenage, SG1 2AD</span>
            <span className="text-sm">
              Registered in England and Wales: 14275884
            </span>
          </div>
          <div
            className="bg-white cursor-pointer"
            onClick={() => window.open(RedirectionLinks.sundayTimes, "_blank")}
          >
            <Image
              src="/sunday-times.png"
              alt="sunday times"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="bg-black text-white p-10">
        <div className="flex items-center justify-start md:max-w-[932px] ml-10 md:mx-auto">
          <span>© 2025 The Ombuds Group</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
