import React, { Component } from 'react'
import style from './Button.module.css'

class Button extends Component {
    constructor(props) {
        super(props)
        this.meuClique = this.meuClique.bind(this)
        this.state = {
            disabled: false
        }
    }
    // aqui temos definidos os valores padroes das props desse componente
    static defaultProps = {
        type: 'button'
    }

    meuClique() {
        this.setState({ disabled: true })
        setInterval(() => {
            this.setState({ disabled: false })
        }, 3000)
    }
    
    render() {
        return (
            <button
                type={this.props.type}
                disabled={this.state.disabled ? true : false}
                onClick={this.meuClique}
                className={style.btn}
                >
                    {this.props.text}
            </button>
        )
    }
}

export default Button
