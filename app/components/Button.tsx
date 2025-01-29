import Link from "next/link";
import React from "react";

type ButtonProps = {
  link: string;
  text: string;
  primary?: boolean;
  buttonSmaller?: boolean;
};

const Button = ({ link, text, buttonSmaller= false, primary = false }: ButtonProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block font-bold rounded-lg transition duration-300 py-2 md:py-3 ${
        primary
          ? " bg-purple-800 text-white hover:bg-purple-700"
          : "bg-white text-purple-800 border-2 border-purple-800 hover:bg-purple-800 hover:text-white"
      } ${buttonSmaller ? "text-sm md:text-md px-4 md:px-6" : "text-md md:text-lg px-6 md:px-8"}`}
    >
      {text}
    </Link>
  );
};

export default Button;
