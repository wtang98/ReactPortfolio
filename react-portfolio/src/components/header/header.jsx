import React from 'react'
import {Link} from 'react-router-dom';
import './header.css'
import { FaHome, FaBriefcase, FaMailBulk, FaInfoCircle } from 'react-icons/fa';

const Header = (props) => {

    const {title} = props;

    return (
        <div className="header">
            <div className="header__left d-flex">
                <div className="header__left-container d-flex justify-content-center">
                    <Link to ="/">
                        <div className="header__left-home">
                            <FaHome/>
                        </div>
                    </Link>
                    <Link to="/portfolio">
                        <div className="header__left-portfolio">
                            <FaBriefcase/>
                        </div >
                    </Link>
                    <div className="header__left-contact ">
                        <FaMailBulk/>
                    </div>
                    <div className="header__left-about">
                        <FaInfoCircle/>
                    </div>
                </div>
            </div>

            <div className="header__center d-flex justify-content-center align-middle">
                <div className="header__center-title ">
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
