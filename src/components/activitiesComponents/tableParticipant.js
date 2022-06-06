import React, {useEffect} from "react";
import "./participants.css";
import  {ExportToExcel}  from "./exportToExcel";
function TableParticipant(props) {
let excelFile = props.inscriptionData;
useEffect(()=>{
  excelFile.forEach((e)=>{
    delete e._id
  })
},[props.inscriptionData])

  return (
    <div className="participantWorkshop">
      <div className="workshopTitleheader">
        <div className="workshopTitle">{props.workshopName}</div>
        <div className="downloadFile">
          <ExportToExcel apiData={excelFile} fileName={props.workshopName} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-download"
            viewBox="0 0 16 16"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
          </svg>
        </div>
      </div>
      <table className="table">
        <tbody>
          {props.inWhat ==='formations'? <tr>
            <th className="titleTableth">Participant</th>
            <th className="titleTableth">Num Téléphone</th>
            <th className="titleTableth">Email</th>
            <th className="titleTableth">Profession</th>
            <th className="titleTableth">Etablissement</th>
            <th className="titleTableth">Mode</th>
            <th className="titleTableth">Certificat</th>
          </tr> : <tr>
            <th className="titleTableth">Participant</th>
            <th className="titleTableth">Num Téléphone</th>
            <th className="titleTableth">Email</th>
            <th className="titleTableth">Profession</th>
            <th className="titleTableth">Etablissement</th>
            <th className="titleTableth">team Members</th>
          </tr>}
        </tbody>
        {props.inWhat==="formations" ? <tbody>
          {/* props.inWhat="formations" ? */props.inscriptionData.map((element) => {
          
            return (

              <tr>
                <td className="titleTable">{element.participantName}</td>
                <td className="titleTable">{element.partcipantPhone}</td>
                <td className="titleTable">{element.partcipantEmail}</td>
                <td className="titleTable">{element.partcipantProfession}</td>
                <td className="titleTable">{element.partcipantCollege}</td>
                <td className="titleTable">{element.mode}</td>
                <td className="titleTable">{element.certificat}</td>
              </tr>
            );
          })/*  : props.inscriptionData.map((element) => {
          
            return (

              <tr>
                <td className="titleTable">{element.participantName}</td>
                <td className="titleTable">{element.partcipantPhone}</td>
                <td className="titleTable">{element.partcipantEmail}</td>
                <td className="titleTable">{element.partcipantProfession}</td>
                <td className="titleTable">{element.partcipantCollege}</td>
                <td className="titleTable">{element.teamMembers}</td>
              </tr>
            );
          }) */ }
        </tbody>: <tbody>
       { props.inscriptionData.map((element) => {
  
          
          return (

            <tr>
              <td className="titleTable">{element.participantName}</td>
              <td className="titleTable">{element.partcipantPhone}</td>
              <td className="titleTable">{element.partcipantEmail}</td>
              <td className="titleTable">{element.partcipantProfession}</td>
              <td className="titleTable">{element.partcipantCollege}</td>
              <td className="titleTable">{element.teamMembers}</td>
            </tr>
          );
        }) 
          }
        </tbody>}
      </table>
    </div>
  );
}

export default TableParticipant;
