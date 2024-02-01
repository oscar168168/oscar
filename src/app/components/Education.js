import Image from "next/image";
import React from "react";

const school = [
  {
    image: "/images/norton.png",
    subject: "Bachelor Software Development",
    desc: "Recent software development graduate from Norton University, skilled in programming and eager to contribute expertise.",
    date: "Nov/2019 - Jan/2023",
  },
  {
    image: "/images/future-bit.png",
    subject: "UX/UI Design Short-course",
    desc: "Completed Future-Bit UX/UI Design course, gained practical skills, ready to contribute creatively to user-friendly digital experiences.",
    date: "Jul/2023 - September/2023",
  },
  {
    image: "/images/instinct.png",
    subject: "Basic Software Development Short-course",
    desc: "Completed Instinct Institute's Basic Software Development course, acquired fundamental skills, ready to build on a strong foundation.",
    date: "2022/Mar - 2022/Jun",
  },
  {
    image: "/images/northline.png",
    subject: "Graduated High School",
    desc: "Graduated from The Northline School in Khmer and English in 2019, bilingual education accomplishment.",
    date: "2015/Sep - 2019/Nov",
  },
];

export const Education = () => {
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
      <div className="grid lg:grid-cols-2 gap-20">
        {school.map((school) => (
          <div>
            <p className="text-xs lg:text-sm text-gray-400 bg-gray-100 w-fit rounded-full py-1 px-3">
              {school.date}
            </p>{" "}
            <div className="py-4">
              <Image src={school.image} alt="" width={200} height={200} />
            </div>
            <h3 className="text-xl lg:text-4xl font-medium text-gray-800 ">
              {school.subject}
            </h3>
            <p className="text-sm lg:text-lg text-gray-500 lg:mt-2 mt-1">
              {school.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
