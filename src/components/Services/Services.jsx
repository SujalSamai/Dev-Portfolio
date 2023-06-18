import React from 'react'
import ServiceCard from './ServiceCard'

const services = [
  {
    id:1,
    name:"Frontend Development",
    desc:"We can talk about the nitty gritty of the layouts and design language required for the website, and I can help you create it as it is."
  },
  {
    id:2,
    name:"Backend Development",
    desc: "If you are just starting out as an organization & want to use BaaS platforms, then I can help you set them up in a fully functional way."
  }, 
  {
    id:3,
    name:"UI/UX",
    desc:"I can create beautiful design languages that looks visually appealing as well as improves customer experience as a whole while visiting your site."
  },
  {
    id:4,
    name: "Content Writing",
    desc: "With an experience in writing content for myself & other organizations, I can create content which is easily understandable & can convey more in less words."
  }
]

const Services = () => {
  return (
    <>
      <section className='my-32'>
        <h2 className='text-4xl mb-20'>services.</h2>
        {
          services.map((service)=>{
            return <ServiceCard key={service.id} num={service.id} name={service.name} desc={service.desc}/>
          })
        }
      </section>
    </>
  )
}

export default Services