import React, { Component } from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <header className={style.mainHeader}>
                <nav>
                    <Link to="/drinks">Drinks</Link>
                    <Link to="/sobre-nos">Sobre nós</Link>
                    <Link to="/">
                        <h1 className={style.logo}>Bons Drinks</h1>
                    </Link>
                    <Link to="/nosso-time">Nosso time</Link>
                    <Link to="/contato">Contato</Link>
                </nav>
            </header>
        )
    }
}
