import React from 'react'
import Navbar from '../Components/Navbar'
import ProjectData from '../Components/ProjectData'
import MinorProjects from '../Components/MinorProjects'

function Projects() {
    return (
        <div>
            <Navbar/>
            <ProjectData/>
            <MinorProjects/>
        </div>
    )
}

export default Projects
