import React from 'react'
import "./HeroStyles.css"

function Hero() {
    return (
        <div className="hero-main">
            <div className="hero-text">
                <h1>Hello! I'm Hari </h1>
                <h2>Java Full Stack Web Developer</h2>
            </div>
            <div className="resume">
                 <a href="/" className="resume-button">
                    My Resume
                </a>
            </div>
        </div>
        
    )
}

export default Hero;
