"use-client";
import React from "react";

const achievements = [
  {
    title: "🥈2nd Place in 'Prudentia Hackathon' by IEEE VIT (Yantra 24')",
    description:
      "Project BlockFund - Decentralised crowdfunding and governance",
  },
  {
    title: "Selected for Final Round of Code For Good Hackathon 2024 by JPMC",
    description: "",
  },
  {
    title: "Top 10 in 'Right A Tune' Music Hackathon",
    description: "",
  },
];

export default function Achievements() {
  return (
    <div className="mx-auto px-4 py-6 max-w-screen-lg font-poppins">
      <h2 className="text-4xl font-mono mb-6 text-center text-white">
        🏅 Achievements
      </h2>
      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="relative p-6 bg-gray-900 rounded-lg border border-gray-700 dark:bg-gray-900 dark:border-gray-600 bg-opacity-35"
          >
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-white">
                {achievement.title}
              </h3>
              {achievement.description && (
                <p className="mt-2 text-gray-400">{achievement.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
