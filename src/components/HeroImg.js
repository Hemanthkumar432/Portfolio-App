import "./HeroImgStyles.css";
import introImg from "../Images/intro-bg.jpg"
import React from 'react'
import { Link } from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="intro-img" 
        src={introImg} alt="IntromImg"/>
        </div>
        <div className="content">
            <p>Hi,this is Hemanth</p>
            <h1>Full Stack Developer</h1>
            <div>
            <Link to="/project" className="btn">PROJECTS</Link>
            <Link to ="/contact" className="btn btn-light">CONTACT</Link>   
            </div>

        </div>
    </div>
  )
}
export default HeroImg