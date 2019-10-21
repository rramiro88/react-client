import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class Login extends Component {

    state = {
        userName: '',
        pass: '',
        user: {},
        redirect: false
    }


    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {

        const body = {
            user: this.state.userName,
            pass: this.state.pass
        }

        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(data => data.json())
            .then(data => {
                this.setState({
                    user: data
                })
                
                this.redirect();
            })
            .catch((e) => console.log(e))

        event.preventDefault();

    }

   
    redirect = () =>{
       this.setState({redirect : true})
    }

    render() {

        const divStyle = {
            width: '30%',
            margin: 'auto',
            display: 'block'
        }

        if(this.state.redirect){
            return <Redirect to={{
                pathname: "/escritorio",
                state : {user: this.state.user}
            }}/>
        }

        return (


            <div style={divStyle}>

                <div className="row" style={{height: "100px"}}></div>
                <form onSubmit={this.handleSubmit}>
                    <span className="input-field row">
                        <input onChange={this.handleInputChange} value={this.state.userName} type="text" name="userName" autoComplete="off" />
                        <label>User</label>
                    </span>
                    <span className="input-field row">
                        <input type="password" onChange={this.handleInputChange}
                            value={this.state.pass} name="pass" />
                        <label>Pass</label>
                    </span>

                    <div className="row">
                        <button className="btn-large col m5" type="submit">
                            Login <i className="fa fa-2x fa-user" />
                        </button>
                        <div className="col m2"></div>
                        <button className="btn-large col m5">
                            New user <i className="fa fa-2x fa-users" />
                        </button>
                    </div>
                </form>


                <ul>
                    {this.state.user.rol ?
                        this.state.user.rol.linksDisponibles.map(s => <li>{s.direccion}</li>) : ""}
                </ul>
            </div>
        )
    }
}
