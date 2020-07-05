import React from "react";
import { Link } from "react-router-dom";
import "./NavHeader.css";

function NavHeader() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/pie">Pie</Link>
          </li>
          <li>
            <Link to="/radar">Radar</Link>
          </li>
          <li>
            <Link to="/heatmap">Heat Map</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavHeader;
