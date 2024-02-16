"use client";
// components/Header.js
import React, { useState } from "react";
import { PiEquals, PiTelegramLogo, PiX } from "react-icons/pi";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "About me", href: "#aboutme" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Portfolio", href: "#portfolio" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav
        className="flex items-center justify-between py-4 px-4 lg:px-8 bg-[#fafaff60] border-b backdrop-blur"
        aria-label="Global"
      >
        <div className="hidden lg:flex lg:gap-x-12 justify-center items-center transition duration-200">
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

        <div className="flex gap-x-8">
        <button
            type="button"
            className="lg:flex hidden justify-center items-center gap-2 text-sm lg:text-base font-light leading-6 px-2 py-1 lg:px-5 lg:py-2.5 bg-orange-400 rounded-full transition duration-200 hover:bg-orange-500"
          >
            {" "}
            <Link target="_blank" href="https://t.me/doublepainz" className="">
              Contact
            </Link>
            <PiTelegramLogo size={16} />
          </button>
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <PiEquals className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className={`lg:hidden transition-opacity duration-300 ease-in-out ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#fafaff] px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b pb-6">
            <Link href="#hero" className="-m-1.5 p-1.5 flex flex-row gap-1">
              <Image
                onClick={() => setMobileMenuOpen(false)}
                src="/images/profile.jpeg"
                alt=""
                width={48}
                height={48}
                className="rounded-full border"
              />
              {/* <span className="text-gray-900">Rat Raksmey</span> */}
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <PiX className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-900 hover:bg-orange-200"
                  >
                    {item.name}
                  </Link>
                ))}
                <hr className="border-gray-900/10"></hr>
                <Link
                  target="_blank"
                  href="https://t.me/doublepainz"
                  className="-mx-3 flex justify-start items-center gap-2  rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-900 hover:bg-orange-200"
                >
                  Contact <PiTelegramLogo size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
