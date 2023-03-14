import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = (props) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.headerLogo}>
        <NavLink to="/" className={`${classes.logo} `}>
          Arch Amra
        </NavLink>
      </div>
      <div>
        <h1 className={classes.headerText}>ARCHITECTURE / INTERIOR DESIGN</h1>
      </div>
      <nav>
        <ul className={classes.navBar}>
          <li>
            <NavLink
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
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MainNavigation;
