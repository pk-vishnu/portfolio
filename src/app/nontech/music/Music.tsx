import React from "react";

export default function Music() {
  return (
    <div className="flex justify-center">
      <div className="bg-gray-900 bg-opacity-25 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 dark:border-white/[0.2] border-black/[0.1] max-w-6xl w-full h-auto rounded-xl p-8 border shadow-lg font-poppins">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white">
              Passion for Music Production
            </h2>
            <p className="text-gray-300 text-lg mt-4">
              With over 4 years of experience in FL Studio, I've developed a
              deep passion for music production and keyboard performance. My
              journey in music has been a thrilling exploration of creativity
              and sound.
            </p>
          </div>
          <div className="flex-1">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/9ZhOpZ22laQ?autoplay=1&mute=1&loop=1&playlist=9ZhOpZ22laQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
