import React from "react";
import "./detailedOrder.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import OrderProduct from "./orderProduct";
import AllOrders from "./allOrders";
function DetailedOrder(props) {
  const livraison = useRef();
  const [order, setOrder] = useState();
  const { id } = useParams();
  // const [user, setUser] = useState();
  // const [payLoader, setPayLoader] = useState(false);
  // const [payStatus, setPayStatus] = useState("");
  const [acceptLoader, setAcceptLoader] = useState(false);
 
  const [accepted, setAccepted] = useState(false);
  const [deliveringStatus, setDeliveringStatus] = useState("");

  const handleChange = async (event) => {
    if (event.target.value) {
      setDeliveringStatus(event.target.value);
      console.log(event.target.value);
      try {
        const resp = await axios.post(
          process.env.REACT_APP_BACKEND_URL + `shop/editOrder/${id}`,
          {
            delivered: event.target.value,
          }
        );
        setOrder(resp.data.order);
        setDeliveringStatus(resp.data.order.delivered);
      } catch (err) {
        console.log(err);
      }
      window.location.reload();
    }
  };
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
  }, [id]);
  useEffect(() => {
    try {
    // const getUser = async () => {
    //   
    //     const resp =
    //       order &&
    //       (await axios.get(
    //         process.env.REACT_APP_BACKEND_URL + `users/client/${order.user}`
    //       ));
    //     setUser(resp.data.client);
        setAccepted(order.accepted);
        setDeliveringStatus(order.delivered);
      } catch (err) {
        console.log(err);
      }
    
  }, [order]);
  const acceptOrder = async () => {
    if (!accepted) {
      try {
        setAcceptLoader(true);
        const resp = await axios.post(
          process.env.REACT_APP_BACKEND_URL + `shop/editOrder/${id}`,
          {
            accepted: true,
          }
        );
        setOrder(resp.data.order);
        setAccepted(resp.data.order.accepted);
        setAcceptLoader(false);
      } catch (err) {
        console.log(err);
      }
      window.location.reload();
    } else {
      return;
    }
  };
  // const payedCash = async () => {
  //   try {
  //     setPayLoader(true);
  //     const resp = await axios.post(
  //       process.env.REACT_APP_BACKEND_URL + `shop/editOrder/${id}`,
  //       {
  //         status: "Payé Cash à la livraison",
  //       }
  //     );
  //     setOrder(resp.data.order);
  //     setPayStatus(resp.data.order.status);
  //     setPayLoader(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   window.location.reload();
  // };
  return (
    <div>
      <div className="gestionCommande">Gérer Les Commandes</div>
     <div className="backButtonOrder">
     <Link to="/shop" className="goBack">
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
      <div className="orderPage">
        <div className="currentManagedOrderBlock">
          <div className="headlineOrder">
            <div className="OrderId">OrderID : {order && order._id}</div>
          {order && order.delivered==="En cours" &&   <div className="deliveryStatus"> En cours </div>}
          {order && order.delivered==="livrée" &&   <div className="deliveryStatus"> Terminée </div>}
          {order && order.delivered==="Non" &&   <div className="deliveryStatus"> Pas encore traitée </div>}
          </div>
          <div className="amount">
            Montant Total de la Commande : <b>{order && order.amount}DT</b>
          </div>
          <div className="userAndProduct">
            <div className="userInfoBlock">
              <div className="orderFrom">
                Commande de :{" "}
                <b>
                  {order && order.prenom}   {order && order.nom}
                  {/* {user && user.prenom} {user && user.nom}{" "} */}
                </b>
              </div>
              <div className="orderFrom">
                Email : <b>  {order && order.email}</b>{" "}
              </div>
              <div className="orderFrom">
                Numéro de téléphone : <b>  {order && order.phone} </b>
              </div>
              <div className="orderFrom">
                Région: <b>{order && order.region}</b>{" "}
              </div>
              <div className="orderFrom">
                Ville: <b>{order && order.city}</b>{" "}
              </div>
              <div className="orderFrom">
                adresse physique: <b>{order && order.adress} </b>
              </div>
            </div>
            <div className="achatsBlock">
              <div className="refAchats">Les Produits Désirés : </div>
              <div className="listProductsOrders">
                {
                  //render hne bel forEach doesn't work, bel map work , w7el hne barcha , hmdlh 5edmet taw
                  order &&
                    order.achats.map((e, index) => (
                      <OrderProduct key={e} productId={e} number={index} />
                    ))
                }
              </div>
            </div>
          </div>
          {/* <div className="payingBlock">
            <div className="status">Etat du paiement : </div>
            <div className="paidOrnot"> {order && order.status} </div>
            {!payLoader && order && order.status === "not paid" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-cash-coin payCash"
                viewBox="0 0 16 16"
                onClick={payedCash}
              >
                <path
                  fillRule="evenodd"
                  d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
                />
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
              </svg>
            )}
            {payLoader && order && (
              <div
                class="spinner-border text-warning acceptingSpinner"
                role="status"
              >
                <span class="sr-only "></span>
              </div>
            )}
            {order && order.paymentId && (
              <div className="paymentId">
                {" "}
                -- ID de paiement : {order.paymentId}
              </div>
            )}
          </div> */}

          <div className="orderManagement">
            {accepted && <div className="orderAccepted">Acceptée ✔</div>}
            {!accepted && !acceptLoader && (
              <div onClick={acceptOrder} className="notAcceptedYet">
                Accepter
              </div>
            )}
            {!accepted && acceptLoader && (
              <div
                class="spinner-border text-warning acceptingSpinner"
                role="status"
              >
                <span class="sr-only "></span>
              </div>
            )}
            <div className="deliveringStatus">
              <label htmlFor="livraison">Etat de Livraison :</label>

              <select
                name="livraison"
                id="livraison"
                className="selectDeliverytStatus"
                onChange={handleChange}
                ref={livraison}
                value={deliveringStatus}
              >
                <option value="Non">Non</option>
                <option valeur="en cours">En cours</option>
                <option value="livrée">Livrée</option>
              </select>
            </div>
          </div>
        </div>

        <AllOrders />
      </div>
    </div>
  );
}

export default DetailedOrder;
