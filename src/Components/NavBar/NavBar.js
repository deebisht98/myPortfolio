import React from 'react'
import './NavBar.css'
import { slide as Menu } from 'react-burger-menu'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
    let location = useLocation()

    const homeClass = location.pathname === '/' ? 'active-item' : ''
    const aboutClass = location.pathname === '/about' ? 'active-item' : ''
    const projectsClass = location.pathname === '/projects' ? 'active-item' : ''
    const skillsClass = location.pathname === '/skills' ? 'active-item' : ''
    const contactClass = location.pathname === '/contact' ? 'active-item' : ''
    return (
        <Menu>
            <Link to="/" className={`menu-item ${homeClass}`}>
                Home
            </Link>
            <Link to="/about" className={`menu-item ${aboutClass}`}>
                About
            </Link>
            <Link to="/projects" className={`menu-item ${projectsClass}`}>
                Projects
            </Link>
            <Link to="/skills" className={`menu-item ${skillsClass}`}>
                Skills
            </Link>
            <Link to="/contact" className={`menu-item ${contactClass}`}>
                Contact
            </Link>
        </Menu>
    )
}

export default NavBar
