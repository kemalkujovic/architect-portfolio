import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import { useParams } from "react-router-dom";
import { data } from "../../components/Project/ProjectsHomePage";
import classes from "./ProjectsDetail.module.css";
import { Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Footer from "../../components/Footer/Footer";
function ProjectsDetail() {
  const params = useParams();
  const filteredImage = data.filter((el) => el.title === params.projectsId);
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <>
      <div className={classes.projectsImageContainer}>
        <Grid item spacing={3} container>
          <LightGallery
            speed={500}
            plugins={[lgThumbnail]}
            elementClassNames={classes.lightGallery}
          >
            {filteredImage[0].subImage.map((el, index) => {
              return (
                <Grid container data-src={el} spacing={3} key={index} lg={3}>
                  <div data-src={el} className={classes.imageWrapper}>
                    <img
                      key={index}
                      src={el}
                      data-src={el}
                      effect="blur"
                      style={{
                        transition: "all 1s ease",
                      }}
                    />
                  </div>
                </Grid>
              );
            })}
          </LightGallery>
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default ProjectsDetail;

// import { useParams } from "react-router-dom";
// import { data } from "../../components/Project/ProjectsHomePage";
// import classes from "./ProjectsDetail.module.css";
// import { Grid } from "@mui/material";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import Footer from "../../components/Footer/Footer";
// function ProjectsDetail() {
//   const params = useParams();
//   const filteredImage = data.filter((el) => el.title === params.projectsId);
//   return (
//     <>
//       <div className={classes.projectsImageContainer}>
//         <Grid item spacing={3} container>
//           {filteredImage[0].subImage.map((el, index) => {
//             return (
//               <Grid key={index} item lg={3}>
//                 <div className={classes.imageWrapper}>
//                   <LazyLoadImage
//                     key={index}
//                     src={el}
//                     effect="blur"
//                     alt="Project"
//                     style={{
//                       transition: "all 1s ease",
//                     }}
//                   />
//                 </div>
//               </Grid>
//             );
//           })}
//         </Grid>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default ProjectsDetail;
