import { useState } from 'react'
import topLeft from "../assets/top-left.png"
import bottomRight from "../assets/bottom-right.png"
import profilePic from "../assets/profile-pic.jpg"

function Hero() {
    return (
    
    <div>
        <img className='h-36 absolute top-0 left-0' src={topLeft} />
        <img className='h-36 absolute bottom-0 right-0' src={bottomRight} />
        <div className='flex justify-around'>
            <div className='flex justify-around flex-col'>
                <div className='mx-16 mt-8 mb-0 size-fit'>
                    <h1 className='font-bold text-green text-center text-5xl'>Augusto Buttaro</h1>
                    <h2 className='mt-2 text-center font-regular text-green text-xl'>Web Designer/Front-end Developer</h2>
                </div>
            </div>
            <img className=' w-48 mt-8 mb-0 shadow-pink rounded-3xl object-cover' src={profilePic}/>
        </div>
    </div>
  )
}

export default Hero
