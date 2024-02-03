import Image from "next/image";
import React from "react";


export const AboutMe = () => {
  return (
    <div className="lg:h-screen mt-20 lg:mt-0 w-100 flex py-10 lg:py-20 flex-col lg:flex-row gap-8 lg:gap-4 lg:justify-between items-start">
      <div className="lg:basis-1/2 lg:sticky top-28">
        <span className="text-lg lg:text-3xl text-gray-800">
          Learn More About Me
        </span>
        <h1 className="text-4xl lg:text-7xl text-medium text-orange-400 lg:mt-4">
          1 Year Experience
        </h1>
      </div>
      <div className="lg:basis-1/2">
        <div className="pb-8 lg:pb-8 border-b">
          <h2 className="text-gray-600 text-base lg:text-lg font-light">
            As a recent graduate in software engineering, I bring a year of
            experience to my role, focusing on UX/UI design and front-end
            development. My expertise lies in creating user-centered designs for
            VAS service companies and digital solutions. During this time, I&apos;ve
            collaborated on various projects within the digital realm, gaining
            valuable insights and honing my skills in crafting intuitive
            interfaces for enhanced user experiences.
          </h2>
        </div>
        <div className="mt-4 lg:mt-8">
          <div className="">
            <h3 className="text-gray-800 font-medium text-4xl lg:text-8xl mb-2 lg:mb-4">
              85%
              <span className="text-sm lg:text-xl font-semibold ms-1.5 lg:ms-3">
                Visual Design
              </span>
            </h3>
            <p className="text-gray-600 text-sm lg:text-lg font-light lg:w-3/4">
              Crafting visually appealing interfaces, skilled in Figma, Sketch,
              and user-centric design.
            </p>
          </div>
          <div className="mt-4 lg:mt-8">
            <h3 className="text-gray-800 font-medium text-4xl lg:text-8xl mb-2 lg:mb-4">
              80%
              <span className="text-sm lg:text-xl font-semibold ms-1.5 lg:ms-3">
                UX Design
              </span>
            </h3>
            <p className="text-gray-600 text-sm lg:text-lg font-light lg:w-3/4">
              Enhancing digital experiences through user-centric design,
              empathy, and effective problem-solving.
            </p>
          </div>
          <div className="mt-4 lg:mt-8">
            <h3 className="text-gray-800 font-medium text-4xl lg:text-8xl mb-2 lg:mb-4">
              65%
              <span className="text-sm lg:text-xl font-semibold ms-1.5 lg:ms-3">
                Graphic Design
              </span>
            </h3>
            <p className="text-gray-600 text-sm lg:text-lg font-light lg:w-3/4">
              Creating impactful visuals with a keen eye for aesthetics and
              creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
