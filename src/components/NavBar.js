import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/actors" activeClassName="active">
            Actors
          </NavLink>
        </li>
        <li>
          <NavLink to="/directors" activeClassName="active">
            Directors
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" activeClassName="active">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
