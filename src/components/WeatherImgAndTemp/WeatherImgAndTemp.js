import React from 'react'
import weatherImg from '../../images/weather.png'

const WeatherImgAndTemp = () => {
  return (
    <div style={{ height: '100px' }}>
      <img src={weatherImg} alt="weather graphic" />
      <br />
      17.7C
    </div>
  )
}

export default WeatherImgAndTemp
