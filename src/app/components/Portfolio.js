import Image from "next/image";
import React from "react";

const projects = [
  {
    image: "/images/portfolio1.png",
    title: "Company Landing Website - Prometeus KC",
    desc: "Explore Prometeus KC's dynamic landing site, showcasing innovative solutions, expertise, and a commitment to excellence in every aspect.",
  },
];

export const Portfolio = () => {
  return (
    <div className="lg:min-h-screen text-gray-800 mt-10 lg:mt-0 w-100  py-4 lg:py-10">
      <div className="mb-8 lg:mb-10 text-center">
        <span className="text-lg lg:text-3xl text-gray-800">Showcasing</span>
        <h1 className="text-4xl lg:text-7xl text-medium text-orange-400 lg:mt-4">
          My Professional Journey and Achievements
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project) => (
            <div key={project.title}>
              <div className="flex lg:justify-center lg:items-center py-4">
                <Image
                  src={project.image}
                  width={600}
                  height={600}
                  alt="portfolio"
                />
              </div>
              <h3 className="text-lg lg:text-2xl font-semibold text-gray-800 lg:text-center my-3 lg:my-6">
                {project.title}
              </h3>
              <p className="text-sm lg:text-lg text-gray-500 lg:text-center lg:mt-2 mt-1">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
