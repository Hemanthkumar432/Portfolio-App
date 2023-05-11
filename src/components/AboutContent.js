import { Link } from "react-router-dom"
import "./AboutContentStyles.css"

import React from 'react'

function AboutContent() {
  return (
    <div className="about">
        <div className="text">
            <h1>Who Am I ?</h1>
            <p>I am a software engineer with 1.6 years of professional experience,
                skilled in optimizing business processes through innovative solutions.
                My experience includes working in corporate  environment,
                where I have performed various roles in software development,
                including front-end, back-end, deployment/server management,
                and business interfacing. I am a passionate learner with a strong work ethic,
                and I am well-versed in the Software Development Life Cycle (SDLC), Agile, Clean Code, SOLID, and TDD methodologies.</p>
            <Link to="/contact">
                <button className="btn" > Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default AboutContent