
import "./radiobutton.css";

function Eventradiobutton(props) {
  
  return (
    <div className="groupRadio">
      <input
        name="singleChoice"
        className="pointRadio"
        type="radio"
        value="Formation"
        id="Formation"
        defaultChecked = {props.edit && props.type === "Formation" ? true : false}

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
        defaultChecked = {props.edit && props.type === "Gratuit" ? true : false}
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
        defaultChecked = {props.edit && props.type === "Bootcamp" ? true : false}

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
        defaultChecked = {props.edit && props.type === "Podcast" ? true : false}

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
        defaultChecked = {props.edit && props.type === "Event" ? true : false}

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
        defaultChecked = {props.edit && props.type === "Discount" ? true : false}

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
