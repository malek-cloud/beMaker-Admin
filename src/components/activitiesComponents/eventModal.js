import Modal from "react-bootstrap/Modal";
import "./modal.css";
import { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
function EventModal(props) {
  const nom = useRef();
  const description = useRef();
  const location = useRef();
  const animator = useRef();
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
      fd.append("location", location.current.value);
      fd.append("animator", animator.current.value);
      fd.append("description", description.current.value);
      const response = await axios({
        method: "post",
        url : process.env.REACT_APP_BACKEND_URL + "activities/createEvent",
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
      console.log("erreur mateb3athch el event raw" + err);
    }
  };
  const editMachine = async () => {
    setLoader(true);
    try {
      const fd = new FormData();
      if (selectedFile) {
        fd.append("image", selectedFile);
        fd.append("name", nom.current.value);
        fd.append("description", description.current.value);
        fd.append("location", location.current.value);
        fd.append("animator", animator.current.value);
        console.log('fama image');

      }else{
        fd.append("name", nom.current.value);
        fd.append("description", description.current.value);
        fd.append("location", location.current.value);
        fd.append("animator", animator.current.value);
        console.log('famech image');
        
        
      }
      const response = await axios({
        method: "patch",
        url : process.env.REACT_APP_BACKEND_URL + `activities/editEvent/${props.id}`,
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
      console.log("erreur mateb3athch el event raw" + err);
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
              placeholder="nom de l'événement"
              ref={nom}
              defaultValue = {props.edit ? props.name : ""}
            />
            <input
              type="text"
              className="nameModal"
              placeholder="lieu de l'événement"
              ref={location}
              defaultValue = {props.edit ? props.name : ""}
            />
             <input
              type="text"
              className="nameModal"
              placeholder="nom et prenom de l'animateur"
              ref={animator}
              defaultValue = {props.edit ? props.name : ""}
            />
            <textarea
              placeholder="description de l'événement..."
              cols="50"
              rows="8"
              ref={description}
              className="descriptionModal"
              defaultValue={props.edit ? props.description : ""}

            >
             
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

export default EventModal;
