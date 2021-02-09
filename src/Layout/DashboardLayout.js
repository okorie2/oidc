import React, { Children } from "react";
import { Link } from "react-router-dom";
function DashboardLayout({ children }) {
  return (
    <>
      <div>
        <div className="dashboard-nav">
          <div className="topnav">
            <div className="page-logo">
              <div className="logo-container">
                <Link to="/">
                  <img src="/Assets/orange-logo.png" alt />
                </Link>
              </div>
              <div className="page-title">
                <h3>Header</h3>
              </div>
            </div>
            <div className="top-nav-menu">
              <div className="d-flex">
                <div className="search">
                  <img src="/Assets/search.png" alt />
                  <input
                    type="search"
                    name
                    id="search"
                    placeholder="Portal search"
                  />
                </div>
                <div className="bell">
                  <img src="/Assets/bell.png" alt />
                  <div className="circlee" />
                </div>
                <div className="logout ml-5">
                  <img src="/Assets/powe.png" alt />
                </div>
              </div>
            </div>
          </div>
          <div className="sidenav">
            <ul className="menus">
              <li className="current">
                <a href="#">Profile</a>
              </li>
              <li>
                <Link to="/notice">Notice</Link>
              </li>
              <li>
                <a href="#">Request</a>
              </li>
              <li>
                <a href="#">Schedule</a>
              </li>
              <li>
                <a href="#">Message</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="rest-bg" />
        </div>
      </div>
      {children}
      <footer className="dashboard">
        <a href="#">Terms &amp; conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Documentation</a>
        <a href="#">Our Website</a>
      </footer>
    </>
  );
}

export default DashboardLayout;
