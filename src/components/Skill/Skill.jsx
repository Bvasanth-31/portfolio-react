import React from 'react'
import './Skill.css'
import theme from '../../assets/theme.svg'
import skill from '../../assets/skill.1.jpg'

const Skill = () => {
  return (
    <div  id= 'skill' className='skill'>
        <div className='skill-title'>
            <h1>My Skills</h1>
            <img src={theme} alt="" />
        </div>
        <div className="skill-sectiom">
            <div className="skill-left">
                <img src={skill} alt="" />
            </div>
            <div className='skill-right'>
                <div className='skill-para'>
                    <p> I poossess strong skills in HTML,CSS,JavaScript,Bootstrap,React,and SQL,enabling me to buil responsive ,dynamic,and user-friendly web applications efficently with focus on clean code design adn performance cross-browers compatibility and seamles user experience</p>
                </div>
                <div className='skill-techskill'>
                    <div className='skill-1'><p>HTML</p><hr style={{width:"55%"}} /></div>
                    <div className='skill-1'><p>CSS</p><hr style={{width:"60%"}} /></div>
                    <div className='skill-1'><p>JavaScript</p><hr style={{width:"85%"}} /></div>
                    <div className='skill-1'><p>BootStrap</p><hr style={{width:"70%"}} /></div>
                    <div className='skill-1'><p>React</p><hr style={{width:"95%"}} /></div>
                    <div className='skill-1'><p>Java</p><hr style={{width:"75%"}} /></div>
                    <div className='skill-1'><p>SQL</p><hr style={{width:"45%"}} /></div>
                   <div className='skill-1'><p>GIT</p><hr style={{width:"70%"}} /></div> 
                     
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skill
