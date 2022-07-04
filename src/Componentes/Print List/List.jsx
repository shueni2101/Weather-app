import React,{useState} from "react";
import styles from "./List.module.css";
import Datetime from "../Date/Datetime";
import{ FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{ faCloud, faCloudMoonRain, faCloudRain, faMoon, faSun, faWind } from "@fortawesome/free-solid-svg-icons";
const List= ({city, temp, winds,clima, data,hora,forecast})=> {

var condicion;
var dat="";
var url= "http://openweathermap.org/img/w/";
var descripcion="";
var forecastDate3="";
var forecastDate6="";
var forecastDate9="";
var iconUrl3="";
var iconUrl6="";
var iconUrl9="";
var forecastDayDescriptionOne="";
var forecastDayWeatherOneMin="";
var forecastDayWeatherOneMax="";
var forecastDayDescriptionTwo="";
var forecastDayWeatherTwoMin="";
var forecastDayWeatherTwoMax="";
var forecastDayDescriptionThre="";
var forecastDayWeatherThreMin="";
var forecastDayWeatherThreMax="";
var horaString= hora.toString().slice(10,-42);
var horaLocal= horaString.slice(5)
    if(city){
     
            dat= url + city.weather[0].icon + ".png";
            descripcion= city.weather[0].description;
            forecastDate3 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4);
            forecastDate6 = forecast.list[10].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4);
            forecastDate9 = forecast.list[23].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4);
            iconUrl3 = url + forecast.list[2].weather[0].icon + ".png";
            iconUrl6 = url + forecast.list[10].weather[0].icon + ".png";
            iconUrl9 = url + forecast.list[23].weather[0].icon + ".png";
            
            forecastDayDescriptionOne=  forecast.list[2].weather[0].description;
            forecastDayWeatherOneMin= forecast.list[2].main.temp_min ;
            forecastDayWeatherOneMax= forecast.list[2].main.temp_max ;

            forecastDayDescriptionTwo=  forecast.list[10].weather[0].description;
            forecastDayWeatherTwoMin= forecast.list[10].main.temp_min;
            forecastDayWeatherTwoMax= forecast.list[10].main.temp;

            forecastDayDescriptionThre=  forecast.list[23].weather[0].description;
            forecastDayWeatherThreMin= forecast.list[23].main.temp_min ;
            forecastDayWeatherThreMax= forecast.list[23].main.temp_max ;
        }
    return (
        <div className={styles.padre}>

    <div className={styles.container}>
        <div className={styles.dateTime}>
            <Datetime />
        </div>

        <div className={styles.header}>
            <div className={styles.firstSun}>
                <div className={styles.cityName}>
                    <h1>{city.name}</h1>
                </div>
                <div className={styles.cityHour}>
                    {
                    hora.toString().slice(10,-39)
                    }
                </div>
            </div>
           <div className={styles.secondSun}>
                <div className={styles.iconAndDescription}>
                    <div>
                     <h1><img className={styles.img} src={dat} alt="" /> </h1>
                    </div>
                    <div>
                        <h6 className={styles.descripcion}> {descripcion}</h6>
                    </div>
                </div>
                <div className={styles.temperature}>
                    <h1>+{temp.temp}º</h1>  
                </div>
                <div className={styles.adds}> 
                    <h5 className={styles.add}>Feels like: {temp.feels_like}º</h5>
                    <h6 className={styles.add}>Min: {temp.temp_min}º</h6>
                    <h6 className={styles.add}>Max: {temp.temp_max}º</h6>
                    <h6 className={styles.add}>Humidity: {temp.humidity}% </h6>
                    <div className={styles.windSpeed}>
                     <FontAwesomeIcon className={styles.icono} icon={faWind}/> 
                       <h5 className={styles.add}>Wind: { winds.speed} m/s </h5>
                    </div>
                </div>
           </div> 
        </div>     
        <div className={styles.prueba}>
            <div className={styles.colOne}>
                <h5>{forecastDate3}</h5>   
                <img src={iconUrl3} alt=""/>  
                <h5> {forecastDayDescriptionOne}</h5> <br />
                <h5>{forecastDayWeatherOneMin}Cº </h5>
                <h5>{forecastDayWeatherOneMax}Cº </h5>
            </div>
            <div className={styles.colTwo}>
                <h5>{forecastDate6}</h5>   
                <img src={iconUrl6} alt=""/>  
                <h5> {forecastDayDescriptionTwo}</h5> <br />
                <h5>{forecastDayWeatherTwoMin}Cº </h5>
                <h5>{forecastDayWeatherTwoMax}Cº </h5>
            </div>
            <div className={styles.colThre}>
                <h5>{forecastDate9}</h5>   
                <img src={iconUrl9} alt=""/>  
                <h5> {forecastDayDescriptionThre}</h5> <br />
                <h5>{forecastDayWeatherThreMin}Cº </h5>
                <h5>{forecastDayWeatherThreMax}Cº </h5>

            </div>
           
        </div>
    </div>
    </div>

    );}
  export default List;
  