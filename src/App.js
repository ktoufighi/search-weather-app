import './App.css'
import { useState } from 'react'
import Search from '../src/components/search/search'
import { WeatherWidget } from './components/weather/weather'
import { WEATHER_API_KEY, WEATHER_API_URL } from './api'

function App() {
  const [weather, setWeather] = useState(null)

  const handleSearchChange = async (searchData) => {
    console.log(searchData)
    const [lat, lon] = searchData.value.slice(' ')

    // https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=1473729d64f5a843eedc1cf032f332ff&units=metric

    return fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((response) => {
        const weatherResponse = response
        setWeather({ city: searchData.label, ...weatherResponse })
      })

    // const response = await fetch(
    //   `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    // ).then((res) => res.json())

    // setWeather({ city: searchData.label, ...response })
  }

  return (
    <div className='container'>
      <Search onSearchChange={handleSearchChange} />
      {weather && <WeatherWidget data={weather} />}
    </div>
  )
}

export default App
