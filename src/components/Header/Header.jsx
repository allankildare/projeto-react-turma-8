import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Logo, StyledHeader } from './styles'

export default class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <nav>
                    <Link to="/drinks">Drinks</Link>
                    <Link to="/sobre-nos">Sobre nós</Link>
                    <Link to="/">
                        <Logo>Bons Drinks</Logo>
                    </Link>
                    <Link to="/nosso-time">Nosso time</Link>
                    <Link to="/contato">Contato</Link>
                </nav>
            </StyledHeader>
        )
    }
}
