import React from 'react'
import ProjectCard from "./ProjectCard"
import p1 from '../assets/template-image.jpg'

function ProjectData() {
    return (
        <div>
            <ProjectCard
                heading="Tour Travel Booking Website"
                text={"- Developed a tour travel  website for thanjavur (a historical city in south india) \n\n- It has capability of  booking a tour package with sign up option \n\n- My contribution to this project is 100%"}
                links={"GitHub : xxxxxxxxxxxxxxxxxxx\nWebsite's live link : yyyyyyyyyyy"}
                img={p1}
            />
               <ProjectCard
                heading="A OTT Web Application"
                text={"- Developed a OTT Web Application for hosting movies \n\n- It has a new business model of hosting movies directly by the production companies with profit share to App’s developer  \n\n- it has the capability of buying subscription and watching movies \n\n- My contribution to this project is 100%"}
                links={"GitHub : xxxxxxxxxxxxxxxxxxx\nWebsite's live link : yyyyyyyyyyy"}
                img={p1}
            />
               <ProjectCard
                heading="Tourist Travel Website"
                text={"- Developed a tour travel  website for thanjavur (a historical city in south india) \n\n- It has capability of  booking a tour package with sign up option \n\n- My contribution to this is 100%"}
                links={"GitHub : xxxxxxxxxxxxxxxxxxx\nWebsite's live link : yyyyyyyyyyy"}
                img={p1}
            />
        </div>
    )
}

export default ProjectData
