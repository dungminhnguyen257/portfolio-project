import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Ruby" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "StoryBook" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "StoryBook" },
  { skill: "Jest" },
  { skill: "Cypress" },
];

export const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get To Know Me,
            </h1>
            <div className="flex justify-center md:justify-start md:mt-2 md:w-1/2">
              <div className=" pb-10">
                <Image
                  className="rounded-full"
                  src="/portrait.jpg"
                  alt=""
                  width={325}
                  height={325}
                />
              </div>
            </div>
            <p>
              Hi, my name is Bryan and I am an{" "}
              <span className="font-bold">{"ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> web developer based
              in Toronto.
            </p>
            <br />
            <p>
              I graduated from Lighthouse Labs web developing bootcamp in 2022.
            </p>
            <br />
            <p>
              Outside of my professional pursuits, I engage in a diverse range
              of hobbies and passions that enrich my life. I have a strong
              affinity for fitness, dedicating time to exercise regularly.
              Additionally, my love for knowledge leads me to immerse myself in
              reading books and documentations on history and philosophy,
              fostering a continuous quest for learning and personal growth.
            </p>
            <br />
            <p></p>
          </div>
          <p></p>
          <div className="md:w-1/2 ">
            <h1 className="text-2xl font-bold mb-6">Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
