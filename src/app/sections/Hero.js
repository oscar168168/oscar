import Link from "next/link";
import React from "react";
import { PiBehanceLogo, PiFacebookLogo, PiLinkedinLogo } from "react-icons/pi";

export const HeroSection = () => {
  return (
    <div className="lg:min-h-80 mt-20 lg:mt-0 justify-center items-center py-10 lg:py-20">
      <h1 className="text-zinc-800 text-5xl lg:text-8xl font-medium mb-6 lg:mb-12">
        Pixels with Purpose,{" "}
        <span className="text-primary">Designs that Resonate.</span>
      </h1>
      <div className="flex flex-col lg:flex-row lg:items-center justify-start  lg:justify-between">
        {" "}
        <h2 className="text-zinc-800 text-lg lg:text-2xl font-light mb-4  lg:w-3/5">
          I&apos;m Raksmey A UX/UI Designer. I specialize in crafting intuitive and
          visually appealing user experiences through UX/UI design.
        </h2>
        <div className="gap-4 flex lg:flex-col">
          <Link target="_blank" href="https://www.behance.net/raksmeyrat">
            <p className="text-gray-900 p-2">
              <PiBehanceLogo size={24} />
            </p>
          </Link>
          <Link target="_blank" href="https://www.facebook.com/doublepainz">
            <p className="text-gray-900 p-2">
              <PiFacebookLogo size={24} />
            </p>
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/rat-raksmey-9abb36281/">
            <p className="text-gray-900 p-2">
              <PiLinkedinLogo size={24} />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
