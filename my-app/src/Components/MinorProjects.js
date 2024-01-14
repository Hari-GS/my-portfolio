import React from 'react'
import "./MinorProjectsStyles.css"
import p1 from '../assets/cal.jpg'
import p2 from '../assets/console emp app.webp'
import p3 from '../assets/rest api image.jpg'

function MinorProjects() {
    return (
        <div>
        <h1 className="min-heading">Minor Projects</h1>
        <div className="container">
            
            <div className="pro-1">
                <img className="image" src={p1} alt="Sci cal"/>
                <h1 className="min-head">Basic Calculator</h1>
                <p className="para">Tech Stack : Java swings</p>
            </div>
            <div className="pro-1">
                <img className="image" src={p3} alt="Sci cal"/>
                <h1 className="min-head">Simple Web API</h1>
                <p className="para">Tech Stack : Java Spring Boot | REST API</p>
            </div>
            <div className="pro-1">
                <img className="image" src={p2} alt="Sci cal"/>
                <h1 className="min-head">Console based employment management system</h1>
                <p className="para">Tech Stack : C Programming</p>
            </div>        
        </div>
        </div>
        
    )
}

export default MinorProjects
