import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-navbar">
            <div className="container-fluid">
                <Link className="navbar-brand nav-link" to="/"><img src={process.env.PUBLIC_URL + '/favicon-32x32.png'} alt={props.title} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li exact className="nav-item " activeClassName="active">
                            <NavLink className="nav-link" aria-current="page" to="/" >{props.homeText}</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/about" activeClassName="active">{props.aboutText}</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/contact" activeClassName="active">{props.contactText}</NavLink>
                        </li>
                    </ul>
                </div>

                <form className="d-flex ms-auto me-3">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-warning" type="submit">Search</button>
                </form>

                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={props.handleSwitchButton} />
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    loginText: PropTypes.string,
    homeText: PropTypes.string,
    aboutText: PropTypes.string,
    contactText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set title here",
    loginText: "Set login here",
    homeText: "Set home here",
    aboutText: "Set about here",
    contactText: "Set contact here"
}