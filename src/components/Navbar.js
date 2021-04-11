import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

function Navbar() {
  let colors = {
    color: "#40E0D0",
  };
  let bcolors = {
    backgroundColor: "#40E0D0",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Sidebar />
        <a className="navbar-brand" href="#">
          Grocery <b style={colors}>Store</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify content-start"
          id="navbarCollapse"
        >
          <div className="navbar-nav">
            <a href="#" className="nav-item nav-link">
              Home
            </a>
            <a href="/categoryDashboard" className="nav-item nav-link">
              Category
            </a>
            <div className="nav-item dropdown show">
              <a
                href="#"
                data-toggle="dropdown"
                className="nav-item nav-link dropdown-toggle"
                aria-expanded="false"
              >
                Products
              </a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                  Add Product
                </a>
                <a href="#" className="dropdown-item">
                  Update Product
                </a>
                <a href="#" className="dropdown-item">
                  View Product
                </a>
                <a href="#" className="dropdown-item">
                  Delete Product
                </a>
              </div>
            </div>

            <a href="#" className="nav-item nav-link active">
              OrderList
            </a>
            <a className="nav-link disabled" href="#">
              Cart
            </a>
            <a href="#" className="nav-item nav-link active">
              Contact Us
            </a>
          </div>
          <form className="navbar-form form-inline"></form>

          <div className="navbar-nav ml-auto action-buttons">
            <div className="nav-item dropdown show"></div>
            <a
              href="#"
              data-toggle="dropdown"
              className="nav-link dropdown-toggle mr-4"
              aria-expanded="true"
            >
              Login
            </a>

            <div className="nav-item dropdown">
              <a
                href="#"
                data-toggle="dropdown"
                className="btn btn-primary dropdown-toggle sign-up-btn"
                aria-expanded="false"
                style={bcolors}
              >
                Sign up
              </a>
              <div className="dropdown-menu action-form"></div>
            </div>
          </div>
        </div>
      </nav>

      <div className='search-box-wrapper'>
        <div className="input-group search-box search-box">
          <input
            type="text"
            id="search"
            class="form-control"
            placeholder="Search products.."
          />
          <button
            className="u-margin-left-20 btn btn-outline-success my-2 my-sm-0"
            type="submit"
            style={colors}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
