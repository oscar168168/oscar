import Image from "next/image";
import React from "react";

const careers = [
  {
    subject: "UX/UI Designer",
    desc: "Recent software development graduate from Norton University, skilled in programming and eager to contribute expertise.",
    date: "2023/Nov - Present",
    company: "Prometeus KC"
  },
  {
    subject: "IT Technicain",
    desc: "Completed Future-Bit UX/UI Design course, gained practical skills, ready to contribute creatively to user-friendly digital experiences.",
    date: "2022/May - 2023/Nov",
    company: "Mytech Mobility"
  },
  {
    subject: "Teacher Assistant",
    desc: "Completed Future-Bit UX/UI Design course, gained practical skills, ready to contribute creatively to user-friendly digital experiences.",
    date: "2020/Oct - 2021/Dec",
    company: "DK Schoolhouse"
  },
];

export const Experience = () => {
  return (
    <div className="lg:-min-h-80 text-gray-800 mt-20 lg:mt-0 w-100  py-4 lg:py-20">
      <div className="mb-8 lg:mb-10">
        <span className="text-lg lg:text-3xl text-gray-800">
        Explore My
        </span>
        <h1 className="text-4xl lg:text-7xl text-medium text-orange-400 lg:mt-4">
          Experience
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-12">
        {careers.map((career) => (
          <div key={career.subject}>
            
            <h3 className="text-xl lg:text-4xl font-medium text-gray-800 ">
              {career.subject}
            </h3>
            <h4 className="text-base lg:text-xl font-medium text-gray-600 py-1">
              {career.company}
            </h4>{" "}
            <p className="text-xs lg:text-sm text-orange-400 py-1">
              {career.date}
            </p>{" "}
            <p className="text-sm lg:text-lg text-gray-500 lg:mt-2 mt-1">
              {career.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
