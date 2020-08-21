import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const style = {
    color: "blue",
  };

  return (
    <div className="nav">
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={style} to="/about">
          <li>About</li>
        </Link>
        <Link style={style} to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}
