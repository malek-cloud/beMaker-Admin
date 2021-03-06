import "../main.css";
import { Link } from "react-router-dom";
const Activities = () => {
  return (
    <div className="body">
      <div className="acttitle2">
        <h1 className="title">Gestion des formations et événements</h1>

        <Link to="/" className="goBack">
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
      <div className="mainListActivity" style={{ margin: "6vh, 8vw" }}>
        <Link to="/activity/workshops" className="elementActivity">
          {" "}
          <div className="mainText">Formations</div>
        </Link>
        <Link to="/activity/events" className="elementActivity">
          {" "}
          <div className="mainText">événements</div>
        </Link>
  {/*       <Link to="/activity/projects" className="elementActivity">
          {" "}
          <div className="mainText">Projets</div>
        </Link> */}
        <Link to="/activity/participants" className="elementActivity">
          {" "}
          <div className="mainText" style={{fontSize :"22px"}}>Participants aux formations</div>
        </Link>
        <Link to="/activity/participantsEvents" className="elementActivity">
          {" "}
          <div className="mainText" style={{fontSize :"22px"}}>Participants aux événements</div>
        </Link>
        {/*
        <Link to="/activity/bootcamps" className="elementActivity"> <div className="mainText">Bootcamps</div></Link>
        <Link to="/activity/machines" className="elementActivity"> <div className="mainText">Machines</div></Link>
        <Link to="/activity/domaines" className="elementActivity"> <div className="mainText">Domaines</div></Link>
        <Link to="/activity/services" className="elementActivity"> <div className="mainText">Services</div></Link> */}
       {/*  <Link to="/activity/addService" className="elementActivity">
          {" "}
          <div className="plusSigne">+</div>
        </Link> */}
      </div>
    </div>
  );
};
export default Activities;
