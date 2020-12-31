import React from 'react'
import {IButton } from './IButton'

import './style.scss'

const Button: React.FC<IButton> = ({ selected, direction, children, ...props }) => {
    const flow = selected && direction === 'up' ? 'fas fa-sort-up' : 'fas fa-sort-down'

    const selectedClassName = selected ? 'is-selected' : ''
    const flowClassName = direction === 'up' && selected ? 'is-up' : 'is-down'

    const computedClass = `${selectedClassName} ${flowClassName}`

    return (
        <button className={`ct-button ${computedClass}`.trim()} {...props}>
            {children} <i className={flow} />
        </button>  
    )
}

Button.defaultProps = {
    selected: false,
    direction: 'down'
}

export default Button