"use-client";
import React from "react";

const courses = [
  {
    title: "AWS Cloud Practitioner",
    year: "2024",
    link: "https://www.credly.com/badges/7c20b34a-3b03-4e55-9fff-2b4b292fff6a/public_url",
  },
  {
    title: "Udemy - Machine Learning A-Z: AI, Python & R",
    year: "2024",
  },
  {
    title: "Natural Language Processing Specialization by Deeplearning.AI",
    duration: "05/2024 - Present",
  },
];

export default function Courses() {
  return (
    <div className="mx-auto px-4 py-6 max-w-screen-lg font-poppins">
      <h2 className="text-4xl font-mono mb-6 text-center text-white">
        Additional Courses and Certifications
      </h2>
      <div className="space-y-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative p-6 bg-gray-900 bg-opacity-35 rounded-lg border border-gray-700 dark:bg-gray-900 dark:border-gray-600"
          >
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-gray-900 dark:border-gray-800"></div>
            <div className="ml-8">
              <h3 className="text-xl font-semibold text-white">
                {course.title}
              </h3>
              {course.link && (
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-blue-400 underline"
                >
                  View Certificate
                </a>
              )}
              {course.year && (
                <p className="mt-2 text-gray-400">{course.year}</p>
              )}
              {course.duration && (
                <p className="mt-2 text-gray-400">{course.duration}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
