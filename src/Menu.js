import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Menu extends Component {
  render() {

    if (this.props.data) {
      var links = this.props.data.rol.linksDisponibles.map(l =><li><Link to={l.direccion.split(".")[0]} key={l.descripcion}> {l.descripcion} </Link></li>)
    }



    return (

      <nav>
        <div className="nav-wrapper">
          <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            {links}
          </ul>
          <ul>
            <li role="menuitem" style={{ float: "right" }}>

              <a href="#">
                <i className="fa fa-power-off fa-2x"></i>
              </a>
            </li>
          </ul>

        </div>
      </nav >

    )
  }
}
