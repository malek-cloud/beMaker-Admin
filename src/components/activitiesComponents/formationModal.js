import Modal from "react-bootstrap/Modal";
import "./modal.css";
import { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import TimePicker from "./timePicker"
import RadioFormation from "./radioFormation";

function FormationModal(props) {
  const nom = useRef();
  const description = useRef();
  const animator = useRef();
  const prix = useRef();
  const period = useRef();
  const location = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [loader, setLoader] = useState(false);
  const [preview, setPreview] = useState(false);
  const [time, setTime] = useState("");
  const [typeFormation, setTypeFormation] = useState("");

  const checkType = e =>{
      setTypeFormation(e.target.value);
      console.log(typeFormation)
    }
  const getTime = (value) =>{
      setTime(value.toString());
      console.log(time)
    }
  useEffect(()=>{
    if(!selectedFile){
      console.log(props.image);
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
    console.log(event.target.files[0]);
    console.log(props.image)
  };
  const submit = async () => {
    setLoader(true);
    try {
      const fd = new FormData();
      fd.append("name", nom.current.value);
      fd.append("location", location.current.value);
      fd.append("prix", prix.current.value);
      fd.append("animator", animator.current.value);
      fd.append("period", period.current.value);
      fd.append("date", time);
      fd.append("field", typeFormation);
      fd.append("image", selectedFile);
      fd.append("description", description.current.value);
      const response = await axios({ 
        method: "post",
        url : process.env.REACT_APP_BACKEND_URL + `activities/createFormation`,
        data: fd,
        headers: { "Content-Type": "multipart/form-data" },
      });
      const data = response.status;
      if (data === 200) {
        setLoader(false);
        props.onHide();
        window.location.reload(true);
        setPreview(true);
      }
      console.log("hedhy el donne : " + data);
    } catch (err) {
      console.log("erreur mateb3athch el projet raw" + err);
    }
  };
  const editFormation = async () => {
    setLoader(true);
    try {
      const fd = new FormData();

      if (selectedFile) {
            fd.append("name", nom.current.value);
            fd.append("location", location.current.value);
            fd.append("prix", prix.current.value);
            fd.append("animator", animator.current.value);
            fd.append("period", period.current.value);
            fd.append("date", time);
            fd.append("field", typeFormation);
            fd.append("image", selectedFile);
            fd.append("description", description.current.value);
        console.log('fama image');

      }else{
            fd.append("name", nom.current.value);
            fd.append("location", location.current.value);
            fd.append("prix", prix.current.value);
            fd.append("animator", animator.current.value);
            fd.append("period", period.current.value);
            fd.append("date", time);
            fd.append("field", typeFormation);
            fd.append("description", description.current.value);
        console.log('famech image');
      }
      const response = await axios({
        method: "patch",
        url : process.env.REACT_APP_BACKEND_URL + `activities/editFormation/${props.id}`,
        data: fd,
        headers: { "Content-Type": "multipart/form-data" },
      });
      const data = response.status;
      if (data === 200) {
        setLoader(false);
        props.onHide();
        window.location.reload(true);
        setPreview(true);
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
              placeholder="nom de la formation"
              ref={nom}
              defaultValue = {props.edit  ? props.name : ""}
            />                       
            <TimePicker time={getTime} timepicker={"Date de Formation"} edit={props.edit} date={props.date}/>
            <RadioFormation getValue={checkType} edit={props.edit} field={props.field}/>
            <textarea
              placeholder="description de la formation..."
              cols="50"
              rows="8"
              ref={description}
              className="descriptionModal"
              defaultValue={props.edit ? props.description : ""}

            >
              </textarea>
          </div>
          <div className="imageModalForm">
          <input
              type="text"
              className="nameModal"
              placeholder="lieu de la formation..."
              ref={location}
              defaultValue = {props.edit  ? props.location : ""}
            />
          <input
              type="text"
              className="nameModal"
              placeholder="nom et prenom de l'animateur"
              ref={animator}
              defaultValue = {props.edit ? props.animator : ""}
            />
            <input
              type="text"
              className="nameModal"
              placeholder="prix de formation"
              ref={prix}
              defaultValue = {props.edit ? props.prix : ""}
            /><input
            type="text"
            className="nameModal"
            placeholder="durée de la formation"
            ref={period}
            defaultValue = {props.edit ? props.period : ""}
          />
            <input type="file" onChange={fileSelectedHandler}   />
            {preview && !props.edit  && <img className="imageModal" src={preview} alt="Preview" />}
            {preview && props.edit  && <img className="imageModal" src={preview} alt="Preview" />}
            {!preview && !props.edit  && <img className="imageModal" src="/images/pick.png" alt="Pick" />}
            {!preview && props.edit  && <img className="imageModal" src={props.image} alt="Pick" />}
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
          <Button className="modalButton" onClick={props.click==="update" ? editFormation: submit}>
            {props.click}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default FormationModal;
