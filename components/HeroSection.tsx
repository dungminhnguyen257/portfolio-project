import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home">
      <div>
        <div>
          <Image src="/portrait .jpg" alt="" width={300} height={300} />
        </div>
        <div>
          <h1>Hello, this is Bryan!</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
