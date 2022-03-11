import MachineModal from "./machineModal";
import FieldModal from "./fieldModal";
import ProjectModal from "./projectModal";
import EventModal from "./eventModal";
import { useState } from "react";

const ChooseModal = (props) => {
  const [modalShow, setModalShow] = useState(false);

  if (props.addButton === "Ajouter Machine") {
    return (
      <div>
        {" "}
        {props.addButton === "" ? (
          <div></div>
        ) : (
          <div className="addActivity" onClick={() => setModalShow(true)}>
            {props.addButton}
          </div>
        )}
        <MachineModal
          title={"Ajouter Une Machine"}
          show={modalShow}
          click={"Créer"}
          onHide={() => setModalShow(false)}
        />
      </div>
    );
  } else if (props.addButton === "Ajouter Domaine") {
    return (
      <div>
        <div className="addActivity" onClick={() => setModalShow(true)}>
          {props.addButton}
        </div>
        <FieldModal
          title={"Ajouter Un Domaine"}
          show={modalShow}
          click={"Créer"}
          onHide={() => setModalShow(false)}
        />
      </div>
    );
  } else if (props.addButton === "Ajouter Projet") {
    return (
      <div>
        <div className="addActivity" onClick={() => setModalShow(true)}>
          {props.addButton}
        </div>
        <ProjectModal
          title={"Ajouter Un Projet"}
          show={modalShow}
          click={"Créer"}
          onHide={() => setModalShow(false)}
        />
      </div>
    );
  }
  else if (props.addButton === "Ajouter Evénement") {
    return (
      <div>
        <div className="addActivity" onClick={() => setModalShow(true)}>
          {props.addButton}
        </div>
        <EventModal 
          title={"Ajouter Un Evénement"}
          show={modalShow}
          click={"Créer"}
          onHide={() => setModalShow(false)}
        />
      </div>
    );
  }
};
export default ChooseModal;
