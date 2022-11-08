import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-a active" aria-current="page" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-a" href="#">a</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-a dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {props.ServicesText}
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Web Development</a></li>
              <li><a className="dropdown-item" href="/">Android Development</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Maintance</a></li>
            </ul>
          </li>
          <li className="nav-item">
          <a className="nav-a " href="/About" >About</a>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}
         <div  className={`form-check form-switch my-3 text-${props.mode==="light"?'dark':'light'}`}>
        <input  className="form-check-input" onClick={props.ToggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
        {/*  <div  className={`form-check form-switch my-3 mh-3 text-${props.mode==="light"?'#800080	':'light'}`}>
        <input  className="form-check-input" onClick={props.ToMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Purple Mode</label>
        </div>
         <div  className={`form-check form-switch my-3 mh-3 text-${props.mode==="light"?'#008000':'light'}`}>
        <input  className="form-check-input" onClick={props.TogMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Green Mode</label>
        </div>
         <div  className={`form-check form-switch my-3 mh-3 text-${props.mode==="light"?'#800000':'light'}`}>
        <input  className="form-check-input" onClick={props.ToggMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Maroon Mode</label>
        </div> */}
      </div>
    </div>
  </nav>
  )
      }
Navbar.prototype={
    title: PropTypes.string,
    ServicesText : PropTypes.string

}