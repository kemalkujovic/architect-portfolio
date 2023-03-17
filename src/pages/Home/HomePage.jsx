import React from "react";
import classes from "./HomePage.module.css";
import Footer from "../../components/Footer/Footer";
const HomePage = () => {
  return (
    <>
      <div>
        <div className={classes.backgroundContainer}>
          <div className={classes.imageWrapper}>
            <img
              src="https://static.wixstatic.com/media/2b854b_b6567a99ad734a20b4c2a3227024f9e5~mv2.jpg/v1/fill/w_1743,h_687,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2b854b_b6567a99ad734a20b4c2a3227024f9e5~mv2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
