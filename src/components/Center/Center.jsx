import React, { Component } from 'react'
import { StyledCenter } from './styles'

export default class Center extends Component {
    render() {
        return (
            <StyledCenter>
                {this.props.children}
            </StyledCenter>
        )
    }
}
