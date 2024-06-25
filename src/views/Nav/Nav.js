import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/jobs">Job</Link>
        <Link to="/todo">todo</Link>
        <Link to="/about">about</Link>
        <Link to="/quiz">cookery</Link>
      </div>
    );
  }
}
export default Nav;
