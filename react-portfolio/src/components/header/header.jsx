import React from 'react'
import {Link} from 'react-router-dom';
import './header.scss'
import { FaHome, FaBriefcase, FaInfoCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = (props) => {

    const {title} = props;
    AOS.init();

    return (
        <div className="header">
            <div className="header__left">
                <div className="header__left-container d-flex align-items-center">
                    <Link to ="/">
                        <div className="header__left-icon home">
                            <FaHome/>
                        </div>
                    </Link>
                    <Link to="/portfolio">
                        <div className="header__left-icon portfolio">
                            <FaBriefcase/>
                        </div >
                    </Link>
                    <Link to="/about">
                        <div className="header__left-icon about">
                            <FaInfoCircle/>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="header__center d-flex justify-content-center align-middle">
                <div className="header__center-title" data-aos="flip-down">
                    {title}
                </div>
            </div>

            <div className= "header__right d-flex justify-content-end">
                a
            </div>

        </div>
    )
}

export default Header
