import React from 'react'
import Header from '../../components/header/header'
import './about.css'
import DP from '../../components/assets/images/dp.jpg'
import Bootstrap from '../../components/assets/images/bootstrap.png';
import CSS from '../../components/assets/images/css3.png';
import Github from '../../components/assets/images/github.png';
import Google from '../../components/assets/images/google.png';
import HTML from '../../components/assets/images/html5.png';
import Java from '../../components/assets/images/java-icon.png';
import JS from '../../components/assets/images/javascript.png';
import Jest from '../../components/assets/images/jest.png';
import MySQL from '../../components/assets/images/mysql.png';
import JSX from '../../components/assets/images/react-icon.png';
import Sass from '../../components/assets/images/sass.png';
import Spring from '../../components/assets/images/spring.png';

const about = () => {
    return (
        <div className="about">
            <Header title = {"About Me"} className/>
            <div className="about__row1 d-flex justify-content-between">
                    <div className ="about__row1-content d-flex align-items-center p-3">
                        <div className="about__row1-content-left d-flex justify-content-center">
                            <img src={DP} alt={DP} />
                        </div>
                        <div className="about__row1-content-right">
                            <p>My name is Wei-Tong Tang. I am a war and society graduate who mangaged find 
                                themselves in the world of technology. I made my segway into this sector through
                                the intesive 12 week _nology course.
                            </p>
                        </div>
                    </div>
            </div>
            <div className="about__row2">
                <div className="about__row2-content2">
                    <h1>Current Technologies:</h1>
                    <div className="icon d-flex justify-content-center">
                        <img className="icons" src={HTML} alt="" />
                        <img className="icons" src={CSS} alt="" />
                        <img className="icons" src={JS} alt="" />
                        <img className="icons" src={Sass} alt="" />
                        <img className="icons" src={Google} alt="" />
                        <img className="icons" src={Bootstrap} alt="" />
                        <img className="icons" src={Jest} alt="" />
                        <img className="icons" src={MySQL} alt="" />
                        <img className="icons" src={Github} alt="" />
                        <img className="icons" src={Java} alt="" />
                        <img className="icons" src={JSX} alt="" />
                        <img className="icons" src={Spring} alt="" />
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default about
