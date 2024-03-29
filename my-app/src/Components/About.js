import React from 'react'
import "./AboutStyles.css"
import ContactDeatails from '../Components/ContactDeatails'

function about() {
    return (
        <div className="about-container">
                
        <div className="text-contact">
        <div className="about-text">
            <h4>Hello! I’m Hariharan G. I do Fullstack Web Development</h4>
            <h4>I’m currently a final year student in P.R,Engineering college, Vallam, Thanjavur, Tamil Nadu, india.</h4>
            <h4>I’m expecting  to finish my degree as Bachelor of Engineering in the middle of 2024. I usaully focus more on practical skills rather than college academics. so I've done many courses like in youtube and udemy.</h4>
            <h4>I’m actively seeking to participate in employement opportunities and internships worldwide</h4>
            <h4>To know more about me, see my <a href="https://drive.google.com/file/d/1v2heIiQmPQdOuCxQwG8VRFhYxDQUM9C3/view?usp=drive_link" className="resume-link" target="_blank">Resume</a></h4>
        </div>
        <div>
           <ContactDeatails/>
        </div>
        </div>
        <div className="skills-container">
        Skills
        <ul>
                <li>Java</li>
                <li>Springboot</li>
                <li>React Native</li>
                <li>Rest API</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React Js</li>
                <li>JavaScript</li>
                <li>C programming</li>
                <li>Figma</li>
            </ul>
        </div>
       
        </div>
    )
}

export default about
