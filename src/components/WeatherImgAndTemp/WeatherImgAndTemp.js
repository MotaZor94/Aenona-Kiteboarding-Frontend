import React from 'react'
import PropTypes from 'prop-types'
import weatherImg from '../../images/weather.png'

const WeatherImgAndTemp = props => {
  return (
    <div style={{ height: '100px' }}>
      <img src={weatherImg} alt="weather graphic" />
      <br />
      17.7C
    </div>
  )
}

WeatherImgAndTemp.propTypes = {}

export default WeatherImgAndTemp
