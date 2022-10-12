import Modal from "react-bootstrap/Modal";
import "./modal.css";
import { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import TimePicker from "./timePicker";
import RadioFormation from "./radioFormation";

function FormationModal(props) {
  // let [numberTopics, setNumberTopics] = useState(1);
  // let [numberProjects, setNumberProjects] = useState(1);
  // const [listTopics, setListTopics] = useState([{ id: 0, val: "" }]);
  // const [listProjects, setListProjects] = useState([{ id: 0, val: "" }]);

  const nom = useRef();
  const age = useRef();
  const difficulty = useRef();
  const topics = useRef();
  const projects = useRef();
  const description = useRef();
  const prix = useRef();
  const period = useRef();
  const location = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [loader, setLoader] = useState(false);
  const [preview, setPreview] = useState(false);
  const [time, setTime] = useState("");
  const [typeFormation, setTypeFormation] = useState("");
  const [diff, setDiff] = useState("Beginner");
  // function addTopic() {
  //   for (let i = 0; i < listTopics.length; i++) {
  //     console.log(listTopics[i].val.target.value);
  //   }
  //   setNumberTopics(numberTopics + 1);
  //   setListTopics([...listTopics, { id: numberTopics, val: "" }]);
  // }
  // function addProject() {
  //   setNumberProjects(numberProjects + 1);
  //   setListProjects([...listProjects, { id: numberProjects, val: "" }]);
  // }

  const checkType = (e) => {
    setTypeFormation(e.target.value);
    console.log(typeFormation);
  };
  const getTime = (value) => {
    setTime(value.toString());
    console.log(time);
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
    console.log(event.target.files[0]);
    console.log(props.image);
  };
  const submit = async () => {
    setLoader(true);
    try {
      // const projects = [];
      // for (let i = 0; i < listProjects.length; i++) {
      //   projects.push(listProjects[i].val);
      // }
      // const topics = [];
      // for (let i = 0; i < listTopics.length; i++) {
      //   console.log(listTopics[i].val.target.value)
      //   console.log(listTopics[i].val)
      //   topics.push(listTopics[i].val.target.value);
      // }
      // console.log("hedha el array mta topics " + topics)
      // const projects = [];
      // for (let i = 0; i < listProjects.length; i++) {
      //   projects.push(listProjects[i].val.target.value);
      // }
      const fd = new FormData();
      fd.append("name", nom.current.value);
      fd.append("location", location.current.value);
      fd.append("prix", prix.current.value);
      fd.append("age", age.current.value);
      fd.append("period", period.current.value);
      fd.append("date", time);
      fd.append("topics", topics.current.value);
      fd.append("projects", projects.current.value);
      fd.append("difficulty", difficulty.current.value);
      fd.append("field", typeFormation);
      fd.append("image", selectedFile);
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
      // const topics = [];
      // for (let i = 0; i < listTopics.length; i++) {
      //   topics.push(listTopics[i].val.target.value);
      // }
      // const projects = [];
      // for (let i = 0; i < listProjects.length; i++) {
      //   projects.push(listProjects[i].val.target.value);
      // }
      const fd = new FormData();

      if (selectedFile) {
        fd.append("difficulty", difficulty.current.value);
        fd.append("name", nom.current.value);
        fd.append("topics", topics.current.value);
        fd.append("projects", projects.current.value);
        fd.append("age", age.current.value);
        fd.append("location", location.current.value);
        fd.append("prix", prix.current.value);
        fd.append("period", period.current.value);
        fd.append("date", time);
        fd.append("field", typeFormation);
        fd.append("image", selectedFile);
        fd.append("description", description.current.value);
        console.log("fama image");
      } else {
        fd.append("difficulty", difficulty.current.value);
        fd.append("age", age.current.value);
        fd.append("name", nom.current.value);
        fd.append("location", location.current.value);
        fd.append("prix", prix.current.value);
        fd.append("period", period.current.value);
        fd.append("topics", topics);
        fd.append("projects", projects);
        fd.append("date", time);
        fd.append("field", typeFormation);
        fd.append("description", description.current.value);
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
            <TimePicker
              time={getTime}
              timepicker={"Date de Formation"}
              edit={props.edit}
              date={props.date}
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
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <input
              type="text"
              className="nameModal"
              placeholder=" AGE (exemple : > 18YEARS ...)"
              ref={age}
              defaultValue={props.edit ? props.age : ""}
            />

            {/* <div className="inlineAdding">
              {" "}
              <div> Sujets à couvrir</div>
              <button className="ajoutChamps" onClick={addTopic}>
                Ajouter un sujet
              </button>
            </div>
            {listTopics.map((e) => (
              <div key={e.id}>
                <input
                  className="champs"
                  type="text"
                  defaultValue={e.val}
                  onChange={(val) => {
                    e.val = val;
                  }}
                />
                <button
                  className="deleteChamps"
                  onClick={() => {
                    setListTopics(
                      listTopics.filter((element) => {
                        return element.id !== e.id;
                      })
                    );
                  }}
                >
                  X
                </button>
              </div>
            ))}

            <div className="inlineAdding">
              <div> Projets à réaliser</div>
              <button className="ajoutChamps" onClick={addProject}>
                Ajouter un projet
              </button>
            </div>
            {listProjects.map((e) => (
              <div key={e.id}>
                <input type="text" className="champsC" defaultValue={e.val} />
                <button
                  className="deleteChamps"
                  onClick={() => {
                    setListProjects(
                      listProjects.filter((element) => {
                        return element.id !== e.id;
                      })
                    );
                  }}
                >
                  X
                </button>
              </div>
            ))} */}
             <textarea
              style={{ marginTop: "0px", marginBottom: "20px" }}
              placeholder="Sujets à couvrir : Exemple : Sujet 1 / Sujet 2 / Sujet 3...."
              cols="50"
              rows="4"
              ref={topics}
              className="descriptionModal"
              defaultValue={props.edit ? props.topics : ""}
            ></textarea>
                <textarea
              style={{ marginTop: "0px", marginBottom: "20px" }}
              placeholder="Projets à réaliser : Exemple : Projet 1 / Projet 2 / Projet 3...."
              cols="50"
              rows="4"
              ref={projects}
              className="descriptionModal"
              defaultValue={props.edit ? props.projects : ""}
            ></textarea>
          </div>
          <div className="imageModalForm">
            <input
              type="text"
              className="nameModal"
              placeholder="lieu de la formation..."
              ref={location}
              defaultValue={props.edit ? props.location : ""}
            />

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
            <textarea
              style={{ marginTop: "0px", marginBottom: "20px" }}
              placeholder="description de la formation..."
              cols="50"
              rows="5"
              ref={description}
              className="descriptionModal"
              defaultValue={props.edit ? props.description : ""}
            ></textarea>

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
