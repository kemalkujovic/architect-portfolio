import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Navigation from "./Navigation";
const MainNavigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  function menuHandler() {
    setIsOpen(!isOpen);
  }
  function handleClick() {
    setIsOpen(false);
  }
  return (
    <>
      {/* logo */}
      <div className={classes.mainContainer}>
        <div className={classes.headerLogo}>
          <NavLink to="/" className={classes.logo}>
            Arch Amra
          </NavLink>
        </div>
        <div>
          <h1 className={classes.headerText}>ARCHITECTURE / INTERIOR DESIGN</h1>
        </div>
        {/* navbar */}
        <div className={classes["top-menu"]}>
          <Navigation></Navigation>
        </div>
        <div className={classes.hamburgerIcon}>
          <MenuIcon onClick={menuHandler} fontSize="large"></MenuIcon>
        </div>
      </div>
      {/* Hamburger Menu */}
      {isOpen && (
        <div className={classes["menu-container"]}>
          <CloseIcon
            className={classes.closeBtn}
            fontSize="large"
            onClick={menuHandler}
          ></CloseIcon>
          <Navigation handleClick={handleClick} />
        </div>
      )}
    </>
  );
};
export default MainNavigation;
