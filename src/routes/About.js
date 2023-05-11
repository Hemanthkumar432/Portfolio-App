import React from 'react'
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT." text="As a web developer, I make it a priority to be approachable and personable"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About;