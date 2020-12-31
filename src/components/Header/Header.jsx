import React, {useEffect, useRef} from 'react'

import { ReactComponent as LogoSvg } from "./../../assets/img/logo.svg";
import './style.scss'
import anime from "animejs";


const Header = () => {

    const logoEl = useRef(null)

    useEffect(() => {

        const el = logoEl.current.querySelector('path')
        if(!el) return;
        const {width: mainLogoWidth} = logoEl.current.querySelector('path').getBBox()
        const {width: fullLogoWidth} = logoEl.current.getBBox()


        anime.timeline({
            targets: '.contact-logo .st1',
        })
        .add({
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: function (el, i) {
                return i * 250
            },
        })
        .add({
            fill: ['rgba(0,0,0,0)', '#4C84FF'],
            easing: 'easeInOutSine',
            duration: 1000
        })

        Promise.all([
            anime({
                targets: '.contact-logo',
                translateX: [parseInt(fullLogoWidth - mainLogoWidth), 50],
                duration: 1000,
                easing: 'linear',
                delay: '2000'
            }).finished,
            anime({
                targets: '.contact-logo .st0',
                opacity: 1,
                fill: ['rgba(0,0,0,0)', '#2C3341'],
                duration: 1000,
                easing: 'linear',
                delay: '2000'
            }).finished
        ]).then(() => {
            anime.timeline({
                targets: '.topbar'
            })
                .add({
                    height: '100vh'
                })
                .add({
                    targets: '.topbar__logo',
                    opacity: 0,
                    easing: 'linear',
                    duration: 500,
                    endDelay: 1000
                }).finished.then(() => {
                const link = logoEl.current.parentNode
                link.setAttribute('style', `
                    position: static;
                    top: initial;
                    left: initial;
                    background: transparent;
                    width: initial;
                    height: initial;
                    transform: none;
                    display: block;`
                )
                return true
            })
                .then(() => {
                    anime({
                        targets: '.topbar',
                        height: '70px'
                    })
                })

        })

    },[logoEl])

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