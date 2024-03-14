import React from 'react'
import ProjectCard from "./ProjectCard"
import p2 from '../assets/ott homepage.jpg'
import p1 from '../assets/tour website home page.jpg'
import p3 from '../assets/portfolio home page.jpg'
import p4 from '../assets/tholan page.jpg'


function ProjectData() {
    return (
        <div>
            <ProjectCard
                heading="Tour Travel Booking Website"
                text={"- I have designed a tour travel website specifically for Thanjavur, a prominent historical city in South India \n\n- This website allows users to book tour trips conveniently, complete with a sign-in option for a personalized experience.\n\n- Please note that while the project is underway, it is not yet fully completed."}
                gitlink={"https://github.com/Hari-GS/e-com.git"}
                gitlinksText={"https://github.com/Hari-GS/e-com.git"}
                gitlink2={"https://github.com/Hari-GS/tour-app-api.git"}
                gitlinksText2={"https://github.com/Hari-GS/tour-app-api.git"}
                front={"Front-end : "}
                back={"Back-end : "}
                techstack={"React js | Java Springboot | MongoDB"}
                livelink={"https://seego-e-com.onrender.com"}
                livelinktext={"https://seego-e-com.onrender.com"}
                img={p1}
            />
                <ProjectCard
                heading="Mobile App -  Agricultural crops Suggester"
                text={"- When provided with the current location in Mobile App, the server will utilize historical data analysis to determine the prevailing climate conditions, weather patterns, soil type, and market connections specific to that area\n\n-Based on this analysis, it will recommend suitable crops along with detailed information about them."}
                gitlink={"NA"}
                gitlinksText={"NA"}
                techstack={" React Native | Java Springboot | MongoDB "}
                livelink={"NA"}
                livelinktext={"NA"}
                img={p4}
            />
               <ProjectCard
                heading="My Portfolio page"
                text={"- I created a fully responsive portfolio page using React from the ground up.\n\n- This portfolio page effectively showcases my projects and provides detailed information about me. \n\n- Additionally, I ensured seamless navigation and user-friendly interface to optimize the browsing experience."}
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
