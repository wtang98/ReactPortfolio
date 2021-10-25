import React from 'react'
import { FaLinkedin, FaGithubSquare, FaEnvelope } from 'react-icons/fa';
import './footer.css'

const footer = () => {
    return (
        <div className="footer d-flex justify-content-between align-items-center">
            <div className="footer__left">
                Built by Wei-Tong Tang ©
            </div>
            <div className="footer__right d-flex align-items-center">
                {/* <div className="d-flex align-items-center"> */}
                    <p className="mb-0">Contact me : </p>
                {/* </div> */}
                <a href="https://www.linkedin.com/in/wei-tong-tang-81bb851b2/" target="_blank">
                    <div className="footer__right-icon">
                        <FaLinkedin/>
                    </div>
                </a>
                <a href="https://github.com/wtang98" target="_blank">
                    <div className="footer__right-icon">
                        <FaGithubSquare/> 
                    </div>
                </a>
                <a href="mailto:weitongblue@gmail.com" target="_blank">
                    <div className="footer__right-icon" >
                        <FaEnvelope/>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default footer
