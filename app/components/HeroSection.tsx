import Image from "next/image";
import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="w-full h-screen bg-gray-100 dark:bg-gray-700 dark:text-white">
      <div className="container mx-auto h-full flex flex-col md:flex-row-reverse gap-6 justify-center md:justify-between items-center px-6 md:px-10 lg:px-16">
        <div className="w-full flex justify-center md:justify-end relative h-[400] md:h-[600]">
          <Image
            src="/hero2.svg"
            alt="Hero Image"
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="w-full text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Hi, I&apos;m <span className="text-purple-800">Collins Adaigho</span>
          </h1>
          <p className="text-lg md:text-xl mt-4 leading-relaxed">
            A frontend developer with a little over 5 years of experience.
          </p>
          <div className="mt-6">
            <Button link="#contact" text="Contact Me" primary />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
