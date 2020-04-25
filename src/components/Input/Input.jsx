import React from 'react'

import './style.scss'

const Input = ({ className, ...props}) => {
    return(
        <input type="text" {...props} className={`ct-input ${className}`.trim()} placeholder="Pesquisar" /> 
    )
}

export default Input