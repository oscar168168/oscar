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
    <div className="lg:-min-h-80 mt-20 lg:mt-0 w-100  pt-24">
      <div className="mb-8 lg:mb-10">
        <h5 className="">
        Explore My
        </h5>
        <h2 className="text-primary lg:mt-4">
          Experience
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-12">
        {careers.map((career) => (
          <div key={career.subject}>
            <Image src={career.image} alt="exp" width={250} height={250} />
            <h5>
              {career.subject}
            </h5>
            <div className="flex justify-between items-center my-1 lg:my-3">
            <h6 className="text-orange-400 ">
              {career.company}
            </h6>{" "}
            <p className="text-gray-500 lg:text-base pe-3">
              {career.date}
            </p>{" "}</div>
            <p className="">
              {career.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
