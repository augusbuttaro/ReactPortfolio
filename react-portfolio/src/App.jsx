import { useState } from 'react'
import Layout from './components/Layout'
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {

  return (
    <div className='font-darkerGrotesque'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="About" element={<About />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Skills" element={<Skills />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
