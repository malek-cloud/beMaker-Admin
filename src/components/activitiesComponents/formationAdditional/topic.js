import React, { useState, useRef } from "react";
import "./topic.css";

function Topic(props) {
      const[listTopics, setListTopics]=useState=[];
      const[listProjects, setListProjects]=useState=[];
      
  return (
    <div className="topic">
      <input type="text" className="champs" ref={props.refTopic} placeholder={props.placeHolder}/>
      <button className="ajoutChamps" onClick={props.setNumber}>Add</button>
      <button className="deleteChamps" onClick={props.deleteField}>X</button>
    </div>
  );
}

export default Topic;
