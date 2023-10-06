import { dmSans } from "@/utils/Fonts";
import {HiArrowDown} from "react-icons/hi"
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import gitshow from "../../public/gitshow.jpg"
import chatbot from "../../public/chatbot.jpg"
import cart from "../../public/cart.jpg"

const projects = [
  {
    id:1,
    name: "GreenKart",
    desc: "One-stop destination for sustainable and environmentally conscious shopping! In a world where our choices have a profound impact on the planet, we believe that e-commerce can be a force for good. Through Greenkart, we aim to provide you with a unique online shopping experience that not only caters to your needs but also champions the well-being of our planet.",
    tech:"UI created using Next.js, React Toastify & Tailwind CSS. Makes use of Firebase & MongoDB at the backend with extensive use of Next.js API capabilities. Also uses Stripe Payment gateway for payment integration.",
    img:cart,
    github:"https://github.com/SujalSamai/Greenkart",
    live:"https://github.com/SujalSamai/Greenkart",
  },
  {
    id:2,
    name: "GitShow",
    desc: "A Social-Media platform based on Github, whose main focus is to give you a platform your Github projects in a beautiful way, so that you can focus on the project and we can focus on taking it to the masses.",
    tech:"UI created using React.js & Tailwind CSS. Makes use of Firebase Authentication & Firestore at the backend with extensive use of GitHub API.",
    img:gitshow,
    github:"https://github.com/MadhaviGupta/GitShow",
    live:"https://gitshowbysmg.vercel.app",
  },
  {
    id:3,
    name: "DocBot",
    desc: "An automotic query resolver, which can read your documents and give answers based on them. Supports various document formats like .docx, .pdf, .csv, .xslx etc.",
    tech: "Creates embeddings using OpenAI API & LangChain Framework in Python. Uses FAISS to do similarity search to get accurate results.",
    img:chatbot,
    github:"https://github.com/SujalSamai/customBot",
    live:"https://docbot-chat.streamlit.app"
  },
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
        <Link href={"/resume"} className='reveal-custom-info w-fit flex items-center gap-1 bg-stone-950 py-2 px-5 rounded-lg hover:text-teal-400 transition-colors duration-300 mt-12 md:mt-0'>View Resume <span className='animate-pulse'><BsArrowUpRight/></span></Link>
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
