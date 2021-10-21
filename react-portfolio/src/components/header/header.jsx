import React from 'react'

const Header = (props) => {
    
    const {title} = props;

    return (
        <div className="header">
            <div className="header__left">
                
            </div>

            <div className="header__center">
                {title}
            </div>

            <div className= "header__right">

            </div>
        </div>
    )
}

export default Header
