import React, { Component } from 'react'

export default class ContentDesktop extends Component {
    render() {
        return (
            <div>
                Hola, {this.props.user.nombre}
            </div>
        )
    }
}
