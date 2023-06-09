import classes from "./Form.module.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Oval } from "react-loader-spinner";
import ErrorModal from "../ErrorModal/ErrorModal";
let className;
const Form = (props) => {
  const form = useRef();
  const [loader, setLoader] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [modal, setModal] = useState(false);

  function closeModal() {
    setModal(false);
  }

  const sendEmail = async (e) => {
    e.preventDefault();

    setSuccessful("");
    setModal(true);
    setLoader(true);
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      );
      className = "green";
      setSuccessful("Thank you for contacting me");
      setLoader(false);
      e.target.reset();
    } catch (error) {
      setSuccessful("Something went wrong, please try again");
      setLoader(false);
      e.target.reset();
    }
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
      {modal && (
        <ErrorModal
          title={successful}
          style={{
            backgroundColor: className === "green" ? "green" : "red",
          }}
          closeModal={closeModal}
        >
          {loader && (
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          )}
        </ErrorModal>
      )}
    </form>
  );
};

export default Form;
