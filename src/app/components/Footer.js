import Link from "next/link";
import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="py-4 lg:py-10 border-t">
        <div className="lg:mb-6">
          <p className="text-gray-500 text-sm lg:text-base text-center">
            Dangkao, Prey sar, Phnom Penh
          </p>
          <p className="text-gray-500 text-sm lg:text-base text-center my-2 lg:my-4">
            E: ratraksmey@gmail.com | T: +885 11 259 581
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-sm lg:text-base justify-center items-center flex flex-row gap-6">
            <Link href="/">
              LI
            </Link> <span>/</span> <Link href="/">
              BE
            </Link><span>/</span><Link href="/">
              FB
            </Link>
          </p>
        </div>˝
      <p className="text-gray-500 text-sm lg:text-base text-center">
        © {currentYear} Rat Raksmey
      </p>
    </div>
  );
};
