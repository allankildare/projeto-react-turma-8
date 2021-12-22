import React, { Component } from 'react'
import style from './Center.module.css'

export default class Center extends Component {
    render() {
        return (
            <div className={style.centerDiv}>
                {this.props.children}
            </div>
        )
    }
}
