/* eslint-disable jsx-a11y/img-redundant-alt */
import './ProjectCardStyless.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ProjectCard = (props) => {
  return (
    <div className='project-card'>
                <img src={props.imgsrc} alt="image"/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='project-detiles'>
                    <p>{props.text}</p>
                    <div className='pro-btn'>
                        <NavLink to={props.view} className="btn">View
                        </NavLink>
                        </div>
                </div>

            </div>
  )
}

export default ProjectCard