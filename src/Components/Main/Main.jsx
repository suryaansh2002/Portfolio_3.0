import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import Landing from '../Landing/Landing'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Work from '../Work/Work'

export default function Main() {
  return (
    <>
        <Landing/>
        <About/>
        <Skills/>
        <Projects/>
        <Work/>
        <Contact/>
    </>

  )
}
