"use-client";
import Navbar from "../components/navbar/Navbar";
import Achievements from "./achievements/Achievements";
import Courses from "./courses/Courses";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Techstack from "./techstack/Techstack";
import { SparklesCore } from "@/components/ui/sparkles";
export default function Page() {
  return (
    <>
      <Navbar />
      {/* <div className="flex flex-col text-center w-full mb-14 mt-28">
        <h1 className="sm:text-6xl mb-5 text-2xl bg-gradient-to-r from-violet-900 via-violet-400 to-violet-200 inline-block text-transparent bg-clip-text font-semibold title-font font-poppins">
          Technical
        </h1>
        <div className="mt-4 text-lg md:text-2xl text-gray-400 mx-auto w-full sm:w-1/2 text-center ">
          <i>"Transforming caffeine into code, one innovation at a time!"</i>
        </div>
      </div> */}
      <div className="h-[20rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-5xl font-semibold text-center text-white relative z-20 font-poppins">
          Technical
        </h1>
        <div className="w-[40rem] h-28 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <div className="-mt-20 text-lg md:text-2xl text-gray-400 mx-auto w-full sm:w-1/2 text-center font-mono z-50">
          <i>"Transforming caffeine into code, one innovation at a time!"</i>
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg px-4 py-6">
        <Techstack />
        <hr className="my-8 border-gray-600 dark:border-gray-300" />
        <Projects />
        <hr className="my-8 border-gray-600 dark:border-gray-300" />
        <Experience />
        <hr className="my-8 border-gray-600 dark:border-gray-300" />
        <Achievements />
        <hr className="my-8 border-gray-600 dark:border-gray-300" />
        <Courses />
        <hr className="my-8 border-gray-600 dark:border-gray-300" />
      </div>
    </>
  );
}
