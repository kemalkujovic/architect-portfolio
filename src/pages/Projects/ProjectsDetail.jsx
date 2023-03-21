import { useParams, Link } from "react-router-dom";
import ProjectDetailImage from "../../components/Project/ProjectDetailImage";
import { data } from "../../components/Project/ProjectsHomePage";
function ProjectsDetail() {
  const params = useParams();
  console.log(params.projectsId);
  return (
    <div>
      {data.map((el) => {
        return (
          <div>
            {el.title === params.projectsId &&
              el.subImage.map((el) => {
                return <img src={el}></img>;
              })}
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsDetail;
