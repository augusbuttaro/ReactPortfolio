import { useState } from 'react'
import Layout from './compoents/Layout'
import Hero from './compoents/Hero'

function App() {

  return (
    <>
      <Layout>
        <Navbar />
        <Hero />
      </Layout>
    </>
  )
}

export default App
