import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const Navigation = ({ handleClick }) => {
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
            HOME
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
            PROJECTS
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
            ABOUT
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
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
