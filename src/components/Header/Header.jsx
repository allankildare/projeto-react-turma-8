import React, { Component } from 'react'
import style from './Header.module.css'
export default class Header extends Component {
    render() {
        return (
            <header className={style.mainHeader}>
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
