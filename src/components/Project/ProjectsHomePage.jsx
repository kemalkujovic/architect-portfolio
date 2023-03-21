import project1 from "../../assets/images/w1000-x21355gAb7wnYRGB.jpg";
import project2 from "../../assets/images/w1000-k20156ZiYvIfOlJI.jpg";
import project3 from "../../assets/images/w1000-m20157qVqqhbwaWo.jpg";
import project4 from "../../assets/images/w1000-v20154MvaH4tLoUK.jpg";
import ProjectsCard from "./ProjectsCard";

import classes from "./ProjectsHomePage.module.css";

const description =
  "This is a home improvement project near Valencia for a family with two small children. The buyers were attracted to the house for its location and a land lot on the top of the slope with amazing views in the first place.";
export const data = [
  {
    image: project1,
    description: description,
    title: "HOUSE 120",
    id: "p1}}",
    subImage: [project1, project2, project3, project4],
  },
  {
    image: project2,
    description: description,
    title: "HOUSE 130",
    id: "p2}}}",
    subImage: [project1, project1, project1, project1],
  },
  {
    image: project3,
    description: description,
    title: "HOUSE 140",
    id: "p3}",
    subImage: [project2, project2, project2, project2],
  },
  {
    image: project4,
    description: description,
    title: "HOUSE 150",
    id: "p4",
  },
  {
    image: project4,
    description: description,
    title: "HOUSE 160",
    id: "p5",
  },
  {
    image: project4,
    description: description,
    title: "HOUSE 170",
    id: "p6",
  },
  {
    image: project4,
    description: description,
    title: "HOUSE 180",
    id: "p7",
  },
  {
    image: project4,
    description: description,
    title: "HOUSE 190",
    id: "p8",
  },
];
const ProjectsHomePage = (props) => {
  return (
    <div className={classes.projetContainer}>
      {data.map((data, index) => {
        return (
          <ProjectsCard
            title={data.title}
            src={data.image}
            description={data.description}
            key={index}
            direction={`${index % 2 === 0 ? "row" : "row-reverse"}`}
            id={data.id}
          />
        );
      })}
    </div>
  );
};

export default ProjectsHomePage;
