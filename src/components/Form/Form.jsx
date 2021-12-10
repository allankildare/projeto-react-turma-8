import React, { Component } from 'react'
import './Form.css'
export default class Form extends Component {
    render() {
        return (
            <form className="contato container">
                <fieldset>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" />
                </fieldset>
                <fieldset>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" />
                </fieldset>
                <fieldset>
                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" cols="30" rows="10"></textarea>
                </fieldset>
                <button type="submit">Enviar</button>
            </form>
        )
    }
}
