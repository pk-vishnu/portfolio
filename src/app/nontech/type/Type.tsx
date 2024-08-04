import React from "react";

export default function SpeedTyping() {
  return (
    <div className="flex justify-center">
      <div className="bg-gray-900 bg-opacity-25 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 dark:border-white/[0.2] border-black/[0.1] max-w-6xl w-full h-auto rounded-xl p-8 border shadow-lg font-poppins">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white">
              Speed Typing Mastery
            </h2>
            <p className="text-gray-300 text-lg mt-4">
              During the pandemic, I picked up speed typing as a fun skill. Now,
              I can effortlessly type between 120 to 150 WPM, showcasing both my
              quick reflexes and dedication to improving this quirky yet useful
              talent.{" "}
              <a
                href="https://monkeytype.com/profile/IamVPK"
                className="text-blue-400 hover:text-blue-600"
              >
                Monkeytype Profile
              </a>
            </p>
          </div>
          <div className="flex-1">
            <img
              src="image.png"
              alt="Monkeytype Profile Screenshot"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
