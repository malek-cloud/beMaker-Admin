import ProductModal from "./productModal";
import { useState } from "react";

const ChooseModal = (props) => {
  const [modalShow, setModalShow] = useState(false);

  if (props.addButton === "Ajouter Produit") {
    return (
      <div>
        {" "}
        {props.addButton === "" ? (
          <div></div>
        ) : (
          <div className="addActivity" onClick={() => setModalShow(true)}>
            {props.addButton}
          </div>
        )}
        <ProductModal
          title={"Ajouter Un Produit IOT"}
          show={modalShow}
          click={"Créer"}
          onHide={() => setModalShow(false)}
        />
      </div>
    );
  }
 
};
export default ChooseModal;
