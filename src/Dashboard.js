import React, { Component } from 'react'
import Menu from './Menu'
import ContentDesktop from './ContentDesktop'

export default class Dashboard extends Component {

    state = {
        user: this.props.location.state.user
    }

    render() {

        return (

            <div>
                <Menu data={this.state.user} />

                <div className="row margin-row">
                    <div className="card">
                        <div className="card-panel grey lighten-4">
                            <div className="row">
                                <div className="col s8">

                                </div>

                                <div className="col s4">
                                    <h5 style={{textAlign: "right"}} classNameName="animated fadeInDown indigo-text"> Escritorio </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col s3">

                    </div>

                    <div className="col s6">

                        <ContentDesktop user={this.state.user} />
                        
                    </div>

                    <div className="col s3">

                    </div >

                </div >

                <div className="row">

                </div>

            </div >
        )
    }
}
