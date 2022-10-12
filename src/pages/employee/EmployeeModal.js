import Modal from "react-bootstrap/Modal";
import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
function EmployeeModal(props) {
  const nom = useRef();
  const prenom = useRef();
  const email = useRef();
  const password = useRef();
  const numéro = useRef();
//   const [loader, setLoader] = useState(false);
 
  const [error, setError] = useState("")
  const close = () => {
      props.onHide();
    };
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
      fd.append("nom", nom.current.value);
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
          Ajouter un Employé
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div style={{width:"30vw", display:"flex"}}>
            <input
              type="text"
              className="nameModal"
              placeholder="nom de l'employé.."
              ref={nom}
              style={{marginRight:"20px" }}
            />
            <input
              placeholder="prenom de l'employé.."
              ref={prenom}
              style={{marginRight:"20px"}}
              className="nameModal"
              type="text"
            />
            <input
              placeholder="numéro de l'employé.."
              ref={numéro}
              style={{marginRight:"20px"}}
              className="nameModal"
              type="number"
            />
        
          <input
              type="email"
              className="nameModal"
              style={{marginRight:"20px"}}
              placeholder="email de l'employé.."
              ref={email}
            />
           
           
          </div>
          <input
              type="password"
              className="nameModal"
              placeholder="mot de passe de l'employé.."
              ref={password}
            />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={close} className="modalButton">
          Fermer
        </Button>
        <Button
            className="modalButton"
            onClick={submit}
          >
           Ajouter
          </Button>
        {/* {loader ? (
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
        )} */}
          {error!=="" ?   <div className="errorProduct">{error}</div> :   <div></div> }

      </Modal.Footer>
    </Modal>
  );
}

export default EmployeeModal;
