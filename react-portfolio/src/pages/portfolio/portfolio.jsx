import React from 'react'
import Header from '../../components/header/header'
import './portfolio.scss'
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
            <Header title = {"Portfolio"} home={true} portfolio={false} about={true}/>
            <div className="portfolio__content">
                {card}
            </div>
        </div>
    )
}
export default portfolio
