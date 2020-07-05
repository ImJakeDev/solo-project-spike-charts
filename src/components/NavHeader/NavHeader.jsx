import React from "react";
import { Link } from "react-router-dom";

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
        </ul>
      </nav>
    </header>
  );
}

export default NavHeader;
