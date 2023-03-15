import classes from "./Contact.module.css";
const ContactForm = () => {
  return (
    <div className={classes.containerContact}>
      <div className={classes.headerContact}>
        <h1>CONTACT</h1>
      </div>
      <div className={classes.contactForm}>
        <span>Amra Kujovic</span>
        <p>Phone: 06232323</p>
        <p>Email: amrakujovic@gmail.com</p>
      </div>
    </div>
  );
};
export default ContactForm;
