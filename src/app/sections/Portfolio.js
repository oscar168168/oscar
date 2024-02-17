"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { PiArrowUpRight } from "react-icons/pi";

const projects = [
  {
    image: "/images/port1.png",
    href: "https://www.prometeus-kc.com/",
    title: "Company Landing Website - Prometeus KC",
    specialist: ["UX/UI"],
    desc: "Explore Prometeus KC's dynamic landing site, showcasing innovative solutions, expertise, and a commitment to excellence in every aspect.",
  },
  {
    image: "/images/port2.png",
    href: "https://raksmey-rat-portfolio.vercel.app/",
    title: "My Web Portfolio",
    specialist: ["UX/UI", "Develop"],
    desc: "I developed this portfolio site by using Next.js and Tailwind CSS to showcase my skills and experience, highlighting my projects, skills, and achievements.",
  },
  {
    image: "/images/port3.png",
    href: "#",
    title: "Medical Appointment Booking",
    specialist: ["UX/UI"],
    desc: "I developed this medical appointment booking site using React.js and Tailwind CSS to showcase my expertise in medical appointments, booking, and patient management.",
  },
];

export const Portfolio = () => {
  return (
    <div className="lg:min-h-screen my-10 lg:my-0 w-100  pt-24">
      <div className="lg:flex justify-between">
        <div className="mb-8 lg:mb-20">
          <h5 className="">Showcasing</h5>
          <h2 className="text-primary lg:mt-4">
            My Professional Journey and Achievements
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project) => (
              <div className="lg:mb-8" key={project.title}>
                <div className="py-4">
                  <div className="flex justify-center lg:justify-start gap-4">
                    <Link target="_blank" href={project.href}>
                      <Image
                        className="rounded-lg"
                        src={project.image}
                        width={600}
                        height={600}
                        alt="portfolio"
                      />
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between items-center my-1.5 lg:my-3">
                  <h5 className="">{project.title}</h5>
                  <Link
                    target="_blank"
                    href={project.href}
                    className="p-2 rounded-full bg-orange-400 text-white lg:me-5 hover:rotate-45 hover:bg-orange-300 transition duration-300"
                  >
                    {" "}
                    <PiArrowUpRight size={20} />
                  </Link>
                </div>

                <p className="lg:my-4 my-2">{project.desc}</p>
                <div className="flex lg:gap-6 gap-3 mb-2">
                  {project.specialist.map((specialist, index) => (
                    <p
                      key={index}
                      className="px-6 py-1 bg-gray-100 lg:text-base font-medium rounded-full"
                    >
                      {specialist}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
