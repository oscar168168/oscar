import React from "react";
import { HeroContent } from "./HeroContent";

export const HeroSection = () => {
  return (
    <div className="lg:min-h-80 mt-20 lg:mt-0 flex justify-center items-center py-4 lg:py-20">
      <HeroContent />
    </div>
  );
};
