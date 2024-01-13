import React from 'react'
import ProjectCard from "./ProjectCard"
import p2 from '../assets/template-image.jpg'
import p1 from '../assets/travel website screenshot.png'
import p3 from '../assets/portfolio homepage.png'


function ProjectData() {
    return (
        <div>
            <ProjectCard
                heading="Tour Travel Booking Website"
                text={"- Developed a tour travel  website for thanjavur (a historical city in south india) \n\n- It has capability of  booking a tour package with sign up option\n\n- Note : Backend not developed yet \n\n- My contribution to this project is 100%"}
                gitlink={"https://github.com/Hari-GS/e-com.git"}
                gitlinksText={"https://github.com/Hari-GS/e-com.git"}
                techstack={"React js"}
                livelink={"https://seego-e-com.onrender.com"}
                livelinktext={"https://seego-e-com.onrender.com"}
                img={p1}
            />
               <ProjectCard
                heading="A OTT Web Application"
                text={"- Developed a OTT Web Application for hosting movies \n\n- It has a new business model of hosting movies directly by the production companies with profit share to App’s developer  \n\n- it has the capability of buying subscription and watching movies \n\n- My contribution to this project is 100%"}
                links={"GitHub : xxxxxxxxxxxxxxxxxxx\nWebsite's live link : yyyyyyyyyyy"}
                img={p2}
            />
               <ProjectCard
                heading="My portfolio page"
                text={"- I developed my own portflio page using react \n\n- It has capability of  showcasing my projects and details of mine \n\n- Note that it's full responsive"}
                links={"GitHub : xxxxxxxxxxxxxxxxxxx\nWebsite's live link : yyyyyyyyyyy"}
                img={p3}
            />
        </div>
    )
}

export default ProjectData
