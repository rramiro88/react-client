import React, { Component } from 'react'

export default class ContentDesktop extends Component {
    render() {
        return (
            <div class="card blue">
                <div class="card-content white-text">
                    Hola, {this.props.user.nombre}
                </div>
            </div>
        )
    }
}
