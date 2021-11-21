import React from 'react'
import Header from '../../components/header/header'
import './portfolio.scss'
import calcPath from '../../components/assets/portfolioImages/calculator.PNG'
import gamePath from '../../components/assets/portfolioImages/game.PNG'
import punkPath from '../../components/assets/portfolioImages/punkapi.PNG'
import ticketPath from '../../components/assets/portfolioImages/tickettracker.PNG'
import javaGame from '../../components/assets/portfolioImages/javagame.PNG'
import morse from '../../components/assets/portfolioImages/morse.PNG'
import airbnb from '../../components/assets/portfolioImages/airbnb.PNG'
import FaceBook from '../../components/assets/portfolioImages/facebook.PNG'
import portItems from '../../portfolioItems';
import Card from "../../components/card/Card";

const portfolio = () => {

    const card = portItems.map((portItem) => {
        return <Card gHubUrl={portItem.gHubUrl} 
        cardId={portItem.cardId} 
        backgroundImagePath={portItem.backgroundImagePath}
        title={portItem.title}
        description={portItem.description}
        />
    })


    return (
        <div className="portfolio">
            <Header title = {"Portfolio"}/>
            <div className="portfolio__content">
                {card}

                {/* <div className="portfolio__content-calc d-flex justify-content-center">
                    <a href="https://wtang98.github.io/Calculator/" target="_blank">
                        <div data-aos="flip-left" className="card">
                            <input type="checkbox" id="card1" className="more" aria-hidden="true"/>
                            <div className="content">
                                <div className="front"
                                    style={{backgroundImage: `url(${calcPath})`}}>
                                    <div className="inner">
                                        <h2 className="d-flex text-align-center">Calculator</h2>
                                        <label for="card1" className="button" aria-hidden="true">
                                            Details
                                        </label>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="inner">
                                        <div className="info">
                                        </div>
                                        <div className="description">
                                            <p>
                                                HTML/CSS and Javascript calculator.
                                            </p>
                                        </div>
                                        <label for="card1" className="button return" aria-hidden="true">
                                            <i className="fas fa-arrow-left"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div> */}

            </div>
        </div>
    )
}
export default portfolio
