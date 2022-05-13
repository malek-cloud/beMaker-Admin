import "./radiobutton.css";
import { useEffect, useState } from "react";
import axios from "axios";

function RadioMachine(props) {

  const [services, setServices] = useState([]);
  useEffect(() => {
        console.log('hedhy el id mta service mel radio machine' + props.serviceid)
    axios({
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + "activities/Services",
      headers: { "Content-Type": "multipart/form-data" },
    }).then((resp) => {
      setServices(resp.data.services);
    });
  }, []);
  return services.map((service) => (
    <div key={service._id}>
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value={service._id}
        id={service.name}
        onClick={props.getValue}
        defaultChecked={
          props.edit && props.serviceid === service._id ? true : false
        }
      />
      <label htmlFor={service.name} className="label">
        {service.name}
      </label>
    </div>
  ));
}

export default RadioMachine;
