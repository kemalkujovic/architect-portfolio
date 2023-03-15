import React from "react";
import classes from "./Form.module.css";
const Form = () => {
  return (
    <form className={classes.form}>
      <div className={classes.inputWrapper}>
        <input type="text" id="name" name="name" required />
        <label htmlFor="name">Your Name</label>
      </div>
      <div className={classes.inputWrapper}>
        <input type="text" id="email" name="email" required />
        <label htmlFor="email">Your email</label>
      </div>
      <div className={classes.inputWrapper}>
        <input type="text" id="message" name="message" required />
        <label htmlFor="message">Your message</label>
      </div>
      <div className={classes.wrapperButton}>
        <button>SEND</button>
      </div>
    </form>
  );
};

export default Form;
