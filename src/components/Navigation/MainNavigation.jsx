import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Menu } from "@mui/material";
const MainNavigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  function menuHandler() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }
  function handleClick() {
    setIsOpen(false);
  }
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.headerLogo}>
          <NavLink to="/" className={classes.logo}>
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
          <div
            className={isOpen ? classes.hamburgerOpen : classes.hamburgerNav}
          >
            <MenuIcon onClick={menuHandler} fontSize="large"></MenuIcon>
          </div>
        </nav>
      </div>
      {/* Hamburger Menu */}
      {isOpen && (
        <div className={classes["menu-container"]}>
          <CloseIcon
            className={classes.closeBtn}
            fontSize="large"
            onClick={menuHandler}
          ></CloseIcon>
          <nav>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  onClick={handleClick}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  onClick={handleClick}
                  to="/projects"
                >
                  projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  onClick={handleClick}
                  to="/contact"
                >
                  contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  onClick={handleClick}
                  to="/about"
                >
                  about
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default MainNavigation;
