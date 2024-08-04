import Art from "./art/Art";
import Music from "./music/Music";
import Type from "./type/Type";
import Navbar from "../components/navbar/Navbar";
import { SparklesCore } from "@/components/ui/sparkles";
import Blogs from "./blogs/Blog";
export default function Page() {
  return (
    <>
      <Navbar />
      <div className="h-[20rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-5xl font-semibold text-center text-white relative z-20 font-poppins">
          Non-Technical
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
        <div className="-mt-20 text-lg md:text-2xl text-gray-400 mx-auto w-full sm:w-1/2 text-center font-serif z-50">
          <i>&quot;Beyond the Code: Where Creativity Meets Curiosity&quot;</i>
        </div>
      </div>
      <Music />
      <Art />
      <Type />
      <Blogs />
    </>
  );
}
