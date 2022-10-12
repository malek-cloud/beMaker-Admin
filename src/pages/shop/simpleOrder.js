import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function SimpleOrder(props) {
  const [user, setUser] = useState();

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const resp =
  //         props.order &&
  //         (await axios.get(
  //           process.env.REACT_APP_BACKEND_URL + `users/client/${props.order.user}`
  //         ));
  //       setUser(resp.data.client);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUser();
 
  // }, []);


  return (
    <Link to={`/shop/detail_order/${props.order._id}`} className='orderSample' >
        <div className="acceptingQuestionBlock">
        <div className="refOrder">REF : #{props.reference}</div>

            <div className="acceptingAnswer">Acceptée</div>
          </div>
        <div className="nameandpriceOrder">
          <div className="montantOrder">Montant : {props.order.amount}DT</div>
          <div className="montantOrder">De : {props.order.prenom} {props.order.nom}
          {/* {user && user.prenom} {user && user.nom} */}
          </div>

        </div>
        
          <div className="acceptingQuestionBlock">
            <div className="acceptingQuestion">livraison :</div>
            <div className="acceptingAnswer">En cours</div>
          </div>
          
    </Link>
  )
}

export default SimpleOrder