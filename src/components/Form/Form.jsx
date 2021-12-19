import React, { Component } from 'react'
import style from './Form.module.css'
import Button from './../Button/Button'
export default class Form extends Component {
    constructor(props) {
        super(props)
        this.handleBlurClick = this.handleBlurClick.bind(this)
        this.state = {
            name: '',
            nameError: ''
        }
    }

    handleBlurClick({ target }) {
        this.setState({ name: target.value })
        if (target.value.length > 100) {
            this.setState(
                {
                    nameError: 'Número de caracteres excedido'
                }
            )
        }
    }
    render() {
        return (
            <form className={`${style.contato} container`}>
                <fieldset>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" onBlur={this.handleBlurClick} />
                    <p>{this.state.nameError}</p>
                </fieldset>
                
                <fieldset>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" />
                </fieldset>
                <fieldset>
                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" cols="30" rows="10"></textarea>
                </fieldset>
                <Button text="Enviar" />
            </form>
        )
    }
}
