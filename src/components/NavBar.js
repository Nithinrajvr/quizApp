import React, { useContext } from "react";
import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../App";

//test

const Navbar = () => {
  const { setQuestionData } = useContext(DataContext);
  const location = useLocation();
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
          {location.pathname === "/quiz" ? (
            <Link style={{ cursor: "not-allowed", color: "grey" }} to="/quiz">
              Start Quiz
            </Link>
          ) : (
            <Link
              to="/quiz"
              onClick={() => {
                setQuestionData([]);
              }}
            >
              Start Quiz
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
