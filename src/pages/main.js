import "./main.css";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="body">
          <h1 className="title" >Dashboard Administrateur</h1>
      <div className="mainList">
            <Link to="/activity" className="element"> <div className="mainText">Activités</div></Link>
            <Link to="/shop" className="element"> <div className="mainText">Shop</div></Link>
            <Link to="/hire" className="element"> <div className="mainText">Ajouter Employé</div></Link>
            </div>
    </div>
  );
};
export default Main;
