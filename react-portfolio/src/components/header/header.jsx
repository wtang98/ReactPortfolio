import React from 'react'
import './header.css'
const Header = (props) => {

    const {title} = props;

    return (
        <div className="header d-flex ">
            <div className="header__left">
                <i class="fas fa-home"></i>
                <i class="fas fa-briefcase"></i>
                <i class="fas fa-address-card"></i>
                <i class="fas fa-mail-bulk"></i>
                a
            </div>

            <div className="header__center">
                {title}
            </div>

            <div className= "header__right">
                a
            </div>
        </div>
    )
}

export default Header
