import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

//test

const Navbar = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/quiz">Start Quiz</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
