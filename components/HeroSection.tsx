"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 md:flex-row md:space-x-4">
        <div>
          <Image
            className="rounded-md"
            src="/portrait .jpg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div>
          <h1 className="font-bold text-4xl mt-6">Hello, this is Bryan!</h1>
          <p className="text-lg mt-4 mb-6">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">Web Developer </span>
            based in Toronto, Ontario.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
