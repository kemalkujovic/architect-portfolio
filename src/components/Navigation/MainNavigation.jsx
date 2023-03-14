import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = (props) => {
  return (
    <div>
      <div>
        <h1>Arch Amra</h1>
        <h5>ARCHITECTURE / INTERIOR DESIGN</h5>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                isActive ? classes.active : undefined;
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => {
                isActive ? classes.active : undefined;
              }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                isActive ? classes.active : undefined;
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                isActive ? classes.active : undefined;
              }}
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
