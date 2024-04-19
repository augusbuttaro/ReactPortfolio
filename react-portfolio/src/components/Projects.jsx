import { useState } from 'react'

function Projects() {
    const projectList = [
        {
            name: "Quizzical",
            img: "src/assets/quizzical-img.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            link: "https://zippy-horse-8f801a.netlify.app/"
        },
        {
            name: "Quizzical",
            img: "src/assets/quizzical-img.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            link: "https://zippy-horse-8f801a.netlify.app/"
        },
        {
            name: "Quizzical",
            img: "src/assets/quizzical-img.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            link: "https://zippy-horse-8f801a.netlify.app/"
        },
        
    ]
    return (
    <div className='flex justify-center m-auto '>
        {projectList.map((project) =>{
            return(
                <div className='bg-pink-seventy m-12 flex flex-col justify-between w-[13%] h-40 p-2
                    rounded-xl cursor-pointer hover:shadow-green hover:w-[18%] hover:h-52'>
                    <img className='object-cover h-5/6 rounded-xl' src={project.img} />
                    <h1 className='text-green text-2xl text-center'>{project.name}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default Projects
