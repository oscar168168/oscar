import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiBehanceLogo, PiFacebookLogo, PiLinkedinLogo } from "react-icons/pi";

export const HeroContent = () => {
  return (
    <div>
      {/* <div className="mb-6 lg:mb-12 flex justify-start">
        <Image
          src="/images/hero.jpeg"
          alt=""
          width={200}
          height={200}
          className="rounded-full border-orange-100 transition duration-300 hover:border-orange-300 border-8"
        />
      </div> */}
      <h1 className="text-zinc-800 text-5xl lg:text-8xl font-normal mb-6 lg:mb-12">
        Pixels with Purpose,{" "}
        <span className="text-orange-400">Designs that Resonate.</span>
      </h1>
      <div className="flex flex-col lg:flex-row lg:items-center justify-start  lg:justify-between">
        {" "}
        <h2 className="text-zinc-800 text-lg lg:text-2xl font-light mb-4  lg:w-3/5">
          I’m Raksmey A UX/UI Designer. I specialize in crafting intuitive and
          visually appealing user experiences through UX/UI design.
        </h2>
        <div className="gap-4 flex lg:flex-col">
          <Link href="/">
            <p className="text-gray-900 p-2">
              <PiBehanceLogo size={24} />
            </p>
          </Link>
          <Link href="/">
            <p className="text-gray-900 p-2">
              <PiFacebookLogo size={24} />
            </p>
          </Link>
          <Link href="/">
            <p className="text-gray-900 p-2">
              <PiLinkedinLogo size={24} />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
