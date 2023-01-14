import Modal from "react-bootstrap/Modal";
import "./modal.css";
import { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import RadioFormation from "./radioFormation";

function FormationModal(props) {
  const nom = useRef();
  const age = useRef();
  const difficulty = useRef();
  const program = useRef();
  const objectifs = useRef();
  const prerequis = useRef();
  const description = useRef();
  const prix = useRef();
  const period = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [loader, setLoader] = useState(false);
  const [preview, setPreview] = useState(false);
 
  const [typeFormation, setTypeFormation] = useState("");
  const [diff, setDiff] = useState(props.edit ? props.difficulty : "Débutant");

  
  const checkType = (e) => {
    setTypeFormation(e.target.value);
    console.log(typeFormation);
  };
  useEffect(() => {
    if (!selectedFile) {
      console.log(props.image);
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
    console.log(props.image);
  };
  const submit = async () => {
    setLoader(true);
    try {
      const fd = new FormData();
      fd.append("name", nom.current.value);
      fd.append("prix", prix.current.value);
      fd.append("age", age.current.value);
      fd.append("period", period.current.value);
      fd.append("objectifs", objectifs.current.value);
      fd.append("prerequis", prerequis.current.value);
      fd.append("difficulty", difficulty.current.value);
      fd.append("field", typeFormation);
      fd.append("image", selectedFile);
      fd.append("program", program.current.value);
      fd.append("description", description.current.value);
      const response = await axios({
        method: "post",
        url: process.env.REACT_APP_BACKEND_URL + `activities/createFormation`,
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
        fd.append("difficulty", difficulty.current.value);
        fd.append("name", nom.current.value);
        fd.append("prerequis", prerequis.current.value);
        fd.append("objectifs", objectifs.current.value);
        fd.append("program", program.current.value);
        fd.append("age", age.current.value);
        fd.append("prix", prix.current.value);
        fd.append("period", period.current.value);
        fd.append("field", typeFormation);
        fd.append("image", selectedFile);
        fd.append("description", description.current.value);
        console.log("fama image");
      } else {
        fd.append("difficulty", difficulty.current.value);
        fd.append("age", age.current.value);
        fd.append("name", nom.current.value);
        fd.append("prerequis", prerequis.current.value);
        fd.append("prix", prix.current.value);
        fd.append("period", period.current.value);
        fd.append("objectifs", objectifs.current.value);
        fd.append("field", typeFormation);
        fd.append("description", description.current.value);
        fd.append("program", program.current.value);
        console.log("famech image");
      }
      const response = await axios({
        method: "patch",
        url:
          process.env.REACT_APP_BACKEND_URL +
          `activities/editFormation/${props.id}`,
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
              defaultValue={props.edit ? props.name : ""}
            />
            <RadioFormation
              getValue={checkType}
              edit={props.edit}
              field={props.field}
            />
            <select
              name="diff"
              id="diff"
              ref={difficulty}
              onChange={(e) => setDiff(e.target.value)}
              style={{ marginBottom: "10px" }}
              defaultValue={props.edit ? props.difficulty : ""}
            >
              <option value="Débutant">Débutant</option>
              <option value="Moyen">Moyen</option>
              <option value="Avancé">Avancé</option>
            </select>
            <input
              type="text"
              className="nameModal"
              placeholder=" AGE (exemple : > 18YEARS ...)"
              ref={age}
              defaultValue={props.edit ? props.age : ""}
            />
             <textarea
              style={{ marginTop: "0px", marginBottom: "20px" }}
              placeholder="Les objectifs de la formation : Exemple : Objectif 1 / Objectif 2 / Objectif 3...."
              cols="50"
              rows="4"
              ref={objectifs}
              className="descriptionModal"
              defaultValue={props.edit ? props.objectifs : ""}
            ></textarea>
            <textarea
              style={{ marginTop: "0px", marginBottom: "20px" }}
              placeholder="Les prérequis de la formation : Exemple : prérequis 1 / prérequis 2 / prérequis 3...."
              cols="50"
              rows="4"
              ref={prerequis}
              className="descriptionModal"
              defaultValue={props.edit ? props.prerequis : ""}
            ></textarea>
          </div>
          <div className="imageModalForm">


            <input
              type="text"
              className="nameModal"
              placeholder="prix de formation"
              ref={prix}
              defaultValue={props.edit ? props.prix : ""}
            />
            <input
              type="text"
              className="nameModal"
              placeholder="durée de la formation"
              ref={period}
              defaultValue={props.edit ? props.period : ""}
            />
             <input
              type="text"
              className="nameModal"
              placeholder="Lien téléchargable du Programme de la formation"
              ref={program}
              defaultValue={props.edit ? props.program : ""}
            />
            <textarea
              style={{ marginTop: "0px", marginBottom: "20px" }}
              placeholder="description de la formation..."
              cols="50"
              rows="5"
              ref={description}
              className="descriptionModal"
              defaultValue={props.edit ? props.description : ""}
            ></textarea>
            <div>Image de la formation</div>
            <input type="file" onChange={fileSelectedHandler} />
            {preview && !props.edit && (
              <img className="imageModal" src={preview} alt="Preview" />
            )}
            {preview && props.edit && (
              <img className="imageModal" src={preview} alt="Preview" />
            )}
            {!preview && !props.edit && (
              <img className="imageModal" src="/images/pick.png" alt="Pick" />
            )}
            {!preview && props.edit && (
              <img className="imageModal" src={props.image} alt="Pick" />
            )}



            {/* <div>Programme de la formation</div>
            <input type="file" onChange={pdfSelectedHandler} />
            {selectedPDF && !props.edit && (
              <div className="pdfModal" >{selectedPDF.name}</div>
            )}
            {selectedPDF && props.edit && (
               <div className="pdfModal" >{selectedPDF.name}</div>
            )}
            {!selectedPDF && !props.edit && (
              <img className="" src="/images/pdf.jpeg" alt="Pick PDF" />
            )}
            {!selectedPDF && props.edit && (
              <img className="" src={props.program} alt="Pick PDF" />
            )} */}

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
            onClick={props.click === "update" ? editFormation : submit}
          >
            {props.click}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default FormationModal;
