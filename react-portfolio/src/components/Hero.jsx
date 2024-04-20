import { useState } from 'react'
import topLeft from "../assets/top-left.png"
import bottomRight from "../assets/bottom-right.png"
import profilePic from "../assets/profile-pic.jpg"
import { Link, NavLink, useLocation  } from "react-router-dom"

function Hero() {
    const navItems = ["About", "Projects", "Skills"]
    const location = useLocation();
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
                <nav className='flex justify-around mx-16 text-white'>
                    {navItems.map((item, index) =>{
                        const isActive = location.pathname === `/${item}`;
                        return(
                            <NavLink 
                                key={index} 
                                to={`/${item}`} 
                                className={`
                                    cursor-pointer border-2 border-pink select-none text-xl text-center bg-pink px-4 pb-1
                                    hover:bg-purple-fifty focus:bg-purple-fifty rounded-3xl
                                    ${isActive ? 'bg-purple-fifty' : ''}
                                `}
                            >
                            {item}
                            </NavLink>
                        )
                    })}
                </nav>
            </div>
            <img className='w-40  mx-16 mt-8 mb-0 shadow-pink rounded-3xl object-cover' src={profilePic}/>
        </div>
    </div>
  )
}

export default Hero
