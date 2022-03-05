import Modal from "react-bootstrap/Modal";
import "./modal.css";
import { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
function AddModal(props) {
  const nom = useRef();
  const description = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [loader, setLoader] = useState(false);
  const [preview, setPreview] = useState(false);
  
  useEffect(()=>{
    if(!selectedFile){
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = ()=>{
      setPreview(fileReader.result);
    }
    fileReader.readAsDataURL(selectedFile)
  }, [selectedFile]);
  const close =()=>{
  props.onHide();
  setPreview();
  }
  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const submit = async () => {
    setLoader(true);
    try {
      const fd = new FormData();
      fd.append("name", nom.current.value);
      fd.append("image", selectedFile);
      fd.append("description", description.current.value);
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/activities/createMachine",
        data: fd,
        headers: { "Content-Type": "multipart/form-data" },
      });
      const data = response.status;
      if (data === 200) {
        setLoader(false);
        props.onHide();
        window.location.reload(true);
        setPreview();
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
      fd.append("image", selectedFile);
      fd.append("description", description.current.value);
      const response = await axios({
        method: "patch",
        url: `http://localhost:5000/activities/editMachine/${props.id}`,
        data: fd,
        headers: { "Content-Type": "multipart/form-data" },
      });
      const data = response.status;
      if (data === 200) {
        setLoader(false);
        props.onHide();
        window.location.reload(true);
        setPreview();
      }
      console.log("hedhy el donne : " + data);
    } catch (err) {
      console.log("erreur mateb3athch el machine raw" + err);
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
        <div className="modalForm">
          <div className="inputsModalForm">
            <input
              type="text"
              className="nameModal"
              placeholder="nom de la machine"
              ref={nom}
              defaultValue = {props.edit ? props.name : ""}
            />
            <textarea
              placeholder="description de la machine..."
              cols="50"
              rows="8"
              ref={description}
              className="descriptionModal"
            >
              {props.edit ? props.description : ""}
              </textarea>
          </div>
          <div className="imageModalForm">
            <input type="file" onChange={fileSelectedHandler}  />
            {preview && !props.edit && <img className="imageModal" src={preview} alt="Preview" />}
            {!preview && !props.edit && <img className="imageModal" src="/images/pick.png" alt="Pick" />}
            {!preview && props.edit && <img className="imageModal" src={props.image} alt="Pick" />}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={close} className="modalButton">
          Close
        </Button>
        {loader ? (
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
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

export default AddModal;
