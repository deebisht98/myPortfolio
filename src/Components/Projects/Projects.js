import React from 'react'
import './Projects.css'
import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import ProjectCard from './ProjectCard'
import { projectsData } from './../assets/projectsData'
const Projects = () => {
    return (
        <div className="section-container">
            <Header
                heading="My Projects."
                details="Here are a few cool things I've worked on, do check them out!"
            />
            <div className="project-cards-container">
                {projectsData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        videoUrl,
                        projectUrl,
                    }) => {
                        return (
                            <ProjectCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                                imageUrl={imageUrl}
                                videoUrl={videoUrl}
                                projectUrl={projectUrl}
                            />
                        )
                    }
                )}
            </div>
            <Footer toAddress="/skills" link="my skills!" phrase="Check out " />
        </div>
    )
}

export default Projects
