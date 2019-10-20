import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login'
import Dashboard from './Dashboard'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
            </BrowserRouter>
        )
    }
}
