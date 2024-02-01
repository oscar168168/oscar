import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiEquals, PiHamburger } from "react-icons/pi";

const navigation = [
  { name: "About me", href: "#aboutme" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Portfolio", href: "#portfolio" },
];
export const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8 bg-[#fafaff60] border-b backdrop-blur-lg"
        aria-label="Global"
      >
        <div className="hidden lg:flex lg:gap-x-12 transition duration-200">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-light leading-6 text-gray-900 transition duration-200 hover:text-orange-400"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex">
          <Link href="#hero" className="-m-1.5 p-1.5 flex flex-row gap-1">
            <Image
              src="/images/profile.jpeg"
              alt=""
              width={48}
              height={48}
              className="rounded-full border"
            />
            {/* <span className="text-gray-900">Rat Raksmey</span> */}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <PiEquals className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
};
