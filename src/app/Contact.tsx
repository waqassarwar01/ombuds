"use client"
import { RedirectionLinks } from "@/lib/constants";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-10 pb-20">
      <span className="font-bold">Contact</span>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col gap-1 bg-[#EDEDED] p-10 w-[300px] h-[180px]">
          <span className="font-bold">Call us on</span>
          <span className="text-[#1A4A61] text-2xl font-bold">
            0333 241 3209
          </span>
          <span className="text-sm">Monday to Friday: 9am to 5pm</span>
        </div>
        <div className="flex items-center gap-4 bg-[#EDEDED] p-10 w-[300px] h-[180px]">
          <div
            className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1A4A61] hover:cursor-pointer"
            onClick={() => window.open(RedirectionLinks.linkedin, "_blank")}
          >
            <Linkedin color="white" />
          </div>
          <div
            className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1A4A61] hover:cursor-pointer"
            onClick={() => window.open(RedirectionLinks.bluesky, "_blank")}
          >
            <Image
              src="/butterfly.png"
              alt="butterfly"
              width={40}
              height={40}
            />
          </div>
          <div
            className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1A4A61] hover:cursor-pointer"
            onClick={() => window.open(RedirectionLinks.twitter, "_blank")}
          >
            <Image src="/twitter.svg" alt="butterfly" width={30} height={30} />
          </div>
        </div>
        <div className="flex flex-col gap-1 bg-[#EDEDED] p-10 w-[300px] h-[180px]">
          <span>Email us at</span>
          <span className="text-[#1A4A61] font-bold text-lg">
            info@ombuds.group
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
