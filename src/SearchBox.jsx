
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let[city,setCity] =useState("");
    let[error,setError]=useState(false);
 const API_URL="https://api.openweathermap.org/data/2.5/weather";
 const API_KEY="b6e827d83c48471d715cfb98b1b313d1";
 let getWeatherinfo= async()=>{
  try{
    let response=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  let jsonResponse=await response.json(); 
    console.log(jsonResponse);
    let result={
        city:city,
       temp:jsonResponse.main.temp,
       tempMin:jsonResponse.main.temp_min,
       tempMax:jsonResponse.main.temp_max,
       humidity:jsonResponse.main.humidity,
       feelsLike:jsonResponse.main.feels_like,
       weather:jsonResponse.weather[0].description,
    } 
    console.log(result);
    return result;
  } catch(err){
    throw err;
  }
    
}

let handleChange= (event)=>{
    setCity(event.target.value);
}
 let handleSubmit= async(evt)=>{
   try{
    evt.preventDefault();
   console.log(city);
   setCity("");
   let newInfo= await getWeatherinfo();
    updateInfo(newInfo);
   }catch(err){
    setError(true);
   }
   // return(...city(),[event.target.name]=event.target.value);
 }

    return(
        <div>
        {/* <h3>Serach for the weather</h3> */}
        <form onSubmit={handleSubmit} >
        <TextField id="city" label="City Name" variant="outlined"  
        required value={city} onChange={handleChange}/> &nbsp;
        <br /> <br />
        <Button variant="contained" type="submit">
        Search
      </Button>
      {error && <p style={{color:"red"}}><b>No such place exists!</b></p> }
        </form> <br />
       
        </div>
    );
}