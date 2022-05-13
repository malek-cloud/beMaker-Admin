import "./detailmachine.css"
const DetailMachine = (props)=>{
      return <div className="detailPage">
            <h1 className="detailTitle">Titre :  {props.name}</h1>
            {props.category? <div className="descriptionDetail">Categorie : {props.category}</div> :<div></div>}
            {props.field ? <div className="descriptionDetail"> Domaine : {props.field}</div> : <div></div>}
            {props.type? <div className="descriptionDetail"> Type : {props.type}</div> :<div></div>}
            {props.prix? <div className="descriptionDetail">Prix : {props.prix}</div> :<div></div>}
            {props.location? <div className="descriptionDetail">Lieu : {props.location}</div> :<div></div>}
            {props.date ? <div className="descriptionDetail"> Date : {props.date}</div> :<div></div>}
            {props.period ? <div className="descriptionDetail"> Durée : {props.period}</div> :<div></div>}
            {props.animator ? <div className="descriptionDetail"> Animateur : {props.animator}</div> :<div></div>}
            {props.description ? <div className="descriptionDetail">Description : {props.description}</div> :<div></div>}
       
            
            {props.image === "" ? <div></div> : <div><img  className="imageDetail" src={props.image} alt="" /></div>}
            </div>
}
export default DetailMachine;