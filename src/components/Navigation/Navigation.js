import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const Navigation = ({ handleClick, children }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            onClick={handleClick}
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleClick}
            to="/projects"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            onClick={handleClick}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleClick}
            to="/contact"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      {children}
    </nav>
  );
};
export default Navigation;
