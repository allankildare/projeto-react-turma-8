import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" />
                <label htmlFor="email">E-mail</label>
                <input type="text" name="email" />
                <label htmlFor="message">Mensagem</label>
                <textarea name="message" cols="30" rows="10"></textarea>
            </div>
        )
    }
}
