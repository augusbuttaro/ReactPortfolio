import { useState } from 'react'


function Skills() {
    const skillsArr =[
        {
            name:'HTML',
            img:'src/assets/html.png'
        },
        {
            name:'TAILWIND CSS',
            img:'src/assets/tailwind-css.png'
        },
        {
            name:'JAVASCRIPT',
            img:'src/assets/javascript.png'
        },
        {
            name:'TYPESCRIPT',
            img:'src/assets/typescript.png'
        },
        {
            name:'SVELTE',
            img:'src/assets/svelte.png'
        },
        {
            name:'REACT',
            img:'src/assets/react.png'
        },
        {
            name:'FIGMA',
            img:'src/assets/figma.png'
        },
        {
            name:'BOOTSTRAP',
            img:'src/assets/bootstrap.png'
        },
    ]
  return (
    <div className='flex flex-wrap gap-8 m-auto justify-center w-[50%]'>
        {skillsArr.map((skill, index)=>{
            return(
                <div key={index} className='select-none'>
                    <img className='h-16 w-16 mx-8 mb-2' src={skill.img}/>
                    <p className='text-center text-green font-bold'>{skill.name}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Skills
