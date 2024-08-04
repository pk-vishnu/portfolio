"use-client";

import React from "react";
export default function Techstack() {
  const techStack = [
    "Python",
    "C",
    "C++",
    "Java",
    "HTML/CSS/JS",
    "Tailwind",
    "Javascript",
    "Django",
    "Flask",
    "PHP",
    "Git",
    "ML",
    "NLP",
    "REST API",
    "ExpressJS",
    "React",
    "SQL",
    "MongoDB",
    "Cryptography",
  ];

  return (
    <div className="p-8 rounded-lg shadow-lg font-poppins">
      {/* <h2 className="text-3xl font-mono mb-6 text-center text-white">
        <span>&lt;TechStack /&gt;</span>
      </h2> */}
      <div className="flex flex-wrap justify-center gap-4">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 hover:bg-gray-700 transition-colors duration-300 ease-in-out"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
