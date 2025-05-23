"use client";
import { RedirectionLinks } from "@/lib/constants";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Image src="/ombud.png" alt="ombud" width={450} height={38} />

      <div className="flex flex-col md:flex-row gap-10 mt-10">
        <Image
          src="/dro.png"
          alt="ombud"
          width={180}
          height={38}
          onClick={() => window.open(RedirectionLinks.dro, "_blank")}
          className="hover:cursor-pointer"
        />
        <Image
          src="/fhio.png"
          alt="ombud"
          width={180}
          height={38}
          onClick={() => window.open(RedirectionLinks.fhio, "_blank")}
          className="hover:cursor-pointer"
        />
        <Image
          src="/tro.png"
          alt="ombud"
          width={180}
          height={38}
          onClick={() => window.open(RedirectionLinks.tro, "_blank")}
          className="hover:cursor-pointer"
        />
        <Image
          src="/ifo.png"
          alt="ombud"
          width={180}
          height={38}
          onClick={() => window.open(RedirectionLinks.ifo, "_blank")}
          className="hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
