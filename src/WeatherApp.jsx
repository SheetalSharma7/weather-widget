import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:24.92,
        humidity: 50,
        temp: 25.05,
        tempMax: 25.05,
        tempMin: 25.05,
        weather: "haze",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
    <div><h3>Weather Widget</h3>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
    </div>
    );
}
