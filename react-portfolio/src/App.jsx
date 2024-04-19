import { useState } from 'react'
import Layout from './components/Layout'
import About from "./components/About"
import Projects from "./components/Projects"

function App() {

  return (
    <div className='font-darkerGrotesque'>
      <Layout>
        <Projects />
      </Layout>
    </div>
  )
}

export default App
