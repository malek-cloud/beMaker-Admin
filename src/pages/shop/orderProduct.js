import React, { useState, useEffect } from "react";
import axios from "axios";
function OrderProduct(props) {
  const [achat, setAchat] = useState([]);
  useEffect(() => {
    const getAchats = async () => {
      try {
        const orderProduct = await axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `shop/Product/${props.productId.split(" ")[0]}`
        );
        setAchat(orderProduct.data.product);
      } catch (err) {
        console.log(err);
      }
    };
    getAchats();
  }, []);
  return (
    <div className="oneOrderedProduct">
{/*    { achat && achat.images[0]&& <img
        className="productImageOrder"
        src={process.env.REACT_APP_BACKEND_URL + `${achat.images[0]}`}
        alt=""
      />} */}
      <div className="productInformations">
        <div className="productName">
          Produit {props.number + 1} : <b>{achat && achat.name}</b>
        </div>
        <div className="quantityandPrice">
          <div className="productName">
            {" "}
            Quantité : <b>{props.productId.split(" ")[1]}</b>
          </div>
          <div className="productName">
            Prix : <b>{achat && achat.price} DT</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderProduct;
