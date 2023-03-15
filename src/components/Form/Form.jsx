import React from "react";
const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Your Email</label>
        <input type="text" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="message">Your message</label>
        <input type="text" id="message" name="message" required />
      </div>
      <button>SEND</button>
    </form>
  );
};

export default Form;
