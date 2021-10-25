import React from 'react'
import {Link} from 'react-router-dom';
import './header.css'
import { FaHome, FaBriefcase, FaMailBulk, FaInfoCircle } from 'react-icons/fa';

const Header = (props) => {

    const {title} = props;

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
                    <Link to="/contact">
                        <div className="header__left-icon contact ">
                            <FaMailBulk/>
                        </div>
                    </Link>
                    <Link to="/about">
                        <div className="header__left-icon about">
                            <FaInfoCircle/>
                        </div>
                    </Link>
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
