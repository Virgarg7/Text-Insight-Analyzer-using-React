import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    // Here we also want to change the Mode of Nvabar so we are first converting it to Javascript using curly bracket 
    // and then converting to Template Literals using Backticks 
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Action</Link></li>
                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled">Disabled</Link>
            </li>
          </ul>

          <div className="conatiner mx-4">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          {/* // It is Used to Set the color of Text of Toggle mode as it's color is inverse of the color of 
          toggle so thats why we have used Ternary Opertor in it  */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} `}  >
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Enable Dark Mode
            </label>
          </div>

        </div>
      </div>
    </nav>
  );
}

// To set the Proptype of a particular Component so that 
// wrong information cannot be sent 

Navbar.propTypes = {
  // To ensure there should be any value passed ,  either defualt or user 
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

// If no arguement is passed inside the Navbar in the app.js
Navbar.defaultProps = {
  title: "Set Title",
  about: "Set About"
}