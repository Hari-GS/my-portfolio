import React from 'react'
import "./HeroStyles.css"
import { useEffect } from 'react';

function Hero() {

    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

        // If a user hasn't opted in for reduced motion, then we add the animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation(scrollers);
        }
    }, []);

    function addAnimation(scrollers) {
        scrollers.forEach((scroller) => {
            // add data-animated="true" to every `.scroller` on the page
            scroller.setAttribute("data-animated", true);

            // Make an array from the elements within `.scroller-inner`
            const scrollerInner = scroller.querySelector(".scroller-inner");
            const scrollerContent = Array.from(scrollerInner.children);

            // For each item in the array, clone it
            // add aria-hidden to it
            // add it into the `.scroller-inner`
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }

    return (
        <div>
            <div className="hero-main">
            <div className="hero-text">
                <h1 className="name">Hello! I'm Hari </h1>
                <h4 className="name">I love everything, Yeah pretty much EVERYTHING</h4>
                <h4 className="name">Especially Java Fullstack Development</h4>
            </div>
            <div className="resume">
                 <a href="https://drive.google.com/file/d/1i9D0wFTJcB-lTsLdeOPIY-qwW6KF3Fji/view?usp=sharing" className="resume-button" target="_blank">
                    My Resume
                </a>
            </div>
            </div>
            
            <div className="scroller">
            <ul className="tag-list scroller-inner">
                <li>HTML</li>
                <li>TailWind CSS</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>C programming</li>
                <li>Java</li>
                <li>Springboot</li>
                <li>Rest API</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Figma</li>
            </ul>
            </div>
            
        </div>
        
    )
}

export default Hero;
