import React from "react";
import Card from "./Card";
import { FaCode, FaReact, FaCss3 } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { TbDeviceMobileCode } from "react-icons/tb";

const Services = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-16">
        <h2 className="text-center text-purple-800 uppercase text-2xl font-bold">Services</h2>
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Skill sets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card title="HTML, CSS, JavaScript" description="5+ years of experience"
            icon={<FaCode />} />
            <Card title="CSS Frameworks" description="Tailwind, CSS Modules, Styled Components"
            icon={<FaCss3 />} />
            <Card title="Responsive designs" description="Mobile and web responsiveness"
            icon={<CgWebsite />} />
            <Card title="React JS" description="3+ years of experience"
            icon={<FaReact />} />
            <Card title="React Native" description="Mobile app development"
            icon={<TbDeviceMobileCode />} />
            <Card title="Next.js" description="1+ years of experience"
            icon={<RiNextjsLine />} />
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card title="Portfolio Website" description="A fully responsive and interactive online store."
            image="/hero2.svg" />
            <Card title="Portfolio Website" description="A fully responsive and interactive online store."
            image="/hero2.svg" />
            <Card title="Portfolio Website" description="A fully responsive and interactive online store."
            image="/hero2.svg" />
            <Card title="Portfolio Website" description="A fully responsive and interactive online store."
            image="/hero2.svg" />
            <Card title="Portfolio Website" description="A fully responsive and interactive online store."
            image="/hero2.svg" />
            <Card title="Portfolio Website" description="A fully responsive and interactive online store."
            image="/hero2.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
