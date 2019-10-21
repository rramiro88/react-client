import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login'
import Dashboard from './Dashboard'
import Obleas from './Obleas'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={Login} />
                <Route path="/escritorio" component={Dashboard} />
                <Route path="/obleas" component={Obleas} />
            </BrowserRouter>
        )
    }
}
