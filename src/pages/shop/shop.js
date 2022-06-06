import "../main.css";
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import axios from 'axios'
const Shop = () => {
  const [number, setNumber] = useState(0);

  useEffect(()=>{
    const getOrders = async()=>{
     try{
      const resp = await axios.get(process.env.REACT_APP_BACKEND_URL+"shop/Orders");
      console.log(resp.data.orders.length);
      const saved = []
      /* resp.data.orders.map((e) =>{
          saved.push.e
 
     }) */
      setNumber(resp.data.orders.length)
     }catch(err){
       console.log(err);
     }
    }
    getOrders();
  },[])
  const [showCommand, setShowCommande] = useState(false);
  return (
    <div className="body">
      <div className="acttitle2">
        <div className="comm">
          <h1 className="title">Catégories de Nos Produits</h1>
          <div className="notifComm" onClick={()=>{
             setShowCommande(!showCommand);
            setNumber(0);
           
          }}>
            <div className="badge">{number}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </div>
        </div>

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
        <Link to="/shop/cartes" className="elementActivity">
          {" "}
          <div className="mainText">Cartes de Développement</div>
        </Link>
        <Link to="/shop/kitRobotique" className="elementActivity">
          {" "}
          <div className="mainText">Kit Robotique</div>
        </Link>
        <Link to="/shop/kitIot" className="elementActivity">
          {" "}
          <div className="mainText">Kit IOT</div>
        </Link>
        <Link to="/shop/kitArduino" className="elementActivity">
          {" "}
          <div className="mainText">Kit Arduino</div>
        </Link>
        <Link to="/shop/clipartLaser" className="elementActivity">
          {" "}
          <div className="mainText">Clipart Découpe Laser</div>
        </Link>
        <Link to="/shop/capteur" className="elementActivity">
          {" "}
          <div className="mainText">Capteurs</div>
        </Link>
        <Link to="/shop/accessoires" className="elementActivity">
          {" "}
          <div className="mainText">Acccessoires</div>
        </Link>
        <Link to="/shop/addCategory" className="elementActivity">
          {" "}
          <div className="plusSigne">+</div>
        </Link>
      </div>
      {showCommand ? <div className="listeCommande">
        <div className="commande">
          <div className="delapart">Commande de : Olfa hamed </div>
        <div className="money">
        <div className="pay">payé ✔</div>
        <div className="price">65 DT</div>
        </div>

        </div>
        <div className="commande">
          <div className="delapart">Commande de : mohammed jaziri </div>
        <div className="money">
        <div className="pay">payé ✔</div>
        <div className="price">103 DT</div>
        </div>

        </div>
        <div className="commande">
          <div className="delapart">Commande de : nawel dkhil </div>
        <div className="money">
        <div className="pay">non payé</div>
        <div className="price">40 DT</div>
        </div>

        </div>
        <div className="commande">
          <div className="delapart">Commande de : hichem barguellil </div>
        <div className="money">
        <div className="pay">payé ✔</div>
        <div className="price">86 DT</div>
        </div>

        </div>
      </div> :  <div></div>}
     
    </div>
  );
};
export default Shop;
