import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

import { useParams } from "react-router-dom";
import { data } from "../../components/Project/ProjectsHomePage";
import classes from "./ProjectsDetail.module.css";
import { Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Footer from "../../components/Footer/Footer";
function ProjectsDetail() {
  const params = useParams();
  const filteredImage = data.filter((el) => el.title === params.projectsId);

  return (
    <>
      <div className={classes.projectsImageContainer}>
        <LightGallery
          speed={500}
          enableSwipe
          elementClassNames={classes.lightGallery}
          download={false}
        >
          {filteredImage[0].subImage.map((el, index) => {
            return (
              <Grid container data-src={el} item spacing={3} key={index} lg={3}>
                <Grid lg={12} item>
                  <div data-src={el} className={classes.imageWrapper}>
                    <LazyLoadImage
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
              </Grid>
            );
          })}
        </LightGallery>
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
