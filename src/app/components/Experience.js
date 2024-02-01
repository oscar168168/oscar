import Image from "next/image";
import React from "react";


const company = [
  {
    subject: "Bachelor Software Development",
    desc: "Recent software development graduate from Norton University, skilled in programming and eager to contribute expertise.",
    date: "2020 - Present",
  },
  {
    subject: "UX/UI Design Short-course",
    desc: "Completed Future-Bit UX/UI Design course, gained practical skills, ready to contribute creatively to user-friendly digital experiences.",
    date: "2020 - Present",
  },
  {
    subject: "UX/UI Design Short-course",
    desc: "Completed Future-Bit UX/UI Design course, gained practical skills, ready to contribute creatively to user-friendly digital experiences.",
    date: "2020 - Present",
  },
];

export const Experience = () => {
  return (
    <div className="lg:min-h-screen text-gray-800 mt-20 lg:mt-0 w-100  py-4 lg:py-20">
      <div className="mb-8 lg:mb-20">
        <span className="text-lg lg:text-3xl text-gray-800">
          Learn More About Me
        </span>
        <h1 className="text-4xl lg:text-7xl text-medium text-orange-400 lg:mt-4">
          Education
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-12">
        {company.map((company) => (
          <div>
            <p className="text-xs lg:text-sm text-gray-400 bg-gray-100 w-fit rounded-full py-1 px-3">
              {company.date}
            </p>{" "}
            
            <h3 className="text-xl lg:text-4xl font-medium text-gray-800 ">
              {company.subject}
            </h3>
            <p className="text-sm lg:text-lg text-gray-500 lg:mt-2 mt-1">
              {company.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
