import React from 'react'
import PropTypes from 'prop-types'
import WeatherDay from './WheatherDay'

const WeatherDaily = props => {
  return (
    <div>
      <WeatherDay />
      <WeatherDay />
      <WeatherDay />
      <WeatherDay />
      <WeatherDay />
      <WeatherDay />
    </div>
  )
}

WeatherDaily.propTypes = {}

export default WeatherDaily
