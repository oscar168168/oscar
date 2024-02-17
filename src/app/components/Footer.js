import Link from "next/link";
import React from "react";

const socials = [
  {
    name: "LI.",
    href: "https://www.linkedin.com/in/rat-raksmey-9abb36281/",
  },
  {
    name: "BE.",
    href: "https://www.behance.net/raksmeyrat",
  },
  {
    name: "FB.",
    href: "https://www.facebook.com/doublepainz",
  },
  {
    name: "TE.",
    href: "https://t.me/doublepainz",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="py-4 lg:py-10 border-t bg-[#fafaff] text-center">
      <div className="lg:mb-6">
        <p className="lg:text-base">
          Dangkao, Prey sar, Phnom Penh
        </p>
        <p className="lg:text-base my-2 lg:my-4">
          E: ratraksmey@gmail.com | T: +885 11 259 581
        </p>
      </div>
      <div className="lg:mb-4">
        <p className="text-gray-800 font-medium  decoration-underline justify-center items-center flex flex-row gap-6">
          {socials.map((social) => (
            <Link key={social.name} href={social.href}>
              {social.name}
            </Link>
          ))}
        </p>
      </div>
      <p className="lg:text-base">
        © {currentYear}, Rat Raksmey
      </p>
    </div>
  );
};
