import "./radiobutton.css";

function RadioROBOTIQUE(props) {
     
  return (
    <div className="groupRadio">
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Robotique"
        id="Robotique"
        onClick={
            props.getValue
        }
        defaultChecked = {props.edit && props.field === "Robotique" ? true : false}
      />
      <label htmlFor="Robotique" className="label">
      Robotique
      </label>

      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Programmation"
        id="Programmation"
        defaultChecked = {props.edit && props.field === "Programmation" ? true : false}
        
        onClick={
            props.getValue
        }
      />
      <label htmlFor="Programmation" className="label">
      Programmation
      </label>
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Logiciels"
        id="Logiciels"
        defaultChecked = {props.edit && props.field === "Logiciels" ? true : false}
        onClick={
            props.getValue
        }
      />
      <label className="label" htmlFor="Logiciels">
      Logiciels
      </label>
      
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Administration Systèmes"
        id="Administration Systèmes"
        defaultChecked = {props.edit && props.field === "Administration Systèmes" ? true : false}
        
        onClick={
            props.getValue
        }
      />
      <label htmlFor="Administration Systèmes" className="label">
      Administration Systèmes
      </label>
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Conception Mécanique"
        id="Conception Mécanique"
        defaultChecked = {props.edit && props.field === "Conception Mécanique" ? true : false}
        
        onClick={
            props.getValue
        }
      />
      <label htmlFor="Conception Mécanique" className="label">
      Conception Mécanique
      </label>
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Conception Électronique"
        id="Conception Électronique"
        defaultChecked = {props.edit && props.field === "Conception Électronique" ? true : false}
        
        onClick={
            props.getValue
        }
      />
      <label htmlFor="Conception Électronique" className="label">
      Conception Électronique
      </label>
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Intelligence Artificielle "
        id="Intelligence Artificielle"
        defaultChecked = {props.edit && props.field === "Intelligence Artificielle" ? true : false}

        onClick={
            props.getValue
        }
      />
      <label className="label" htmlFor="Intelligence Artificielle">
      Intelligence Artificielle
      </label>

      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Fabrication Numérique"
        id="Fabrication Numérique"
        defaultChecked = {props.edit && props.field === "Fabrication Numérique" ? true : false}
        onClick={
            props.getValue
        }
      />
      <label htmlFor="Podcast" className="label">
        Fabrication Numérique
      </label>
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Sytémes embarqués"
        id="Sytémes embarqués"
        defaultChecked = {props.edit && props.field === "Sytémes embarqués" ? true : false}
        onClick={
            props.getValue
        }
      />
      <label className="label" htmlFor="Sytémes embarqués">
      Sytémes embarqués
      </label>
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Électricité industrielle et automatisme"
        id="Électricité industrielle et automatisme"
        defaultChecked = {props.edit && props.field === "Électricité industrielle et automatisme" ? true : false}

        onClick={
            props.getValue
        }
      />
      <label className="label" htmlFor="Électricité industrielle et automatisme">
      Électricité industrielle et automatisme
      </label>
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="IoT"
        id="IoT"
        defaultChecked = {props.edit && props.field === "IoT" ? true : false}

        onClick={
            props.getValue
        }
      />
      <label className="label" htmlFor="IoT">
        IoT
      </label>
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Aéronautique"
        id="Aéronautique"
        defaultChecked = {props.edit && props.field === "Aéronautique" ? true : false}
        onClick={
            props.getValue
        }
      />

      <label className="label" htmlFor="Aéronautique">
        Aéronautique
      </label>
      
    </div>
  );
}

export default RadioROBOTIQUE;
