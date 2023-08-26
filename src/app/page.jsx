import { dmSans } from "@/utils/Fonts";
import {HiArrowDown} from "react-icons/hi"
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import gitshow from "../../public/gitshow.jpg"
import chatbot from "../../public/chatbot.jpg"
import vogueco from "../../public/vogueco.jpg"

const projects = [
  {
    id:1,
    name: "GitShow",
    desc: "A Social-Media platform based on Github, whose main focus is to give you a platform your Github projects in a beautiful way, so that you can focus on the project and we can focus on taking it to the masses.",
    tech:"UI created using React.js & Tailwind CSS. Makes use of Firebase Authentication & Firestore at the backend with extensive use of GitHub API.",
    img:gitshow,
    github:"https://github.com/MadhaviGupta/GitShow",
    live:"https://gitshowbysmg.vercel.app",
  },
  {
    id:2,
    name: "DocBot",
    desc: "An automotic query resolver, which can read your documents and give answers based on them. Supports various document formats like .docx, .pdf, .csv, .xslx etc.",
    tech: "Creates embeddings using OpenAI API & LangChain Framework in Python. Uses FAISS to do similarity search to get accurate results.",
    img:chatbot,
    github:"https://github.com/SujalSamai/customBot",
    live:"https://docbot-chat.streamlit.app"
  },
  {
    id:3,
    name: "VoguEco",
    desc:"VogueEco focusses on the rising issue of increasing Carbon Footprint of the Fashion industry. The goal of this project is to encourage people to Donate their old clothes and Plant a Tree through our initiative.",
    tech: "UI created using React.js & Tailwind CSS. Makes use of Appwrite for Authentication and other backend work.",
    img:vogueco,
    github:"https://github.com/Nishantjain10/VogueEco",
    live:"https://www.vogueeco.us/",
  }
]

export default function Home() {
  return (
    <>
      <main className="flex flex-col lg:flex-row leading-relaxed tracking-wider mt-40">
        <div className="lg:w-4/12">
          <h1 className={`reveal-custom text-5xl pr-2 lg:pr-0 lg:text-6xl font-semibold ${dmSans.className} py-16`}>Hello, I&apos;m Sujal Samai.</h1>
        </div>
        <div className="lg:w-6/12 flex flex-col justify-end items-start mx-auto text-gray-300 text-xl">
          <p className="reveal-custom-info">A final-year web developer student working on creating beautiful layouts and content for the web</p>
        </div>
      </main>
      <div className="mt-28 lg:mt-20 flex justify-end lg:justify-start">
          <HiArrowDown className="w-16 h-16 motion-safe:animate-bounce"/>
      </div>
      <Services/>
      <Projects projects={projects}/>
      <Link href="/work" className='my-10 w-fit border-2 flex items-center gap-1 border-gray-400 hover:border-teal-300 p-2 rounded-lg hover:text-teal-300 transition-all duration-200 ease-in text-base'>View All Projects</Link>
      <div className='my-28 flex flex-col justify-center items-center text-center lg:text-left gap-4'>
        <h3 className='text-2xl'>Wanna know more about me?</h3>
        <Link href="/about" className='w-fit flex items-center gap-1 border-b-2 hover:text-teal-400 transition-colors duration-300'>Click Here <span className='animate-pulse'><BsArrowUpRight/></span></Link>
      </div>
      
    </>
  )
}
