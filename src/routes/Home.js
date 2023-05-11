import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import { Footer } from '../components/Footer';
import Work from "../components/work"

function Home() {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Work/>
     <Footer/>
    </div>
  )
}

export default Home;
