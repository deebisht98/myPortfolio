import React from 'react'
import './Projects.css'

const ProjectCard = ({
    projectName,
    projectDescription,
    imageUrl,
    videoUrl,
    projectUrl,
}) => {
    return (
        <div className="project-card">
            <div className="image-container">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={projectUrl}
                    className="project-external-link"
                >
                    <img
                        src={imageUrl}
                        alt="project"
                        className="project-image"
                    />
                </a>
            </div>
            <div className="project-details-container">
                <h2 className="project-heading">{projectName}</h2>
                <p className="project-details">{projectDescription}</p>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={videoUrl}
                    className="project-yt-link"
                >
                    Get Source Code!
                </a>
            </div>
        </div>
    )
}

export default ProjectCard
