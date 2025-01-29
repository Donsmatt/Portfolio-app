import Link from "next/link";
import React from "react";
import Button from "./Button";
import Badge from "./Badge";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10 dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto flex justify-between items-center px-2 py-4 md:px-6 lg:px-8">
        <Link href="/" className="text-xl md:text-2xl font-semibold">
          Portfolio
        </Link>
        <nav className="flex items-center gap-8">
          <Badge badgeSmaller />
          <Button link="/resume.pdf" text="View Resume" buttonSmaller />
        </nav>
      </div>
    </header>
  );
};

export default Header;
