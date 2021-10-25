import React from 'react'
import Header from '../../components/header/header'
import './home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const home = () => {
    AOS.init();

    return (
        <div className="home">
            <Header title ={"Home"}/>
            <div className="home__content d-flex justify-content-center flex-column align-items-center w-100">
                <div className="home__content-landing"
                data-aos="zoom-out"
                data-aos-delay="200">
                    <h1 className="title m-0 ">Hi! My Name is Wei-Tong Tang and i am a:</h1>
                    <div className="text-wrapper d-flex justify-content-center">
                        <div className="text1">Software</div>
                        <div className="text2">React</div>
                        <div className="text3">JavaScript</div>
                    </div>
                <h1 className="end">Developer</h1>
                </div>
            </div>
            
        </div>
    )
}

export default home