import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Weather from './Weather';
function App() {
  //
  
  //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const [city , setCity] = useState <string>('')
const [error, setError] = useState <null | string>(null)
const [weather, setWeather] = useState<{ temp: number, description: string } | null>(null);
console.log(weather)
const fetchWeather = () =>{
  const apiKey: string = 'b5ea08d348cecdf80cbd2068f86f3a44'
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(json => {
   if (json.cod === "404") {  
   setError('City not found'); // Устанавливаем ошибку, если город не найден   
     } 
    else {  
    setWeather({
      temp: json.main.temp,
      description: json.weather[0].description
    }); 
    setError(null); // Сбрасываем ошибку, если запрос успешен           
 }     
   }).catch(error => {
        console.error('Ошибка:', error);  
        setError('An error occurred'); // Общая ошибка на случай других проблем      
    });
  }
  
 
  return (
    <div className="App">
      <h1>Wheather app</h1>
      <input type="text" onChange={(e)=>{setCity(e.currentTarget.value)}} />
      <button onClick={fetchWeather}>Click me</button>
      {weather && <Weather temp={weather.temp} description={weather.description} />}
      {error && <p style={{ color: 'red' }}>{error}</p>} 
    </div>
  );
}

export default App;
