import React from 'react'
import './About.css'
import theme from '../../assets/theme.svg'
 

const About = () => {
  return (
    <div id='about'   className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme}alt="" />
        </div>
        <div className='about-section'>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a passionate and curiuos devloper who enjoys building responsive and user-friendly web applications.as a recent gradute ,I'm constanly exploring new technologies and turing ideas into real world projects.I belive in writing clean code ,sloving problems creatively, and continously learing to grow both personally and professionally  

                    </p>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default About
