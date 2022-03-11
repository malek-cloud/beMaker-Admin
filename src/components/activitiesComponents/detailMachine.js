import "./detailmachine.css"
const DetailMachine = (props)=>{
      return <div className="detailPage">
            <h1 className="detailTitle"> {props.name}</h1>
            <div className="descriptionDetail">{props.description}</div>
            
            {props.image === "" ? <div></div> : <div><img  className="imageDetail" src={props.image} alt="" /></div>}
            </div>
}
export default DetailMachine;