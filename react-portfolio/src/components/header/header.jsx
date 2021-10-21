import React from 'react'
import './header.css'
import { FaHome, FaBriefcase, FaMailBulk, FaInfoCircle } from 'react-icons/fa';

const Header = (props) => {

    const {title} = props;

    return (
        <div className="header d-flex ">
            <div className="header__left">
                <FaHome/>
                <FaBriefcase/>
                <FaMailBulk/>
                <FaInfoCircle/>
            </div>

            <div className="header__center">
                {title}
            </div>

            <div className= "header__right">
                a
            </div>
        </div>
    )
}

export default Header
