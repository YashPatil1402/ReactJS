import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'  // If you add this later
import Skills from './components/Skills'
import Projects from './components/Projects'
import Upcomming from './components/Upcomming'
import Testimonials from './components/Testimonials'
import Vlogs from './components/Vlogs'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About /> */}  {/* Uncomment when added */}
      <Skills />
      <Projects />
      <Upcomming />
      <Testimonials />
      <Vlogs />
      <Footer />
    </>
  )
}

export default App
