import "./radiobutton.css";

function RadioROBOTIQUE(props) {
     
  return (
    <div className="groupRadio">
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="ROBOTIQUE"
        id="ROBOTIQUE"
        onClick={
            props.getValue
        }
        defaultChecked = {props.edit && props.field === "ROBOTIQUE" ? true : false}
      />
      <label htmlFor="ROBOTIQUE" className="label">
        ROBOTIQUE
      </label>

      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="DEV MOBILE"
        id="DEV MOBILE"
        defaultChecked = {props.edit && props.field === "DEV MOBILE" ? true : false}
        
        onClick={
            props.getValue
        }
      />
      <label htmlFor="DEV MOBILE" className="label">
       DEV MOBILE
      </label>
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="DevOps"
        id="DevOps"
        defaultChecked = {props.edit && props.field === "DevOps" ? true : false}
        
        onClick={
            props.getValue
        }
      />
      <label htmlFor="DevOps" className="label">
       DevOps
      </label>
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Mecanique"
        id="Mecanique"
        defaultChecked = {props.edit && props.field === "Mecanique" ? true : false}
        
        onClick={
            props.getValue
        }
      />
      <label htmlFor="Mecanique" className="label">
       Mecanique
      </label>
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Eléctronique"
        id="Eléctronique"
        defaultChecked = {props.edit && props.field === "Eléctronique" ? true : false}
        
        onClick={
            props.getValue
        }
      />
      <label htmlFor="Eléctronique" className="label">
       Eléctronique
      </label>
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value=" DEV WEB"
        id=" DEV WEB"
        defaultChecked = {props.edit && props.field === "DEV WEB" ? true : false}

        onClick={
            props.getValue
        }
      />

      <label className="label" htmlFor=" DEV WEB">
        DEV WEB
      </label>

      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="AI"
        id="AI"
        defaultChecked = {props.edit && props.field === "AI" ? true : false}
        onClick={
            props.getValue
        }
      />

      <label htmlFor="Podcast" className="label">
        AI
      </label>

      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="IOT"
        id="IOT"
        defaultChecked = {props.edit && props.field === "IOT" ? true : false}

        onClick={
            props.getValue
        }
      />

      <label className="label" htmlFor="IOT">
        IOT
      </label>
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Space Tech"
        id="Space Tech"
        defaultChecked = {props.edit && props.field === "Space Tech" ? true : false}

        onClick={
            props.getValue
        }
      />

      <label className="label" htmlFor="Space Tech">
        Space Tech
      </label>
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="3D Printing"
        id="3D Printing"
        defaultChecked = {props.edit && props.field === "3D Printing" ? true : false}
        onClick={
            props.getValue
        }
      />

      <label className="label" htmlFor="3D Printing">
        3D Printing
      </label>
    </div>
  );
}

export default RadioROBOTIQUE;
