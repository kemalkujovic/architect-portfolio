import { Grid } from "@mui/material";
import React from "react";
import classes from "./ProjectsCard.module.css";
import { Link } from "react-router-dom";
const ProjectsCard = (props) => {
  return (
    <div className={classes.container}>
      <Grid item container direction={props.direction}>
        <Grid item lg={6} xs={12} display="flex" justifyContent="center">
          <div className={classes.descriptionWrapper}>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <button className={classes.buttonDiscover}>
              <Link to="/products">DISCOVER MORE</Link>
            </button>
          </div>
        </Grid>
        <Grid item lg={6} xs={12}>
          <div className={classes.imageWrapper}>
            <img src={props.src} alt="Project" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectsCard;
