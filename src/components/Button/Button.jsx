import React from 'react'

import './style.scss'

const Button = ({ selected, direction, children, ...props }) => {
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
    direction: true
}

export default Button