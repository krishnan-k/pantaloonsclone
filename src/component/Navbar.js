import React from "react";
import "./navbar.css";
import logo from "../image/logo_pantaloons.svg";
import { Link } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
export const Navbar = () => {
  return (
    <div className="navbar_section">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} />
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
                <Link
                  class="nav-link active text-uppercase ms-3 me-3 fw-normal text-light"
                  aria-current="page"
                  to="women"
                >
                  women
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-uppercase ms-3 me-3 fw-normal text-light"
                  to="men"
                >
                  men
                </Link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-uppercase ms-3 me-3 fw-normal text-light"
                  href="#"
                >
                  kids
                </a>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-uppercase ms-3 me-3 fw-normal text-light"
                  to="/"
                >
                  home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-uppercase ms-3 me-3 fw-normal text-light"
                  to="brand"
                >
                  brands
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-uppercase ms-3 me-3 fw-normal text-light"
                  to="beauty"
                >
                  beauty
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="account-icon ms-2 me-2">
          <Link to="account">
            <FiUser />
          </Link>
        </div>
        <div className="cart-icon ms-2 me-2">
          <Link to="cart">
            <IoBagHandleOutline />
          </Link>
        </div>
      </nav>
    </div>
  );
};
