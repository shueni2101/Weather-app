import React, { useState,useEffect } from "react";
const DateCountry= ({city})=> {

const[dates,setDates]=useState("");
const[hours,setHours]=useState("");
if(city!=""){
    let showdate= new Date();
    var localTime= showdate.getTime();
    var offset= showdate.getTimezoneOffset() * 60000;
    var utc= localTime + offset;
    showdate= new Date(utc + 1000 * city.timezone)
    setHours(showdate.toTimeString())
    setDates(showdate.toDateString())
  console.log(hours)

  }
useEffect(()=>{

  

},[])
return (
    <div>
      {hours}<br/>
      {dates}
    </div>
    );
}
  export default DateCountry;
  