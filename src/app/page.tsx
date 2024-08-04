import React from "react";
import Navbar from "./components/navbar/Navbar";
import Navbar1 from "./components/navbar1/Navbar";
export default function Home() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-opacity-50">
        <div className="absolute top-0 left-0 h-full w-full">
          <div className="relative h-full">
            <img
              src="me.png" // Replace with the path to your image
              alt="Vishnu P K"
              className="absolute top-0 left-0 h-full object-cover opacity-65"
              style={{ width: "60%", height: "auto" }} // Adjust width as needed
            />
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-transparent to-black"></div>
          </div>
        </div>
        <div className="relative max-w-3xl w-full space-y-8 text-center z-10">
          <div className="text-4xl md:text-6xl font-extrabold text-white">
            I am Vishnu P K
          </div>
          <div className="mt-4 text-lg md:text-2xl text-gray-400">
            A tech enthusiast eager to dive into the tech world and contribute
            to exciting projects. I am dedicated, motivated, and have a deep
            passion for innovation.
          </div>
          <div className="mt-4 text-gray-400">
            <a
              href="mailto:vishnuvpk05@gmail.com"
              className="hover:text-gray-300"
            >
              Email
            </a>
            <span className="mx-2">|</span>
            <a
              href="https://www.linkedin.com/in/vishnu-p-k/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              LinkedIn
            </a>
            <span className="mx-2">|</span>
            <a
              href="https://github.com/pk-vishnu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              GitHub
            </a>
          </div>

          <Navbar1 />
        </div>
      </div>
    </>
  );
}
