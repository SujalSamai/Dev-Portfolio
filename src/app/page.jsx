import { dmSans } from "@/utils/Fonts";
import {HiArrowDown} from "react-icons/hi"
import Projects from "@/components/Projects/Projects";
import Stack from "@/components/Stack/Stack";

export default function Home() {
  return (
    <>
      <main className="flex leading-relaxed tracking-wider mt-10">
        <div className="w-4/12">
          <h1 className={`text-6xl font-semibold ${dmSans.className} py-16`}>Hello, I'm Sujal Samai.</h1>
        </div>
        <div className="w-6/12 flex flex-col justify-end items-start mx-auto text-gray-300 text-xl">
          <p className=" ">A final-year web developer student working on creating beautiful layouts and content for the web</p>
        </div>
      </main>
      <div className="mt-20">
          <HiArrowDown className="w-16 h-16 motion-safe:animate-bounce"/>
      </div>
      <Projects/>
      <Stack/>
    </>
  )
}
