import React from 'react'
import {HashRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skill from './components/Skill/Skill'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>s
      
    
    
      
    </div>
  )
}

export default App
