import React, { useState,useEffect } from "react";
import List from "../Print List/List";
import styles from "./Form.module.css"

const Form= ()=> {
    const [city,setCity]=useState("");
    const [find,setFind]=useState("");
    const [temp, setTemp]=useState("");
    const [winds, setWinds]=useState("");
    const [cloud, setCloud]=useState("");
    const[clima,setClima]=useState("");
    const [hora,setHora]=useState("");
    const[forecast,setForecast]=useState("");
    const[error,setError]=useState("")

const handlerEvent= async (e)=>{    
    e.preventDefault();
    if(!find){
        return setError("Escriba algo valido")
    }
        const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${find}&appid=fa3dd4e1d5753bebb65b815b24918780&units=metric`;
        const wheatherr= await fetch (apiUrl);
        const wheatherJson= await wheatherr.json();
    
        const weatherFinal= wheatherJson;

        const apiDays=`https://api.openweathermap.org/data/2.5/forecast?q=${find}&appid=fa3dd4e1d5753bebb65b815b24918780&units=metric`;
        const wheatherDays= await fetch (apiDays);
        const daysJson= await wheatherDays.json();     
        setForecast(daysJson)
        setCity(wheatherJson);
       setTemp(weatherFinal.main);
       setWinds(weatherFinal.wind);
       setCloud(weatherFinal.clouds);
        setClima(weatherFinal.weather);
       console.log(city)

    setError("");
        
}
    useEffect(() =>{
        if(city){
            var showdate= new Date();
            var localTime= showdate.getTime();
            var offset= showdate.getTimezoneOffset() * 60000;
            var utc= localTime + offset;
            showdate= new Date(utc + 1000 * city.timezone)
            setHora(showdate)
        }
            
    },[city])



const getCoords=(e)=>{

    return navigator.geolocation.getCurrentPosition(findLocation);
}
const findLocation= async (e)=> {
    const latitud= e.coords.latitude;
    const longitud= e.coords.longitude;
    return { latitud,longitud}
}
    return (
        <div className={styles.containerFather}>
            <h2> {error}</h2>
      <div className={styles.container}>
        <form onSubmit={(e)=>handlerEvent(e)} className={styles.form}>
                <input className={styles.input} type="text" name="city" onChange={e=>setFind(e.target.value)} placeholder="Ingrese su Ciudad"></input>
            </form>
        {
            city!==""?  <> <div className={styles.divForm}>
            
         <List hora={hora} forecast={forecast} city={city} temp={temp} winds={winds} cloud={cloud} clima={clima} /> 
        </div>
        <div className={styles.divFormLoc}>
        <form className={styles.formLoc} onSubmit={(i)=>i.preventDefault()}>
             <button className={styles.button} onClick={getCoords}>
                 Localizacion
             </button>
         </form>
        </div></>: <h2>No Data</h2>
        }
     
     
      
      </div>
      </div>

    );
  }
  
  export default Form;
  