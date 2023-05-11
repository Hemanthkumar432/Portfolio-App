import "./FooterStyle.css"
import React from 'react'
import {FaHome,FaPhone,FaMailBulk,FaInstagram,FaLinkedin, FaTwitter} from "react-icons/fa"

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="leftbody">
                <div className="location">
                    <FaHome size={20} style={{color :"#fff", margin:"0.5rem"}}/>
                    <div>
                        <p style={{ fontSize: "1.2rem", margin: 4 }}>Banagalore,India.</p>
                    </div>
                </div>
                <div className="phone">
  <div style={{ display: "flex", alignItems: "center" }}>
    <FaPhone size={20} style={{ color: "#fff", margin: "0.5rem" }} />
    <p style={{ fontSize: "1.2rem", margin: 4 }}>+91 9524885993</p>
  </div>
</div>
<div className="email">
  <div style={{ display: "flex", alignItems: "center" }}>
    <FaMailBulk size={20} style={{ color: "#fff", margin: "0.5rem" }} />
    <p style={{ fontSize: "1.2rem", margin: 4 }}>hemanth.4324@gmail.com</p>
  </div>
</div>
            </div>
            <div className="rightbody">
                <h4>About the Company</h4>
                <p> I'm Hemanth, the founder of Tech. I'm passionate about exploring new projects and finding creative solutions to complex design challenges. Check out my portfolio to see some of the projects I've worked on. Let's connect and collaborate on your next project!</p>
                <div className="social">
                <a href="https://twitter.com/hemanthrock432?s=08">
                  <FaTwitter size={30} style={{color :"#fff", margin:"1rem"}} />
                </a>
                <a href="https://www.instagram.com/_hemanth12/">
                  <FaInstagram size={30} style={{color :"#fff", margin:"1rem"}} />
                </a>
                <a href="https://www.linkedin.com/in/hemanth-g-13a4051bb">
                    <FaLinkedin size={30} style={{color :"#fff", margin:"1rem"}} />
                </a>

                </div>
            </div>
        </div>
    </div>
  )
}
