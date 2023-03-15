import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Navigation from "./Navigation";
import { useSelector, useDispatch } from "react-redux";
import { handlerActions } from "../../store";
const MainNavigation = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.showMenu);

  const toggleCounterHandler = () => {
    dispatch(handlerActions.displayMenu());
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
        <div className={classes.hamburgerIcon}>
          <MenuIcon onClick={toggleCounterHandler} fontSize="large"></MenuIcon>
        </div>
      </div>
      {/* Hamburger Menu */}
      {show && (
        <div className={classes["menu-container"]}>
          <CloseIcon
            className={classes.closeBtn}
            fontSize="large"
            onClick={toggleCounterHandler}
          ></CloseIcon>
          <Navigation handleClick={toggleCounterHandler} />
        </div>
      )}
    </>
  );
};
export default MainNavigation;
