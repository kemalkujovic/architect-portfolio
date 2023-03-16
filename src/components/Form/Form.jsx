import classes from "./Form.module.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3ca2cy5",
        "template_db52oq4",
        form.current,
        "6qGSj8MWgwS5D-RL1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail} className={classes.form}>
      <div className={classes.inputWrapper}>
        <input type="text" id="name" name="user_name" required />
        <label htmlFor="user_name">Your Name</label>
      </div>
      <div className={classes.inputWrapper}>
        <input type="text" id="email" name="user_email" required />
        <label htmlFor="user_email">Your email</label>
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
