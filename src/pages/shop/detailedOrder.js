import React from "react";
import "./detailedOrder.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OrderProduct from "./orderProduct";
function DetailedOrder(props) {
  const [order, setOrder] = useState();
  const [achats, setAchats] = useState([]);
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const getOrder = async () => {
      try {
        const resp = await axios.get(
          process.env.REACT_APP_BACKEND_URL + `shop/Order/${id}`
        );
        setOrder(resp.data.order);
      } catch (err) {
        console.log(err);
      }
    };
    getOrder();
    const getUser = async () => {
      try {
        const resp =
          order &&
          (await axios.get(
            process.env.REACT_APP_BACKEND_URL + `users/client/${order.user}`
          ));
        setUser(resp.data.client);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
    const getAchats = async () => {
      try {
        const products = [];
        order &&
          order.achats.forEach(async (e) => {
            const orderProduct = await axios.get(
              process.env.REACT_APP_BACKEND_URL + `shop/Product/${e}`
            );
            products.push(orderProduct.data.product);
           /*  console.log(products); */
            setAchats(products);
          });
        achats !== [] && console.log(achats);
      } catch (err) {
        console.log(err);
      }
    };
    getAchats();
  }, []);
  return (
    <div>
      <div className="gestionCommande">Gérer Les Commandes</div>
      <div className="currentManagedOrderBlock">
        <div className="headlineOrder">
          <div className="OrderId">OrderID : {order && order._id}</div>
          <div className="deliveryStatus"> En cours</div>
        </div>
        <div className="userInfoBlock">
          <div className="orderFrom">
            Commande de : {user && user.prenom} {user && user.nom}{" "}
          </div>
          <div className="orderFrom">Email : {user && user.email} </div>
          <div className="orderFrom">
            Numéro de téléphone : {user && user.phone}{" "}
          </div>
          <div className="orderFrom">Région: {order && order.region} </div>
          <div className="orderFrom">Ville: {order && order.city} </div>
          <div className="orderFrom">
            adresse physique: {order && order.adress}{" "}
          </div>
        </div>
        <div className="achatsBlock">
          {achats &&
            Array.from(achats).forEach((e) => {
              return <div key={e._id}>{e.name}</div>;
            })}
        </div>
      </div>
    </div>
  );
}

export default DetailedOrder;
