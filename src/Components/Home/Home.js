import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import homeAnime from './../assets/home_anime.gif'
import Modal from '../Modal/Modal'
const Home = () => {
    const [showModal, setShowModal] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            setShowModal((prev) => !prev)
        }, 2400)
    }, [])

    const closeModal = () => {
        setShowModal((prev) => !prev)
    }

    return (
        <div className="home-container">
            {showModal && <Modal closeModal={closeModal} />}
            <h1 className="main-heading">Welcome to my portfolio!</h1>
            <p className="main-content">
                This is Dheeraj, a full stack dev and a bodybuilder.
            </p>
            <div className="button-container">
                <Link className="btn white" to="/about">
                    Know more about me
                </Link>
                <Link className="btn trans" to="/contact">
                    Connect with me
                </Link>
            </div>
            <img className="main-image" src={homeAnime} alt="home_image" />
        </div>
    )
}

export default Home
