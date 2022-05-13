import "../main.css";
import { Link } from "react-router-dom";
const Shop = () =>{
      return<div className="body">
      <div className="acttitle2">
      <h1 className="title">Catégories de Nos Produits</h1>

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
  <div className="mainListActivity" style={{margin : "6vh, 8vw"}}>
        <Link to="/shop/cartes" className="elementActivity"> <div className="mainText">Cartes de Développement</div></Link>
        <Link to="/shop/kitRobotique" className="elementActivity"> <div className="mainText">Kit Robotique</div></Link>
        <Link to="/shop/kitIot" className="elementActivity"> <div className="mainText">Kit IOT</div></Link>
        <Link to="/shop/kitArduino" className="elementActivity"> <div className="mainText">Kit Arduino</div></Link>
        <Link to="/shop/clipartLaser" className="elementActivity"> <div className="mainText">Clipart Découpe Laser</div></Link>
        <Link to="/shop/capteur" className="elementActivity"> <div className="mainText">Capteurs</div></Link>
        <Link to="/shop/accessoires" className="elementActivity"> <div className="mainText">Acccessoires</div></Link>
        <Link to="/shop/addCategory" className="elementActivity"> <div className="plusSigne">+</div></Link>
        </div>
</div>
}
export default Shop ;