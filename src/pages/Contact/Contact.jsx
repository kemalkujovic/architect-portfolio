import { Grid } from "@mui/material";
import React from "react";
import ContactForm from "../../components/Form/ContactForm";
import Form from "../../components/Form/Form";
import classes from "./Contact.module.css";
import Footer from "../../components/Footer/Footer";
const Contact = () => {
  return (
    <>
      <div className={classes["page-container"]}>
        <Grid direction="row" container className={classes.contact}>
          <Grid item lg={4} xs={12}>
            <ContactForm></ContactForm>
          </Grid>
          <Grid item lg={8} xs={12}>
            <Form></Form>
          </Grid>
        </Grid>
        <div className={classes.footer}>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Contact;
