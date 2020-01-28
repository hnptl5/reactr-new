import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./LeftNav.scss";

const LeftNavComponent = props => {
  return (
    <Nav>
      <NavLink className="nav-link border-bottom left-nav" to="/dashboard">
        <i className="fab fa-microsoft "></i>Dashboard
      </NavLink>
      <NavLink className="nav-link left-nav" to="/trends">
        <i className="fab fa-microsoft"></i>Trends
      </NavLink>
      <NavLink className="nav-link left-nav" to="/transactions">
        <i className="fab fa-microsoft"></i>Transactions
      </NavLink>
      <NavLink className="nav-link border-bottom left-nav" to="/benchmarks">
        <i className="fab fa-microsoft"></i>Industry Benchmarks
      </NavLink>
      <NavLink
        className="nav-link py-3 border-bottom mr-2 left-nav"
        to="/settings"
      >
        <i className="fab fa-microsoft"></i>Settings
      </NavLink>
      <NavLink className="nav-link border-bottom py-3 left-nav" to="/faq">
        <i className="fab fa-microsoft"></i>Faq
      </NavLink>
      <NavLink className="nav-link left-nav" to="/tools">
        <i className="fab fa-microsoft"></i>Recommended Tools
      </NavLink>

      <NavLink
        className="nav-link mt-5 text-muted text-center left-nav"
        to="/policies"
      >
        <i />
        Terms of Service <br />
        <i />
        Privacy Policy
      </NavLink>
    </Nav>
  );
};

export default LeftNavComponent;
