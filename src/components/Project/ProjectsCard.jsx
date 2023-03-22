import { Grid } from "@mui/material";
import React from "react";
import classes from "./ProjectsCard.module.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const ProjectsCard = (props) => {
  return (
    <div className={classes.container}>
      <Grid item container direction={props.direction}>
        <Grid item lg={6} xs={12} display="flex" justifyContent="center">
          <div className={classes.descriptionWrapper}>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <Link
              className={classes.buttonDiscover}
              to={`/projects/${props.title}`}
            >
              DISCOVER MORE
            </Link>
          </div>
        </Grid>
        <Grid item lg={6} xs={12}>
          <div className={classes.imageWrapper}>
            <Link to={`/projects/${props.title}`}>
              <LazyLoadImage
                effect="blur"
                src={props.src}
                alt="Project"
                loading="lazy"
                style={{
                  transition: "all 1s ease",
                }}
              />
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectsCard;
