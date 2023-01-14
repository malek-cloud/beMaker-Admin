import "../../pages/activities/activities.css";
import MachineModal from "./machineModal";
import FieldModal from "./fieldModal";
import ProjectModal from "./projectModal";
import EventModal from "./eventModal";
import DetailMachine from "./detailMachine";
import FormationModal from "./formationModal";
import ServiceModal from "./serviceModal";
import axios from "axios";
import { useState } from "react";
const GetMachine = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [detail, setDetail] = useState(false);
  const deleteMachine = async () => {
    if (props.activity ==="machine"){
      try {
        const response = await axios({
          method: "delete",
        url : process.env.REACT_APP_BACKEND_URL + `activities/deleteMachine/${props.id}`,

          headers: { "Content-Type": "multipart/form-data" },
        });
        const data = response.status;
        console.log(response.message);
        if (data === 200) {
          window.location.reload(true);
        }
      } catch (err) {
        console.log("erreur mateb3athch el machine raw" + err);
      }
    }
    else if  (props.activity ==="field"){
      try {
        const response = await axios({
          method: "delete",
        url : process.env.REACT_APP_BACKEND_URL + `activities/deleteField/${props.id}`,

          headers: { "Content-Type": "multipart/form-data" },
        });
        const data = response.status;
        console.log(response.message);
        if (data === 200) {
          window.location.reload(true);
        }
      } catch (err) {
        console.log("erreur mateb3athch el machine raw" + err);
      }
    }else if  (props.activity ==="projet"){
      try {
        const response = await axios({
          method: "delete",
        url : process.env.REACT_APP_BACKEND_URL + `activities/deleteProject/${props.id}`,

          headers: { "Content-Type": "multipart/form-data" },
        });
        const data = response.status;
        console.log(response.message);
        if (data === 200) {
          window.location.reload(true);
        }
      } catch (err) {
        console.log("erreur mateb3athch el machine raw" + err);
      }
    }
    else if  (props.activity ==="Service"){
      try {
        const response = await axios({
          method: "delete",
        url : process.env.REACT_APP_BACKEND_URL + `activities/deleteService/${props.id}`,

          headers: { "Content-Type": "multipart/form-data" },
        });
        const data = response.status;
        console.log(response.message);
        if (data === 200) {
          window.location.reload(true);
        }
      } catch (err) {
        console.log("erreur mateb3athch el service raw" + err);
      }
    }
    else if  (props.activity ==="Event"){
      try {
        const response = await axios({
          method: "delete",
        url : process.env.REACT_APP_BACKEND_URL + `activities/deleteEvent/${props.id}`,

          headers: { "Content-Type": "multipart/form-data" },
        });
        const data = response.status;
        console.log(response.message);
        if (data === 200) {
          window.location.reload(true);
        }
      } catch (err) {
        console.log("erreur mateb3athch el Event raw" + err);
      }
    }
    else if  (props.activity ==="Formation"){
      try {
        const response = await axios({
          method: "delete",
        url : process.env.REACT_APP_BACKEND_URL + `activities/deleteFormation/${props.id}`,

          headers: { "Content-Type": "multipart/form-data" },
        });
        const data = response.status;
        console.log(response.message);
        if (data === 200) {
          window.location.reload(true);
        }
      } catch (err) {
        console.log("erreur mateb3athch el formation raw" + err);
      }
    }
  };

  return (
    <div className="activityDetail">
      <div className="activityItem">
        <div
          className="activityItemTitle"
          onClick={() => {
            setDetail(!detail);
          }}
        >
          {props.name}
        </div>

        <div className="changeItem">
          <div
            className="editActivity"
            onClick={() => {
              setDetail(!detail);
            }}
          >
            {detail ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-eye-slash-fill"
                viewBox="0 0 16 16"
              >
                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            )}
          </div>
          <div className="editActivity" onClick={() => setModalShow(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </div>

         {props.activity ==="field" ?  <FieldModal
            title={"Ajouter Un Domaine"}
            show={modalShow}
            click={"update"}
            id={props.id}
            name={props.name}
            description={props.description}
            image={props.image}
            edit={"true"}

            onHide={() => setModalShow(false)}
          /> : <div></div>}
             {props.activity ==="Formation" ?  <FormationModal
            title={"Ajouter Une Formation"}
            show={modalShow}
            click={"update"}
            id={props.id}
            name={props.name}
            description={props.description}
            image={props.image}
            difficulty={props.difficulty}
            field={props.field}
            period={props.period}
            age={props.age}
            prix={props.prix}
            prerequis={props.prerequis}
            program={props.program}
            objectifs={props.objectifs}
            edit={"true"}

            onHide={() => setModalShow(false)}
          /> : <div></div>}
           {props.activity ==="Event" ?  <EventModal
            title={"Ajouter Un Event"}
            show={modalShow}
            type={props.type}
            date={props.date}
            click={"update"}
            animator={props.animator}
            location={props.location}
            id={props.id}
            name={props.name}
            description={props.description}
            image={props.image}
            edit={"true"}

            onHide={() => setModalShow(false)}
          /> : <div></div>}
          {
            props.activity ==="machine" ?<MachineModal
            title={"Ajouter Une Machine"}
            show={modalShow}
            click={"update"}
            id={props.id}
            serviceid={props.serviceid}
            name={props.name}
            description={props.description}
            image={props.image}
            edit={"true"}
            onHide={() => setModalShow(false)}
          /> : <div></div>
          } {
            props.activity ==="projet" ?<ProjectModal
            title={"Ajouter Un Projet"}
            show={modalShow}
            click={"update"}
            id={props.id}
            name={props.name}
            description={props.description}
            image={props.image}
            edit={"true"}

            onHide={() => setModalShow(false)}
          /> : <div></div>
          }
          {
            props.activity ==="Service" ?<ServiceModal
            title={"Ajouter Un Service"}
            show={modalShow}
            click={"update"}
            id={props.id}
            name={props.name}
            description={props.description}
            image={props.image}
            edit={"true"}

            onHide={() => setModalShow(false)}
          /> : <div></div>
          }
          <div className="deleteActivity" onClick={deleteMachine}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </div>
        </div>
      </div>
      {detail ? (
        <DetailMachine
          name={props.name}
          description={props.description}
          image={props.image}
          location={props.location}
          prix={props.prix}
          date={props.date}
          period={props.period}
          field={props.field}
          type={props.type}
          animator={props.animator}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default GetMachine;
