import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div onClick={() => closeModal()} className="modal-overlay">
            <div onClick={(e) => e.stopPropagation()} className="modal">
                <div className="modal-upper">
                    <h1>Big Announcement!</h1>
                    <p onClick={() => closeModal()}>&times;</p>
                </div>
                <p className="modal-middle">
                    Hello Everyone! Hope you all are doing good. I really
                    appreciate you all for pushing the community forward day by
                    day. Do support me for more such cool projects.
                </p>
                <div className="modal-lower">
                    <button className="modal-btn green">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.instagram.com/dheerajbisht_/"
                        >
                            Follow
                        </a>
                    </button>
                    <button
                        onClick={() => closeModal()}
                        className="modal-btn red"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal
