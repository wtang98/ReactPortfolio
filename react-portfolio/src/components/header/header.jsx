import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './header.scss'
import { Squash as Hamburger } from 'hamburger-react'
import { FaHome, FaBriefcase, FaInfoCircle, FaGithubSquare } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = (props) => {
    const [menuState, setMenuState] = useState(false)

    const {title, home, portfolio, about} = props;
    AOS.init();


    const menuToggle = () => {
        setMenuState(!menuState);
    }

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
                <a href="https://github.com/wtang98" target="_blank">
                    <div className="header__right-icon">
                        <FaGithubSquare/> 
                    </div>
                </a>
                <div className="header__right-hamburger" display="none" onClick={menuToggle}>
                    <Hamburger/>
                </div>
            </div>

            {menuState ?  
            <div className="hamburgerMenu">
                <div className="hambugerMenu__links">
                    <Link to="/">
                        {home?<div className="hambugerMenu__links-home">Home</div>:""}
                    </Link>
                    <Link  to="/portfolio">
                        {portfolio?<div className="hambugerMenu__links-portfolio">Portfolio</div>:""}
                    </Link>
                    <Link  to="/about">
                        {about?<div className="hambugerMenu__links-about">About</div>:""}
                    </Link>
                </div>
            </div>
            :<div></div>}
        </div>
    )
}

export default Header
