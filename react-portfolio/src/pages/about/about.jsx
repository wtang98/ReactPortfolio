import React from 'react'
import Header from '../../components/header/header'
import DP from '../../components/assets/dp.jpg'

const about = () => {
    return (
        <div>
            <Header title = {"About Me"}/>
            <div className="about">
                <div className="about-left">
                    <img src={DP} alt={DP} />
                </div>
                <div className="about-right">

                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default about
