import { useState } from 'react'
import Layout from './components/Layout'
import Footer from './components/Footer'
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import topLeft from "./assets/top-left.png"
import bottomRight from "./assets/bottom-right.png"
import profilePic from "./assets/profile-pic.jpg"


function App() {

  return (
    <div className='font-darkerGrotesque pt-16 w-full overflow-x-hidden bg-purple'>
        <div className=''>
          <div className='relative'>
            <img className='h-36 absolute top-0 left-20' src={topLeft} />
            <img className='h-36 absolute bottom-0 right-20' src={bottomRight} />
            <div className='flex justify-center py-16'>
                <div className='flex justify-around  w-1/2 flex-col'>
                    <div className=' mt-8 size-fit'>
                        <h1 className='font-bold text-green text-5xl'>Augusto Buttaro</h1>
                        <h2 className='mt-2 font-regular text-green text-xl'>Web Designer/Front-end Developer</h2>
                        <About />
                    </div>
                </div>
                <img className='w-52  mx-16 my-4 shadow-pink rounded-3xl object-cover' src={profilePic}/>
            </div>
          </div>
        </div>
        <Projects />
        <Skills />
        <Footer />
    </div>
  )
}

export default App
