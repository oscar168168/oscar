import Image from "next/image";
import React from "react";

const careers = [
  {
    subject: "UX/UI Designer",
    desc: "Recent software development graduate from Norton University, skilled in programming and eager to contribute expertise.",
    date: "2023/Nov - Present",
    company: "Prometeus KC",
    image: "/images/exp1.webp",
  },
  {
    subject: "IT Technicain",
    desc: "Completed Future-Bit UX/UI Design course, gained practical skills, ready to contribute creatively to user-friendly digital experiences.",
    date: "2022/May - 2023/Nov",
    company: "Mytech Mobility",
    image: "/images/exp2.webp",
  },
  {
    subject: "Teacher Assistant",
    desc: "Completed Future-Bit UX/UI Design course, gained practical skills, ready to contribute creatively to user-friendly digital experiences.",
    date: "2020/Oct - 2021/Dec",
    company: "DK Schoolhouse",
    image: "/images/exp3.webp",
  },
];

export const Experience = () => {
  return (
    <div className="lg:-min-h-80 text-gray-800 mt-20 lg:mt-0 w-100  pt-24">
      <div className="mb-8 lg:mb-10">
        <span className="text-lg lg:text-3xl text-gray-800">
        Explore My
        </span>
        <h1 className="text-4xl lg:text-7xl font-semibold text-orange-400 lg:mt-4">
          Experience
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-12">
        {careers.map((career) => (
          <div className="" key={career.subject}>
            <Image src={career.image} alt="exp" width={200} height={200} />
            <h3 className="text-xl lg:text-3xl font-semibold text-gray-800 ">
              {career.subject}
            </h3>
            <h4 className="text-base lg:text-xl font-medium text-orange-400 py-1">
              {career.company}
            </h4>{" "}
            <p className="text-sm lg:text-base text-gray-600 py-1">
              {career.date}
            </p>{" "}
            <p className="text-sm lg:text-lg text-gray-500 mt-1">
              {career.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
