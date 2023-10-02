import './weather.css'

export const WeatherWidget = ({ data }) => {
  const { city } = data
  const { speed } = data.wind
  const { description, icon } = data.weather[0]
  const { temp, feels_like, humidity, pressure } = data.main

  return (
    <div className='weather-widget-wrapper'>
      <div className='top-half'>
        <div>
          <p className='city'>{city}</p>
          <p className='description'>{description}</p>
        </div>
        <img src={`icons/${icon}.png`} alt='icon' className='icon' />
      </div>
      <div className='bottom-half'>
        <p className='temperature'>{Math.round(temp)}ºC</p>
        <div className='details'>
          {/* weather parameters */}
          <div className='parameter-row'>
            <span className='parameter-label underline'>Details</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Feels like:</span>
            <span className='parameter-value'>{Math.round(feels_like)}ºC</span>
          </div>

          <div className='parameter-row'>
            <span className='parameter-label'>Wind:</span>
            <span className='parameter-value'>{speed} m/s</span>
          </div>

          <div className='parameter-row'>
            <span className='parameter-label'>Humidity:</span>
            <span className='parameter-value'>{humidity}%</span>
          </div>

          <div className='parameter-row'>
            <span className='parameter-label'>Pressure:</span>
            <span className='parameter-value'>{pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  )
}
