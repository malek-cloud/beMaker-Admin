import "./main.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Main = () => {
  const [loader, setLoader] = useState(false);
  const [employee, setEmployee] = useState(JSON.parse(localStorage.getItem("employee")).type);
  const logout = () => {
    setLoader(true);
    window.localStorage.clear();
    window.location.reload();
  };
  useEffect(()=>{
    if(JSON.parse(localStorage.getItem("employee")) !== null){
      setEmployee(JSON.parse(localStorage.getItem("employee")).type)
    }
  },[])
  return (
    <div className="body">
      <h1 className="title">Dashboard Administrateur</h1>
      <div className="mainList">
        <Link to="/activity" className="element">
          {" "}
          <div className="mainText">Activités</div>
        </Link>
        <Link to="/shop" className="element">
          {" "}
          <div className="mainText">Shop</div>
        </Link>
       {employee==="employee" ? <div></div> :  <Link to="/hire" className="element">
          {" "}
          <div className="mainText">Ajouter Employé</div>
        </Link>}
      </div>
      {loader ? (
        <div className="d-flex justify-content-center myloader ">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <div className="logout" onClick={logout}>
          🚪 Déconnecter
        </div>
      )}
    </div>
  );
};
export default Main;
