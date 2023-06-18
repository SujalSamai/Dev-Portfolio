import React from 'react'
import ArticleCard from './ArticleCard'

const articles = [
  {
    id:1,
    name:"Get your React Forms Right",
    desc:"How to use React Forms in the right way by using Controlled Components, without using like React Hook Form",
    tech:"React.js",
    link:"https://sujalsamai.hashnode.dev/get-your-react-forms-right#claxc94ta01mztlnvciq87cmy"
  },
  {
    id:2,
    name:"Appwrite Community Spotlight: Building VogueEco",
    desc:"Article Featuring the project that helped us win 'Design-a-thon' conducted by MLH. ",
    tech:"React.js, Appwrite",
    link:"https://dev.to/appwrite/community-spotlight-building-vogueeco-a-sustainable-fashion-app-7c8?utm_content=252522006&utm_medium=social&utm_source=twitter&hss_channel=tw-806598100764807170",
  }
]

const Articles = () => {
  return (
    <section className='my-32'>
      <h2 className='text-4xl'>articles.</h2>
      <div className='flex flex-col lg:flex-row flex-wrap gap-8 my-10'>
        {
          articles.map((article)=>{
            return <ArticleCard key={article.id} name={article.name} desc={article.desc} tech={article.tech} link={article.link}/>
          })
        }
      </div>
    </section>
  )
}

export default Articles