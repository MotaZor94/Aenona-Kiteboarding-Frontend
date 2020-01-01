import React from 'react'
import PropTypes from 'prop-types'
import WeatherHourly from '../WeatherHourly/WeatherHourly'
import WeatherDaily from '../WeatherDaily/WeatherDaily'

const WeatherLeftSection = props => {
  return (
    <div>
      <WeatherHourly />
      <WeatherDaily />
    </div>
  )
}

WeatherLeftSection.propTypes = {}

export default WeatherLeftSection
