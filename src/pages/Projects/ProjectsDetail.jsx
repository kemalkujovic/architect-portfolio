import { useParams } from "react-router-dom";
import { data } from "../../components/Project/ProjectsHomePage";
import classes from "./ProjectsDetail.module.css";
import { Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
function ProjectsDetail() {
  const params = useParams();
  const filteredImage = data.filter((el) => el.title === params.projectsId);
  return (
    <div className={classes.projectsImageContainer}>
      <Grid item spacing={3} container>
        {filteredImage[0].subImage.map((el, index) => {
          return (
            <Grid key={index} item lg={3}>
              <div className={classes.imageWrapper}>
                <LazyLoadImage
                  key={index}
                  src={el}
                  effect="blur"
                  alt="Project"
                  style={{
                    transition: "all 1s ease",
                  }}
                />
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default ProjectsDetail;
