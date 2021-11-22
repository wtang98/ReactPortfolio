import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router'
import './header.scss'
import { Squash as Hamburger } from 'hamburger-react'
import { FaHome, FaBriefcase, FaInfoCircle, FaGithubSquare } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = (props) => {
    const history = useHistory();
    const [menuState, setMenuState] = useState(false)

    const {title, home, portfolio, about} = props;
    AOS.init();


    const menuToggle = () => {
        setMenuState(!menuState);
    }

    const hamburgerMenu = () => {
       return <div className="hamburgerMenu" data-aos="fade-left">
                <div className="hambugerMenu__links">
                    {home && <div onClick={()=>history.push('/')} className="hambugerMenu__links-home">Home</div>}
                    {portfolio && <div onClick={()=>history.push('/portfolio')} className="hambugerMenu__links-portfolio">Portfolio</div>}
                    {about && <div onclick={()=>history.push('/about')} className="hambugerMenu__links-about">About</div>}
                </div>
            </div>
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
            {menuState &&  hamburgerMenu()}
        </div>
    )
}

export default Header
