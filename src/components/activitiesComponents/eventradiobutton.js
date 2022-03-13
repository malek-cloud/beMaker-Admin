import React, { useState, useEffect } from "react";
import "./radiobutton.css";

function Eventradiobutton(props) {
  const [typeEvent, setTypeEvent] = useState("");
 
  
  function getformation(){
        setTypeEvent("formation");
        setTypeEvent("formation");
        props.getValue(typeEvent)
        console.log(typeEvent)
        console.log(typeEvent)
  }
  function getboot(){
      setTypeEvent("bootcamp");
      setTypeEvent("bootcamp");
      props.getValue(typeEvent)
        console.log(typeEvent)
        console.log(typeEvent)
}function getpodcast(){
      setTypeEvent("podcast");
      setTypeEvent("podcast");
      props.getValue(typeEvent)
        console.log(typeEvent)
        console.log(typeEvent)
}function getevent(){
      setTypeEvent("event");
      props.getValue(typeEvent)
      console.log(typeEvent)
}function getdiscount(){
      setTypeEvent("discount");
      props.getValue(typeEvent)
      console.log(typeEvent)
}
function getgratuit(){
      setTypeEvent("gratuit");
      props.getValue(typeEvent)
      console.log(typeEvent)
}
  return (
    <div className="groupRadio">
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Formation"
        id="Formation"
        onClick={
            props.getValue
        }
      />

      <label htmlFor="Formation" className="label">
        Formation
      </label>

      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Gratuit"
        id="Gratuit"
        
        onClick={
            props.getValue
        }
      />
      <label htmlFor="Gratuit" className="label">
        WorkShop Gratuit
      </label>

      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Bootcamp"
        id="Bootcamp"
        onClick={
            props.getValue
        }
      />

      <label className="label" htmlFor="Bootcamp">
        Bootcamp
      </label>

      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Podcast"
        id="Podcast"
        onClick={
            props.getValue
        }
      />

      <label htmlFor="Podcast" className="label">
        Podcast
      </label>

      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Event"
        id="Event"
        onClick={
            props.getValue
        }
      />

      <label className="label" htmlFor="Event">
        Event
      </label>

      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Discount"
        id="Discount"
        onClick={
            props.getValue
        }
      />

      <label className="label" htmlFor="Discount">
        Discount
      </label>
    </div>
  );
}

export default Eventradiobutton;
