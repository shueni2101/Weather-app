import React, { useState,useEffect } from "react";
const Datetime= ()=> {

const[date,setDate]=useState("");
const[hour,setHour]=useState("");
useEffect(()=>{
  
setInterval(() =>{
  
const showdate= new Date();
setHour(showdate.toLocaleTimeString());
setDate(showdate.toDateString())
},1000)

},[])
return (
    <div>
      {hour}<br/>
      {date}
    </div>
    );
}
  export default Datetime;
  