import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Navigation from "./Navigation";
import { useSelector, useDispatch } from "react-redux";
import { handlerActions } from "../../store";
import Hamburger from "hamburger-react";

const MainNavigation = () => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.showMenu);

  const toggleCounterHandler = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Logo and Text header */}
      <div className={classes.mainContainer}>
        <div className={classes.headerLogo}>
          <NavLink to="/" className={classes.logo}>
            Arch Amra
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
            <Navigation handleClick={toggleCounterHandler} />
          </div>
        </div>
      )}
    </>
  );
};
export default MainNavigation;
