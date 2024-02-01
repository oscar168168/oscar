import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="py-4 lg:py-10 border-t">
        <div className="grid lg:grid-cols-2 gap-20">
            <div></div><div></div>
        </div>
      <p className="text-gray-500 text-base text-center">
        © {currentYear} Rat Raksmey
      </p>
    </div>
  );
};
