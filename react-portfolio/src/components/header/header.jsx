import React from 'react'
import {Link} from 'react-router-dom';
import './header.css'
import { FaHome, FaBriefcase, FaMailBulk, FaInfoCircle } from 'react-icons/fa';

const Header = (props) => {

    const {title} = props;

    return (
        <div className="header">
            <div className="header__left d-flex">
                <div className="header__left-home">
                    <Link to ="/">
                        <FaHome/>
                    </Link>
                </div>
                <div className="header__left-portfolio">
                    <Link to="/portfolio">
                        <FaBriefcase/>
                    </Link>
                </div >
                <div className="header__left-about">
                    <FaMailBulk/>
                </div>
                <div className="header__left-contact">
                    <FaInfoCircle/>
                </div>
            </div>

            <div className="header__center d-flex justify-content-center align-middle">
                <div className="header__center-title ">
                    {title}
                </div>
            </div>

            <div className= "header__right d-flex justify-content-end">
                
            </div>
        </div>
    )
}

export default Header
