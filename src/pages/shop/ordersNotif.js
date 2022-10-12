import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function OrdersNotif(props) {
  // const [user, setUser] = useState();
  // /*  const [product, setProduct] = useState(); */
  // useEffect(() => {
  //   const getUser = async () => {
  //     try {

  //       const resp = await axios.get(
  //         process.env.REACT_APP_BACKEND_URL + `users/client/${props.order.user}`
  //       );
  //       setUser(resp.data.client);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUser();

    
  // }, [props.order]);
  return (
    <Link to={`/shop/detail_order/${props.order._id}`}  className="commande">
      <div className="delapart">
        Commande de : {props.order.prenom} {props.order.nom}
        {/* {user && user.prenom} {user && user.nom} */}
      </div>
      <div className="money">
        {/* <div className="pay">{props.order.status} ✔</div> */}
        <div className="price">{props.order.amount} DT</div>
      </div>
    </Link>
  );
}

export default OrdersNotif;
