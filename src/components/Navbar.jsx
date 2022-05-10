import React from 'react'

export default function Navbar(props) {
  

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          Abbey Mall
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#">
              Login
            </a>
            <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
