import React from 'react'
import weatherBase from '../../images/mainIllustration/main.png'

const WeatherImgAndTemp = () => {
  return (
    <div>
      <img
        style={{ width: '100%', height: '100%' }}
        src={weatherBase}
        alt="weather illustration"
      />
      <br />
      17.7C
    </div>
  )
}

export default WeatherImgAndTemp
