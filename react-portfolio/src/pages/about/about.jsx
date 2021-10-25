import React from 'react'
import Header from '../../components/header/header'
import './about.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
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
    AOS.init();
    
    return (
        <div className="about">
            <Header title = {"About Me"} className/>
            <div className="about__row1 d-flex justify-content-between" 
                data-aos="fade-right"
                data-aos-delay="200">
                    <div className ="about__row1-content d-flex align-items-center p-3">
                        <div className="about__row1-content-left d-flex justify-content-center"
                            data-aos="flip-left"
                            data-aos-delay="400">
                            <img src={DP} alt={DP} />
                        </div>
                        <div className="about__row1-content-right"
                            data-aos="flip-right"
                            data-aos-delay="400">
                            <p>
                                I'm a London based software developer passionate about writing
                                concise code and working in tech. I graduated the intensive _nology
                                12 week software development course.
                            </p>
                            <p>
                                I attended Swansea university to read War and Society where I received a 2:1.
                            </p>
                        </div>
                    </div>
            </div>
            <div className="about__row2" 
                data-aos="fade-left"
                data-aos-delay="200">
                <div className="about__row2-content2 p-3">
                    <p>Current Technologies:</p>
                    <div className="icon d-flex justify-content-center">
                        <img className="icons html p-3" src={HTML} data-aos="flip-left" data-aos-delay="400"/>
                        <img className="icons css p-3" src={CSS} data-aos="flip-left" data-aos-delay="500"/>
                        <img className="icons js p-3" src={JS} data-aos="flip-left" data-aos-delay="600"/>
                        <img className="icons sass p-3" src={Sass} data-aos="flip-left" data-aos-delay="700"/>
                        <img className="icons google p-3" src={Google} data-aos="flip-left" data-aos-delay="800"/>
                        <img className="icons bootstrap p-3" src={Bootstrap} data-aos="flip-left" data-aos-delay="900"/>
                        
                    </div>
                    <div className="icon d-flex justify-content-center">
                        <img className="icons jest p-3" src={Jest} data-aos="flip-right" data-aos-delay="1500" />
                        <img className="icons sql p-3" src={MySQL} data-aos="flip-right" data-aos-delay="1400" />
                        <img className="icons gh p-3" src={Github} data-aos="flip-right" data-aos-delay="1300" />
                        <img className="icons java p-3" src={Java} data-aos="flip-right" data-aos-delay="1200" />
                        <img className="icons jsx p-3" src={JSX} data-aos="flip-right" data-aos-delay="1100" />
                        <img className="icons spring p-3" src={Spring} data-aos="flip-right" data-aos-delay="1000" />
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default about
