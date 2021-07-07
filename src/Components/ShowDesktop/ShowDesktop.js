import React from 'react'
import './ShowDesktop.css'
import { useHistory, useLocation } from 'react-router-dom'

const ShowDesktop = () => {
    let location = useLocation()
    let history = useHistory()
    function handleClick() {
        history.push('/')
    }

    const cond = location.pathname === '/' ? '' : 'inhome'
    return (
        <div>
            <button
                className={`show-home-container ${cond}`}
                onClick={handleClick}
            >
                <i className="fa fa-home" aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default ShowDesktop
