import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "StockOverWatch",
    description:
      "StockOverWatch is a live online stock trading app, to access real stock market data and practice making investments without the risk of monetary loss. This will allow user to gain experience and confidence in trading before investing real money.",
    image: "/StockOverWatch.png",
    github: "https://github.com/LIZXP/StockOverWatch",
    link: "https://stockoverwatch.netlify.app/",
  },
  {
    name: "Interview Scheduler",
    description:
      "Automated interview scheduler application  differentiating roles of participants and allowing each group of users to add edit and customize their calendars.",
    image: "/scheduler.png",
    github: "https://github.com/dungminhnguyen257/scheduler",
    link: "https://stockoverwatch.netlify.app/",
  },
  {
    name: "R-B-map-project",
    description:
      "The application allows registered users to create maps for storing locations based on their interests, and it can help reduce research time and improve the quality of every travel trip.",
    image: "/wikimap.png",
    github:
      "https://github.com/robertocervantesbetancourt/R-B-map-project/tree/merge2",
    link: "https://github.com/robertocervantesbetancourt/R-B-map-project/tree/merge2",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className=" md:w-1/2">
                  <Link href={project.github}>
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
