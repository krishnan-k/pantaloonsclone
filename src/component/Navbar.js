import React from "react";
import "./navbar.css";
import logo from '../image/logo_pantaloons.svg';
export const Navbar = () => {
  return (
    <div className="navbar_section">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo}/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-uppercase ms-3 me-3 fw-normal text-light" aria-current="page" href="#">women</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-uppercase ms-3 me-3 fw-normal text-light" href="#">men</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-uppercase ms-3 me-3 fw-normal text-light"
                  href="#">kids</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-uppercase ms-3 me-3 fw-normal text-light"
                  href="#">home</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-uppercase ms-3 me-3 fw-normal text-light"
                  href="#">brands</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-uppercase ms-3 me-3 fw-normal text-light"
                  href="#">beauty</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
