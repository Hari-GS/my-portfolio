import React from 'react'
import ProjectCard from "./ProjectCard"
import p2 from '../assets/see go ott.png'
import p1 from '../assets/travel website screenshot.png'
import p3 from '../assets/portfolio homepage.png'


function ProjectData() {
    return (
        <div>
            <ProjectCard
                heading="Tour Travel Booking Website"
                text={"- Developed a tour travel  website for thanjavur (a historical city in south india) \n\n- Note that Backend not developed yet. \n\n- This project was developed to enhance my React Js skills \n\n- I planned to add features like viewing tour plan, about, service ,contact pages with Sign-in option"}
                gitlink={"https://github.com/Hari-GS/e-com.git"}
                gitlinksText={"https://github.com/Hari-GS/e-com.git"}
                techstack={"React js"}
                livelink={"https://seego-e-com.onrender.com"}
                livelinktext={"https://seego-e-com.onrender.com"}
                img={p1}
            />
               <ProjectCard
                heading="A OTT Web Application"
                text={"- Developed a OTT Web Application for hosting movies with new business model proposal\n\n- User can create a account and log in to the application\n\n- This project is on its initial stage\n\n- I planned to give the capability to give a user buying subscription and watching movies"}
                gitlink={"https://github.com/Hari-GS/See-go-OTT-platform.git"}
                gitlinksText={"https://github.com/Hari-GS/See-go-OTT-platform.git"}
                techstack={"JSP | CSS | JavaScript | Java | MySQL "}
                livelinktext={" - "}
                img={p2}
            />
               <ProjectCard
                heading="My portfolio page"
                text={"- I developed my own fully responsive portflio page using react from scratch\n\n- It has capability of showcasing my projects and details of mine \n\n- I designed and developed scrolling animation of skills to make it visually appealing"}
                gitlink={"https://github.com/Hari-GS/See-go-OTT-platform.git"}
                gitlinksText={"https://github.com/Hari-GS/See-go-OTT-platform.git"}
                techstack={" ReactJs "}
                livelink={"https://my-portfolio-bzdl.onrender.com"}
                livelinktext={"https://my-portfolio-bzdl.onrender.com"}
                img={p3}
            />
        </div>
    )
}

export default ProjectData
