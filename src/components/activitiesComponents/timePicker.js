import React, { useState ,useEffect } from "react";
import DateTimePicker from "react-datetime-picker";

function Time(props) {
  const [value, onChange] = useState(new Date());
  useEffect(()=>{
      props.time(value);
  }, [value])
  return (
    <div>
      <div style={{ display: "inline-flex" }}>
        <div style={{ marginRight: "-2px" }}>Date de l'événement</div>
        <DateTimePicker onChange={onChange} value={value} />
      </div>
      <div style={{ marginTop: "20px" }}></div>
    </div>
  );
}
export default Time;
