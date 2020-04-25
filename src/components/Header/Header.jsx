import React, { useRef } from 'react'

import { ReactComponent as LogoSvg } from "./../../assets/img/logo.svg";
import { useLandingAnimation } from './../../hooks/useLandingAnimation'
import './style.scss'


const Header = () => {

    const logoEl = useRef(null)

    useLandingAnimation(logoEl)
    
    return (
        <header className="topbar">
            <div className="container">
                <a href="/" className="topbar__logo" >
                <LogoSvg alt="Logo Contact" ref={logoEl} className="contact-logo" />
                </a>
            </div>
        </header>
    )
}

export default Header