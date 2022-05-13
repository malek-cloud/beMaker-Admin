import React, { useState ,useEffect } from "react";
import DateTimePicker from "react-datetime-picker";

function Time(props) {
  const [value, onChange] = useState(new Date());
  useEffect(()=>{
      props.time(props.edit ? props.date : value);
  }, [value])
  return (
    <div>
      <div style={{ display: "inline-flex" }}>
        <div style={{ marginRight: "4px" }}>{props.timepicker}</div>
        <DateTimePicker onChange={onChange} value={props.edit ? props.date : value} />
      </div>
      <div style={{ marginTop: "20px" }}></div>
    </div>
  );
}
export default Time;
