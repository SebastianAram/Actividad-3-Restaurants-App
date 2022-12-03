import React from 'react'
import './styles.css'
import { Link, NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-page">
        <div className="container-fluid">
          <Link className="navbar-brand" to ="/inicio">IURestaurants
          <img src="./favicon.ico"className="d-inline-block align-text-middle"
          />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link"  to="/inicio">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/buscar">Buscar restaurante</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/agregar">Nuevo Restaurante</NavLink>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
  )
}
