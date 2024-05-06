import { useState } from 'react'
import htmlImg from '../assets/html.png'
import tailwindImg from '../assets/tailwind-css.png'
import javascriptImg from '../assets/javascript.png'
import typescriptImg from '../assets/typescript.png'
import svelteImg from '../assets/svelte.png'
import reactImg from '../assets/react.png'
import figmaImg from '../assets/figma.png'
import bootstrapImg from '../assets/bootstrap.png'

function Skills() {
    const skillsArr =[
        {
            name:'HTML',
            img: htmlImg
        },
        {
            name:'TAILWIND CSS',
            img: tailwindImg
        },
        {
            name:'JAVASCRIPT',
            img: javascriptImg
        },
        {
            name:'TYPESCRIPT',
            img: typescriptImg
        },
        {
            name:'SVELTE',
            img: svelteImg
        },
        {
            name:'REACT',
            img: reactImg
        },
        {
            name:'FIGMA',
            img: figmaImg
        },
        {
            name:'BOOTSTRAP',
            img: bootstrapImg
        },
    ]
  return (
    <div className='my-16'>
        <h2 className='text-center text-4xl mb-16 text-green font-bold'>Skills</h2>
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
    </div>

  )
}

export default Skills
