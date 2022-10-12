import Modal from "react-bootstrap/Modal";

import { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
function ProductModal(props) {
  const description = useRef();
  const price = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [loader, setLoader] = useState(false);
  const [preview, setPreview] = useState(false);
 
 
  const close = () => {
    props.onHide();
    setPreview();
  };
  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const [error, setError] = useState("")
  const nom = useRef();
  const prenom = useRef();
  const email = useRef();
  const password = useRef();
  const numéro = useRef();
  const submit = async () => {

      if ((nom.current.value || prenom.current.value || email.current.value || numéro.current.value  || password.current.value) === "" === "") {
        setError("Données invalides!");
        setTimeout(() => {
          setError("")
        }, 3000);
        return;
      }
  //     setLoader(true);
      try {
        const fd = new FormData();
        fd.append("name", nom.current.value);
        fd.append("prenom", prenom.current.value);
        fd.append("email", email.current.value);
        fd.append("numero", numéro.current.value);
        fd.append("password", password.current.value);
        const response = await axios({
          method: "post",
          url: process.env.REACT_APP_BACKEND_URL + "hire/createEmployee",
          data: fd,
          headers: { "Content-Type": "multipart/form-data" },
        });
        const data = response.status;
        if (data === 200) {
        //   setLoader(false);
          props.onHide();
          window.location.reload(true);
        }
        console.log("hedhy el donne : " + data);
      } catch (err) {
        console.log("erreur mateb3athch el employee raw" + err);
      }
    };
   
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={props.onHide}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ajouter un Produit
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modalForm">
          <div className="inputsModalForm">
            <input
              type="text"
              className="nameModal"
              placeholder="nom du produit"
              ref={nom}
            />
            
          </div>

          <div className="imageModalForm">
          <input
              type="text"
              className="nameModal"
              placeholder="prix du produit"
              ref={price}
            />
           
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={close} className="modalButton">
          Fermer
        </Button>
        {loader ? (
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        ) : (
          <Button
            className="modalButton"
            onClick={submit}
          >
            Ajouter
          </Button>
        )}
          {error!=="" ?   <div className="errorProduct">{error}</div> :   <div></div> }

      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;
