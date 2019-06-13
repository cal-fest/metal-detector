import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Nav = props => (
  <div className="navbar">
    <h1>METAL DETECTOR</h1>
    <img width="60" src="https://www.cludo.com/wp-content/uploads/2018/11/Lightning-Icon.png" />
    <Link to="/"> Home </Link>
    <img width="60" src="https://www.cludo.com/wp-content/uploads/2018/11/Lightning-Icon.png" />
    <Link to="/login"> Login </Link>
    <img width="60" src="https://www.cludo.com/wp-content/uploads/2018/11/Lightning-Icon.png" />
    <Link to={{
      pathname: '/myfavorites',
      state: {
        verified: false
      }
    }}>Favorites</Link>
    < img width="60" src="https://www.cludo.com/wp-content/uploads/2018/11/Lightning-Icon.png" />
    <Link to="/signout"> Signout </Link>
    < img width="60" src="https://www.cludo.com/wp-content/uploads/2018/11/Lightning-Icon.png" />
  </div>
)

export default Nav;