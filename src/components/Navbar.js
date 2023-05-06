import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

import "../App.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentDidMount() {
    const loginData = localStorage.getItem("loginData");
    if (loginData) {
      const user = JSON.parse(loginData).name;
      this.setState({ user });
    }
  }

  handleLogout() {
    localStorage.removeItem("loginData");
    this.setState({ user: null });
  }

  render() {
    return (
      <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
          {this.state.user !== null ? (
            <>
              <li className="nav-item ml-5">
                <span className="nav-link">{this.state.user}</span>
              </li>
              <li className="nav-item ml-5">
                <span
                  className="nav-link"
                  onClick={this.handleLogout}
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </span>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item ml-5 login">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item ml-5 register">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <i className="fas fa-cart-plus">my cart</i>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3 rem;
    text-transform: capitalize;
  }
`;

export default Navbar;
