import React from 'react'
import './index.css'
import Hero from './assets/components/Hero'
import Navbar from './assets/components/navbar'

const App = () => {
  return (
    <main>
      <div className="bg-blue-50 w-full h-screen ">
      <Navbar />
      <Hero />
      </div>
    </main>
  )
}

export default App
