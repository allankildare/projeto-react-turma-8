import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
    render() {
        return (
            <header className="mainHeader">
                <ul>
                    <li>Drinks</li>
                    <li>Sobre nós</li>
                    <li>
                        <h1 className="logo">Bons Drinks</h1>
                    </li>
                    <li>Nosso time</li>
                    <li>Contato</li>
                </ul>
            </header>
        )
    }
}
