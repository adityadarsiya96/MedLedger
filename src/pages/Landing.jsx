import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Problem from './Problem'
import Solution from './Solution'
import Footer from './Footer'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Problem/>
      <Solution/>
      <Footer/>
      
    </div>
  )
}

export default Landing

