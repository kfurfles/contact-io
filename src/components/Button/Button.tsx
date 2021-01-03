import React from 'react'
import { IButton } from './IButton'
import { Button } from './styled'

const ButtonComponent: React.FC<IButton> = ({ selected, direction, children, ...props }) => {
    const flow = selected && direction === 'up' ? 'fas fa-sort-up' : 'fas fa-sort-down'

    return (
        <Button {...props} selected={selected} direction={direction}>
            {children} <i className={flow} />
        </Button>  
    )
}

ButtonComponent.defaultProps = {
    selected: false,
    direction: 'down'
}

export default ButtonComponent