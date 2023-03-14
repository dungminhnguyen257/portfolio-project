import React from "react";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
];

export const AboutSection = () => {
  return (
    <section>
      <div>
        <h1 className="text-center font-bold text-4xl">About Me</h1>
        <div>
          <div>
            <h1>Get To Know Me,</h1>

            <p>
              Hi, my name is Bryan and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> web developer based
              in Toronto.
            </p>
            <br />
            <p>
              I graduated from Lighthouse Labs web devloping bootcamp in 2019.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              Reading, Workingout, traveling to name a few of them.
            </p>
            <br />
            <p></p>
          </div>
          <p></p>
        </div>
        <div></div>
        <h1>Skills</h1>
      </div>
    </section>
  );
};
