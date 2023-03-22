import React from "react";
import Footer from "../../components/Footer/Footer";
import classes from "./About.module.css";
const About = () => {
  return (
    <>
      <div className={classes["page-container"]}>
        <p>About Page</p>
        <Footer></Footer>
      </div>
    </>
  );
};

export default About;
