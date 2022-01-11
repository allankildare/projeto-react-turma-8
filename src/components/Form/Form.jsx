import React, { useState, useRef } from 'react'
import style from './Form.module.css'
import Button from './../Button/Button'

export default function Form () {
    const [nameError, setNameError] = useState('')
    const emailInput = useRef(null)

    function handleBlurClick ({ target }) {
        if (target.value.length > 100) {
            setNameError('Número de caracteres excedido')
        }
    }

    function handleClick() {
        emailInput.current.focus()
    }

    return (
        <form className={`${style.contato} container`}>
            <fieldset>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" onBlur={handleBlurClick} />
                <p>{nameError}</p>
            </fieldset>
            
            <fieldset>
                <label htmlFor="email">E-mail</label>
                <input type="text" name="email" ref={emailInput} />
                <button type="button" onClick={handleClick}>Ref</button>
            </fieldset>
            <fieldset>
                <label htmlFor="message">Mensagem</label>
                <textarea name="message" cols="30" rows="10"></textarea>
            </fieldset>
            <Button text="Enviar" />
        </form>
    )
    
}
