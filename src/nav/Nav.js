import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/js/dist/dropdown';
import './Nav.css';

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/Home">PRVAEEN KN</a>
          <button
            className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false"aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Project">Project</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Select</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
             <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Project">Project</a>
              </li>
               <li className="nav-item">
                <a className="nav-link" href="#Contact">Contact</a>
              </li>
          </div>
          </div>
        </div>
    </>
  );
}

export default Nav;
