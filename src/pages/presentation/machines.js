import "./activities.css";
import GetMachine from "./getMachine";
import { Link } from "react-router-dom";
import AddModal from "./addModal";
import { useState, useEffect } from "react";
import axios from "axios";
const Machines = () => {
  const [modalShow, setModalShow] = useState(false);
  const [machines, setMachines] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/activities/Machines",
      headers: { "Content-Type": "multipart/form-data" },
    }).then((resp) => {
      setMachines(resp.data.machines);
      setLoader(false);
    });
  }, []);

  return (
    <div className="activitiesPage">
      <div className="acttitle">
        <h1 className="activityTitle">Nos Machines</h1>
        <Link to="/activity" className="goBack">
          <div className="back">Retour</div>
          <div className="backIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-arrow-left-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
            </svg>
          </div>
        </Link>
      </div>
      <div className="addActivity" onClick={() => setModalShow(true)}>
        Ajouter Machine
      </div>

      <AddModal
        title={"Ajouter Une Machine"}
        show={modalShow}
        click={"Créer"}
        onHide={() => setModalShow(false)}
      />

      <div className="activityList">
        {loader ? (
          <div class="spinner-border" role="status">
          </div>
        ) : (
          machines.map((machine) => (
            <GetMachine
              id={machine._id}
              name={machine.name}
              description={machine.description}
              image={`http://localhost:5000/${machine.images[0]}`}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default Machines;
