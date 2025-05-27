import React from 'react'
import './Project.css'
import theme from '../../assets/theme.svg'
import apple from '../../assets/appl.png'
import ecom from '../../assets/ecom.png'
import port from '../../assets/portfolio.png'
import weather from '../../assets/weather.png'

const Project = () => {
    const Projectt =[
        { name: 'Portfolio', icon: port, desc:'Developed a responsive Personal Portfolio Website using React.js and it serves as a digital resume, showcasing projects, skills. Implemented dynamic components, smooth animations, and a mobile-friendly UI. Integrated a contact form for direct communication. '},
                { name: 'WeatherApp', icon: weather, desc:'Developed a responsive web application using React.js to provide real-time weather information. Integrated APIs to fetch and display weather data)'  },
                { name: 'E-commerce', icon: ecom, desc:'Developed a basic clothing website as part of a personal project to practice front-end development skills.'},
                { name: 'Apple Website', icon: apple,desc:'Recreated the Apple website to demonstrate proficiency in front-end development, Employed HTML5, CSS3, and JavaScript to mirror the website’s layout and responsive.'},
                
    ];
  return (
    <div  id='project' className='project'>
        <div className='project-title'>
            <h1>Projects</h1>
            <img src={theme}  alt="" />
        </div>
        <div className='project-container'>
            {Projectt.map((pro,index)=>{
                return <div key={index} className='format'>
                    <img src={pro.icon} alt='' />

                </div>
            })}
            

        </div>
      
    </div>
  )
}

export default Project
