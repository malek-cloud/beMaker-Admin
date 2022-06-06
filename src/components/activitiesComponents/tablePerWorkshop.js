import React from "react";
import "./participants.css";
import TableParticipant from "./tableParticipant";
import axios from "axios";
import { useEffect, useState } from "react";
function TablePerWorkshop(props) {
  const [data, setData] = useState([]);
  const [workshop1, setWorkshop] = useState([]);
  const [load, setLoader] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (props.inWhat === "formations") {
        const res = await axios.get(
          process.env.REACT_APP_BACKEND_URL + "activities/participants"
        );

        if (res.status === 200) {
          setData(res.data.participantWorkshop);
          let listworkshop = [];
          listworkshop.push(res.data.participantWorkshop[0].workshop);
      
          res.data.participantWorkshop.forEach((element) => {
            if (!listworkshop.includes(element.workshop)) {
              listworkshop.push(element.workshop);
              setWorkshop(listworkshop);
            }
          });
          setWorkshop(listworkshop);

          setLoader(false);
        }
      } else if (props.inWhat === "événements") {
        const res = await axios.get(
          process.env.REACT_APP_BACKEND_URL + "activities/EventParticipants"
        );

        if (res.status === 200) {
          setData(res.data.eventParticipant);

          let listworkshop = [];
          listworkshop.push(res.data.eventParticipant[0].eventName);

    
          res.data.eventParticipant.forEach((element) => {
            if (!listworkshop.includes(element.eventName)) {
              listworkshop.push(element.eventName);
              setWorkshop(listworkshop);
            }
          });
          setWorkshop(listworkshop);
          setLoader(false);
        }
      }
    }
    fetchData();
  }, [load]);

  if (props.inWhat === "formations") {
    return (
      <div>
        {workshop1.map((item) => {
          let listdata = [];
          data.forEach((e) => {
            if (e.workshop === item) {
              listdata.push(e);
            }
          });
          return (
            <TableParticipant
              key={item}
              inscriptionData={listdata}
              workshopName={item}
              inWhat={props.inWhat}
            />
          );
        })}
      </div>
    );
  } else if (props.inWhat === "événements") {
    return (
      <div>
        {workshop1.map((item) => {
          let listdata = [];
          data.forEach((e) => {
            if (e.eventName === item) {
              listdata.push(e);
            }
          });
          return (
            <TableParticipant
              key={item}
              inscriptionData={listdata}
              workshopName={item}
              inWhat={props.inWhat}
            />
          );
        })}
      </div>
    );
  }
}
export default TablePerWorkshop;
