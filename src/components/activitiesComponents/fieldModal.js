import Modal from "react-bootstrap/Modal";
import "./modal.css";
import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
function FieldMachine(props) {
  const nom = useRef();
  const description = useRef();
  const [loader, setLoader] = useState(false);
  

  const close =()=>{
  props.onHide();
  }
  const submit = async () => {
    setLoader(true);
    try {
      const fd = new FormData();
      fd.append("name", nom.current.value);
      fd.append("description", description.current.value);
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/activities/createField",
        data: fd,
        headers: { "Content-Type": "multipart/form-data" },
      });
      const data = response.status;
      if (data === 200) {
        setLoader(false);
        props.onHide();
        window.location.reload(true);
      }
      console.log("hedhy el donne : " + data);
    } catch (err) {
      console.log("erreur mateb3athch el machine raw" + err);
    }
  };
  const editMachine = async () => {
    setLoader(true);
    try {
      const fd = new FormData();
      fd.append("name", nom.current.value);
      fd.append("description", description.current.value);
      const response = await axios({
        method: "patch",
        url: `http://localhost:5000/activities/editField/${props.id}`,
        data: fd,
        headers: { "Content-Type": "multipart/form-data" },
      });
      const data = response.status;
      if (data === 200) {
        setLoader(false);
        props.onHide();
        window.location.reload(true);
      }
      console.log("hedhy el donne : " + data);
    } catch (err) {
      console.log("erreur mateb3athch el field raw" + err);
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
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className="inputsModalForm">
            <input
              type="text"
              className="nameModal"
              placeholder="nom du domaine"
              ref={nom}
              defaultValue = {props.edit ? props.name : ""}
            />
            <textarea
              placeholder="description du domaine..."
              cols="50"
              rows="8"
              ref={description}
              className="descriptionModal"
              defaultValue={props.edit ? props.description : ""}
            >
              
              </textarea>
          </div>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={close} className="modalButton">
          Close
        </Button>
        {loader ? (
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        ) : (
          <Button className="modalButton" onClick={props.click==="update" ? editMachine : submit}>
            {props.click}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default FieldMachine;
