"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun } from "react-icons/fa";

type BadgeProps = {
  children?: React.ReactNode;
  badgeSmaller?: boolean;
};

const Badge = ({ children, badgeSmaller = false }: BadgeProps) => {
  const { darkMode, toggleDarkMode, color, setColor } = useTheme();
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);
  


  // Define the four colors for the color picker
  const colors = [
    { name: "Orange", value: "#9a3412" },
    { name: "Purple", value: "#6b21a8" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Green", value: "#166534" },
  ];

  return (
    <div className="relative inline-block">
      {/* Badge button */}

      {badgeSmaller ? (
        <button
        onClick={toggleDarkMode}
        className={`text-sm md:text-base p-2 md:p-3 rounded-full shadow-md transition duration-300 border border-purple-800 ${
            darkMode
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-gray-800"
          }`}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
      ) : (
        <button onClick={() => setShowColorPicker(!showColorPicker)}
        className="text-sm md:text-base p-4 md:p-5 lg:p-6 bg-white rounded-full shadow-md transition duration-300 border border-purple-800"
        style={{ backgroundColor: color }}>
          {children}
        </button>
      )}

      {/* Custom color picker */}
      {showColorPicker && !badgeSmaller && (
        <div className="absolute bottom-full right-0 md:right-1 lg:right-2 mb-2 z-10 p-2 bg-white shadow-lg rounded-lg border">
          <div className="flex flex-col gap-4">
            {colors.map(({ name, value }) => (
              <button
                key={name}
                onClick={() => {
                  setColor(value);
                  setShowColorPicker(false);
                }}
                className="w-8 h-8 rounded-full border-2"
                style={{
                  backgroundColor: value,
                  borderColor: color === value ? "black" : "transparent",
                }}
                aria-label={`Select ${name}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Badge;

