import "../activities/activities.css";
import GetEmployee from "./getEmployee";
import { Link } from "react-router-dom";
import EmployeeModal from "./EmployeeModal";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductModal from "../../components/shopComponents/productModal";
import Modal from "./modal"
const Employee = (props) => {
  const [employee, setEmployee] = useState([]);
  const [loader, setLoader] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    axios({
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + "hire/Employees",
      headers: { "Content-Type": "multipart/form-data" },
    }).then((resp) => {
      setEmployee(resp.data.employees);
      setLoader(false);
    });
  }, []);

  return (
    <div className="activitiesPage">
      <div className="acttitle">
        <h1 className="ProductTitle">Gérer les employés</h1>
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
      
        <div className="addActivity" onClick={() => setModalShow(true) }>
         Ajouter un Employé
        </div>
      
      <EmployeeModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className="activityList">
        <div className="activityList">
          {loader ? (
            <div className="spinner-border" role="status"></div>
          ) : (
            employee.map((item) =>
               (
                <GetEmployee
                  key={item._id}
                  id={item._id}
                  nom={item.nom}
                  prenom={item.prenom}
                  type={item.type}
                />
              ) 
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default Employee;
