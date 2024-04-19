import { useState } from 'react'
import Hero from "./Hero"
import Footer from "./Footer.jsx"
import logo from "../assets/ab-logo.png"

function Layout(props) {
  const  { children } = props
  return (
    <>
      <div className='bg-purple bg-bgimg bg-cover flex flex-col h-screen'>
        <img src={logo} className='h-10 mr-8 mt-5 absolute right-0' />
          <div className='w-4/5 h-3/4 m-auto flex flex-col justify-around relative'>
            <Hero />
            <main>
              {children}
            </main>
          </div>
          <Footer />
      </div>
    </>
  )
}

export default Layout
