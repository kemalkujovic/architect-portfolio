import { Grid } from "@mui/material";
import React from "react";
import ContactForm from "../../components/Form/ContactForm";
import Form from "../../components/Form/Form";
import classes from "./Contact.module.css";
const Contact = () => {
  return (
    <Grid direction="row" container className={classes.contact}>
      <Grid item lg={4} xs={12}>
        <ContactForm></ContactForm>
      </Grid>
      <Grid item lg={8} xs={12}>
        <Form></Form>
      </Grid>
    </Grid>
  );
};

export default Contact;
