import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import Navigation from "./Navigation";
import Hamburger from "hamburger-react";
import { Animation } from "react-easy-animations";
const MainNavigation = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenuHandler = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Logo and Text header */}
      <div className={classes.mainContainer}>
        <div className={classes.headerLogo}>
          <NavLink to="/" className={classes.logo}>
            <Animation
              type="popIn"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              Arch Amra
            </Animation>
          </NavLink>
        </div>
        <div>
          <h1 className={classes.headerText}>ARCHITECTURE / INTERIOR DESIGN</h1>
        </div>
        {/* Main navigation */}
        <div className={classes["top-menu"]}>
          <Navigation></Navigation>
        </div>
        <div className={isOpen ? classes.activeMenu : classes.hamburgerIcon}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            className={classes.hamburgerIcons}
            duration={0.7}
            color="white"
          />
        </div>
      </div>
      {/* Show Menu */}
      {isOpen && (
        <div className={classes["menu-container"]}>
          <div className={classes["fade-in-text"]}>
            <Navigation handleClick={toggleMenuHandler} />
          </div>
        </div>
      )}
    </>
  );
};
export default MainNavigation;
