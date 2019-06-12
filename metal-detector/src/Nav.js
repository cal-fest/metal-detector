import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Nav = props => (
  <div className="navbar">
    <h1>METAL DetecTOR</h1>
    {/* <StyledButton /> */}
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to={{
      pathname: '/myfavorites',
      state: {
        verified: false
      }
    }}>Favorites</Link>
    <Link to="/signout">Signout</Link>
  </div>
)

export default Nav;