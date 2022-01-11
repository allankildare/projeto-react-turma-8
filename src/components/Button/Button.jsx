import React, { useState } from 'react'
import { StyledButton } from './styles'

function Button (props) {
    const [disabled, setDisabled] = useState(false)
    const { type = 'button', text } = props

    function meuClique() {
        setDisabled(true)

        setInterval(() => {
            setDisabled(false)
        }, 3000)
    }

    return (
        <StyledButton
            type={type}
            disabled={disabled ? true : false}
            onClick={meuClique}
            >
                {text}
        </StyledButton>
    )
}

export default Button
