import React from "react";
import "./participants.css";
import TableParticipant from "./tableParticipant";
import axios from "axios";
import { useEffect, useState } from "react";
function TablePerWorkshop() {
  const [data, setData] = useState([]);
  const [workshop1, setWorkshop] = useState([]);
  const [load, setLoader] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "http://localhost:5000/activities/participants"
      );
      if (res.status === 200) {
        setData(res.data.participantWorkshop);
        console.log(data);
        let listworkshop = [];
        listworkshop.push(res.data.participantWorkshop[0].workshop);
        console.log(listworkshop);
        res.data.participantWorkshop.forEach((element) => {
          if (!listworkshop.includes(element.workshop)) {
            listworkshop.push(element.workshop);
            console.log(listworkshop);
            setWorkshop(listworkshop);
            console.log("hedhy el state ta3 workshop" + workshop1);
            console.log(workshop1[0]===res.data.participantWorkshop[0].workshop)
          }
        });

        setLoader(false);
      } else {
      }
    }
    fetchData();
  }, [load]);

 return <div>
  {  workshop1.map((item) => {
    let listdata =[];
    data.forEach((e)=>{
      if( e.workshop === item){
        listdata.push(e)
      }
    })
     return( <TableParticipant
     key={item}
     inscriptionData={listdata}
     workshopName ={item}
    />)
    
})}
 </div>
}
export default TablePerWorkshop;
