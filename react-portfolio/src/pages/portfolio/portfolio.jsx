import React from 'react'
import Header from '../../components/header/header'
import './portfolio.scss'
import calcPath from '../../components/assets/portfolio images/calculator.PNG'
import gamePath from '../../components/assets/portfolio images/game.PNG'
import punkPath from '../../components/assets/portfolio images/punkapi.PNG'
import ticketPath from '../../components/assets/portfolio images/tickettracker.PNG'
import javaGame from '../../components/assets/portfolio images/javagame.PNG'
import morse from '../../components/assets/portfolio images/morse.PNG'

const portfolio = () => {

    return (
        <div className="portfolio">
            <Header title = {"Portfolio"}/>
            <div className="portfolio__content">
                <div className="portfolio__content-calc d-flex justify-content-center">
                    <a href="https://wtang98.github.io/newcalc/" target="_blank">
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
                                                HTML/CSS and Javascript calculator 
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
                </div>

                <div className="portfolio__content-game d-flex justify-content-center">
                    <a href="https://wtang98.github.io/game/" target="_blank">
                        <div data-aos="flip-left" className="card">
                            <input type="checkbox" id="card2" className="more" aria-hidden="true"/>
                            <div className="content">
                                <div className="front"
                                    style={{backgroundImage: `url(${gamePath})`}}>
                                    <div className="inner">
                                        <h2 className="d-flex text-align-center">Reaction Game</h2>
                                        <label for="card2" className="button" aria-hidden="true">
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
                                                A reaction aim game that uses HTML/SCSS and JavaScript.
                                            </p>
                                        </div>
                                        <label for="card2" className="button return" aria-hidden="true">
                                            <i className="fas fa-arrow-left"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="portfolio__content-API d-flex justify-content-center">
                    <a href="https://wtang98.github.io/punk-api/" target="_blank">
                        <div data-aos="flip-left" className="card">
                            <input type="checkbox" id="card3" className="more" aria-hidden="true"/>
                            <div className="content">
                                <div className="front"
                                    style={{backgroundImage: `url(${punkPath})`}}>
                                    <div className="inner">
                                        <h2 className="d-flex text-align-center">Brewdog Api</h2>
                                        <label for="card3" className="button" aria-hidden="true">
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
                                                Brew Dog Api challenge using React and Api fetches
                                            </p>
                                        </div>
                                        <label for="card3" className="button return" aria-hidden="true">
                                            <i className="fas fa-arrow-left"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="portfolio__content-ticket d-flex justify-content-center">
                    <a href="https://wtang98.github.io/ticket-tracker/" target="_blank">
                        <div data-aos="flip-left" className="card">
                            <input type="checkbox" id="card4" className="more" aria-hidden="true"/>
                            <div className="content">
                                <div className="front"
                                    style={{backgroundImage: `url(${ticketPath})`}}>
                                    <div className="inner">
                                        <h2 className="d-flex text-align-center">Ticket Tracker</h2>
                                        <label for="card4" className="button" aria-hidden="true">
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
                                                React exercise completed alongside another partner.
                                            </p>
                                        </div>
                                        <label for="card4" className="button return" aria-hidden="true">
                                            <i className="fas fa-arrow-left"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="portfolio__content-javagame d-flex justify-content-center">
                    <a href="https://wtang98.github.io/ticket-tracker/" target="_blank">
                        <div data-aos="flip-left" className="card">
                            <input type="checkbox" id="card5" className="more" aria-hidden="true"/>
                            <div className="content">
                                <div className="front"
                                    style={{backgroundImage: `url(${javaGame})`}}>
                                    <div className="inner">
                                        <h2 className="d-flex text-align-center">Java Game</h2>
                                        <label for="card5" className="button" aria-hidden="true">
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
                                                A game written in Java using the pincicples of Object Orientated programming.
                                            </p>
                                        </div>
                                        <label for="card5" className="button return" aria-hidden="true">
                                            <i className="fas fa-arrow-left"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="portfolio__content-morse d-flex justify-content-center">
                    <a href="https://wtang98.github.io/morse-code-translator/" target="_blank">
                        <div data-aos="flip-left" className="card">
                            <input type="checkbox" id="card6" className="more" aria-hidden="true"/>
                            <div className="content">
                                <div className="front"
                                    style={{backgroundImage: `url(${morse})`}}>
                                    <div className="inner">
                                        <h2 className="d-flex text-align-center">Morse Code Translator</h2>
                                        <label for="card6" className="button" aria-hidden="true">
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
                                                Morse code translator using HTML/CSS and JavaScript.
                                            </p>
                                        </div>
                                        <label for="card6" className="button return" aria-hidden="true">
                                            <i className="fas fa-arrow-left"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>



            </div>
        </div>
    )
}
export default portfolio
