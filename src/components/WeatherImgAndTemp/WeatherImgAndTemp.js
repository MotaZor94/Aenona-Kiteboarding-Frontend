import React from 'react'
import weatherImg from '../../images/weather.png'

const WeatherImgAndTemp = () => {
  return (
    <div>
      <img
        style={{ width: '100%', height: '100%' }}
        src={weatherImg}
        alt="weather illustration"
      />
      <br />
      17.7C
    </div>
  )
}

export default WeatherImgAndTemp
