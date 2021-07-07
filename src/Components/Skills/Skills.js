import React from 'react'
import './Skills.css'
import Header from './../../Components/Header/Header'
import Footer from './../../Components/Footer/Footer'
import SkillsVector from './../../Components/assets/skills_vector.png'
import { skillList } from './../../Components/assets/skillsData'
import SkillCard from './SkillCard'
const Skills = () => {
    return (
        <div className="section-container">
            <Header
                heading="My Skills."
                details="Passionate about learning new technologies. I keep exploring stuff. Here's the tech stack I've worked with!"
            />
            <div className="skill-card-container">
                {skillList.map((skill) => {
                    return (
                        <SkillCard
                            key={skill.skillName}
                            skillName={skill.skillName}
                            skillUrl={skill.skillUrl}
                        />
                    )
                })}
            </div>
            <div className="skills-vector-frame">
                <img
                    src={SkillsVector}
                    alt="skills"
                    className="skills-vector"
                />
            </div>
            <Footer toAddress="/contact" link="touch." phrase="Get in " />
        </div>
    )
}

export default Skills
