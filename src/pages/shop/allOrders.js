import React, {useState, useEffect} from "react";
import axios from 'axios';
import "../main.css";
import SimpleOrder from "./simpleOrder";
function AllOrders() {
  const [orders, setOrders] = useState();
  useEffect(()=>{
      const getOrders = async()=>{
       try{
        const resp = await axios.get(process.env.REACT_APP_BACKEND_URL+"shop/Orders");
        setOrders(resp.data.orders)
       }catch(err){
         console.log(err);
       }
      }
      getOrders();
    },[])
  return (
    <div className="allordersPart">
          
          {orders && orders.map((e,index)=>{
                return <SimpleOrder reference={index} key={index} order={e}/>
          })}
    </div>
  )
}

export default AllOrders