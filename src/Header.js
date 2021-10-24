import React from "react";
import { Link } from "react-router-dom";
import './App.css';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="aqiHome">Air Quality Index</Link>
        </li>
        <li>
          <Link to="tempHome">Temperature & Weather</Link>
        </li>
        <li>
          <Link to="timeHome ">Current Time</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
