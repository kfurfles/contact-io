import { useEffect } from "react"
import anime from 'animejs'

export function useLandingAnimation(logoRef){

    useEffect(() =>{

        const { width: mainLogoWidth } = logoRef.current.querySelector('.main-logo').getBBox()
        const { width: fullLogoWidth } = logoRef.current.getBBox()


        anime.timeline({
            targets: '.contact-logo .st1',
        })
        .add({
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: function(el, i) { return i * 250 },
        })
        .add({
            fill: ['rgba(0,0,0,0)', '#4C84FF'],
            easing: 'easeInOutSine',
            duration: 1000
        })

        Promise.all([
            anime({
                targets: '.contact-logo',
                translateX: [parseInt(fullLogoWidth - mainLogoWidth),50],
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
        ]).then(() =>{
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
            }).finished.then(() =>{
                const link = logoRef.current.parentNode
                link.setAttribute('style',`
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
    },[])
}