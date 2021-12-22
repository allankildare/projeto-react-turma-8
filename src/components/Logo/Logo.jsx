import React, { Component } from 'react'
import style from './Logo.module.css'

export default class Logo extends Component {
    render() {
        return (
            <h1 className={style.logo}>
                Bons Drinks
            </h1>
        )
    }
}
