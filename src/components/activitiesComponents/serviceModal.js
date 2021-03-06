import Modal from "react-bootstrap/Modal";
import "./modal.css";
import { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
function ServiceModal(props) {
  const nom = useRef();
  const description = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [loader, setLoader] = useState(false);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (!selectedFile) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreview(fileReader.result);
    };
    fileReader.readAsDataURL(selectedFile);
  }, [selectedFile]);
  const close = () => {
    props.onHide();
    setPreview();
  };
  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
    console.log(props.image);
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
        url: process.env.REACT_APP_BACKEND_URL + `activities/createService`,
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
  const editService = async () => {
    setLoader(true);
    try {
      const fd = new FormData();

      if (selectedFile) {
        fd.append("image", selectedFile);
        fd.append("name", nom.current.value);
        fd.append("description", description.current.value);
        console.log("fama image");
      } else {
        fd.append("name", nom.current.value);
        fd.append("description", description.current.value);
        console.log("famech image");
      }
      const response = await axios({
        method: "patch",
        url:
          process.env.REACT_APP_BACKEND_URL +
          `activities/editService/${props.id}`,
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
              placeholder="nom du service"
              ref={nom}
              defaultValue={props.edit === "true" ? props.name : ""}
            />
            <textarea
              placeholder="description du service..."
              cols="50"
              rows="8"
              ref={description}
              className="descriptionModal"
              defaultValue={props.edit === "true" ? props.description : ""}
            ></textarea>
          </div>
          <div className="imageModalForm">
            <input type="file" onChange={fileSelectedHandler} />
            {preview && !props.edit && (
              <img className="imageModal" src={preview} alt="Preview" />
            )}
            {!preview && !props.edit && (
              <img className="imageModal" src="/images/pick.png" alt="Pick" />
            )}
            {!preview && props.edit && (
              <img className="imageModal" src={props.image} alt="edit2" />
            )}
            {preview && props.edit && (
              <img className="imageModal" src={preview} alt="edit" />
            )}
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
          <Button
            className="modalButton"
            onClick={props.click === "update" ? editService : submit}
          >
            {props.click}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
export default ServiceModal ;