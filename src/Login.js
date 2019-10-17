import React, { Component } from 'react'


export default class Login extends Component {

    state = {
        userName: '',
        pass: '',
        user: {}
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
                console.log(data)

            })
            .catch((e) => console.log(e))

        event.preventDefault();

    }


    render() {

        const divStyle = {
            width: '30%',
            margin: 'auto',
            display: 'block'
        }

        return (


            <div style={divStyle}>

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
                        <button className="btn-large col m5" type="submit">
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
