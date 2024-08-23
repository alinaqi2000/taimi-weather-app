import axios from 'axios'
import './App.css'
import InputBox from './components/InputBox'
import WeatherBox from './components/WeatherBox'
import { FETCH_WEATHER_URL } from './constants/api'
import { LocationWeather } from './models/LocationWeather'
import { useState } from 'react'

function App() {
  const [locationWeather, setLocationWeather] = useState<LocationWeather | null>(null)

  const fetchWeather = async (place: string) => {
    const response = await axios.get(FETCH_WEATHER_URL + place)
    setLocationWeather(response.data)
  }

  return (

    <div className={`h-[100vh] main ${locationWeather && locationWeather.current.is_day ? "bg-blue-200 text-blue-950" : "bg-base-200 text-slate-50"}`}>
      <InputBox fetchWeather={fetchWeather} locationWeather={locationWeather} />
      <WeatherBox locationWeather={locationWeather} />
    </div>


  )
}


export default App
