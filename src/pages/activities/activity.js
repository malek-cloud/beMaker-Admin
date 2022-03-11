import "./activities.css";
import GetMachine from "../../components/activitiesComponents/getMachine";
import { Link } from "react-router-dom";
import ChooseModal from "../../components/activitiesComponents/chooseModal";
import { useState, useEffect } from "react";
import axios from "axios";
const Activity = (props) => {
  const [activities, setActivities] = useState([]);
  const [loader, setLoader] = useState(true);
  const [act, setAct] = useState(true);

  useEffect(() => {
    if (props.title === "Nos Machines") {
      axios({
        method: "get",
        url: "http://localhost:5000/activities/Machines",
        headers: { "Content-Type": "multipart/form-data" },
      }).then((resp) => {
        setActivities(resp.data.machines);
        setAct(resp.data.activity)

        setLoader(false);
      });
    } else if (props.title === "Nos Projets") {
      axios({
        method: "get",
        url: "http://localhost:5000/activities/Projects",
        headers: { "Content-Type": "multipart/form-data" },
      }).then((resp) => {
        setActivities(resp.data.projects);
        setAct(resp.data.activity)

        setLoader(false);
      });
    } else if (props.title === "Nos Domaines") {
      axios({
        method: "get",
        url: "http://localhost:5000/activities/Fields",
        headers: { "Content-Type": "multipart/form-data" },
      }).then((resp) => {
        setActivities(resp.data.fields);
        setAct(resp.data.activity)
        console.log(resp.data)
        setLoader(false);
      });
    }else if (props.title === "Nos Evénements") {
      axios({
        method: "get",
        url: "http://localhost:5000/activities/Events",
        headers: { "Content-Type": "multipart/form-data" },
      }).then((resp) => {
        setActivities(resp.data.fields);
        setAct(resp.data.activity);
        console.log(resp.data);
        setLoader(false);
      });
    }
  }, []);

  return (
    <div className="activitiesPage">
      <div className="acttitle">
        <h1 className="activityTitle">{props.title}</h1>
        <Link to="/activity" className="goBack">
          <div className="back">Retour</div>
          <div className="backIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-arrow-left-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
            </svg>
          </div>
        </Link>
      </div>

      <ChooseModal addButton={props.addButton} />

      <div className="activityList">
        {loader ? (
          <div className="spinner-border" role="status"></div>
        ) : (
          activities.map((activity) => (
            <GetMachine
            key={activity._id}
              id={activity._id}
              name={activity.name}
              description={activity.description}
              activity = {act}
              image= { props.title ==="Nos Machines" || props.title ==="Nos Events" ||  props.title ==="Nos Projets" ? `http://localhost:5000/${activity.images[0]}` : "" } 
            />
          ))
        )}
      </div>
    </div>
  );
};
export default Activity;
