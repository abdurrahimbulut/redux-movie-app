import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark mb-3 bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
                    FilmSitesi
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link className="nav-link" to="/">
                    Anasayfa
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/favorites">
                    Favoriler
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
