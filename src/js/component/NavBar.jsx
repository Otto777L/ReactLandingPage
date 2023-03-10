import React from "react";

function NavBar(){
    return (<nav className="full navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 position-absolute end-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>       
          <li className="nav-item">
            <a className="nav-link disabled">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>)}

export default NavBar;