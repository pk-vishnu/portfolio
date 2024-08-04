"use-client";
import React from "react";

const experiences = [
  {
    title: "Full Stack Web Developer",
    company: "AstuteAI",
    duration: "06/2024 - Present",
    location: "Remote",
    description:
      "Enhancing Business Processes with Advanced Generative AI Solutions",
    techStack: "Tech Stack: Python (Flask, FastAPI, langchain), SQL, ReactJs",
  },
  {
    title: "Core Committee Member",
    company: "IEEE Computer Society",
    duration: "05/2023 - Present",
    location: "Vellore, India",
    description:
      "R&D. Content writing - blogs, Research Paper on RL in Energy Consumption",
    techStack: "",
  },
  {
    title: "Producer",
    company: "VIT Music Club",
    duration: "05/2023 - Present",
    location: "Vellore, India",
    description: "Core Member, Music Producer",
    techStack: "",
  },
];

export default function Experience() {
  return (
    <div className="relative mx-auto px-4 py-2 max-w-screen-lg mt-9 font-poppins">
      <h2 className="text-4xl font-mono mb-6 text-center text-white">
        Work Experience
      </h2>
      <div className="relative flex flex-col items-start">
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-12 p-6 text-white">
            {/* {index < experiences.length - 1 && (
              <div
                className={`absolute top-1/2 left-4 w-[2px] bg-gray-500 ${
                  index === experiences.length - 2 ? "h-1/2" : "h-full"
                }`}
              ></div>
            )} */}
            <div className="flex items-start">
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-800"></div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-300">
                  {exp.duration} · {exp.location}
                </p>
                <p className="mt-2 text-gray-300">{exp.description}</p>
                {exp.techStack && (
                  <p className="mt-2 text-sm font-light text-gray-400">
                    {exp.techStack}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
