import React from 'react'
import PropTypes from 'prop-types'
import WeatherHourly from '../WeatherHourly/WeatherHourly'
import WeatherDaily from '../WeatherDaily/WeatherDaily'

const dummyData = [
  {
    time: 22,
    temp: 23.1,
    windSpeed: 8.2,
  },
  {
    time: 22,
    temp: 23.1,
    windSpeed: 8.2,
  },
  {
    time: 22,
    temp: 23.1,
    windSpeed: 8.2,
  },
  {
    time: 22,
    temp: 23.1,
    windSpeed: 8.2,
  },
  {
    time: 22,
    temp: 23.1,
    windSpeed: 8.2,
  },
  {
    time: 22,
    temp: 23.1,
    windSpeed: 8.2,
  },
]

const WeatherLeftSection = props => {
  return (
    <div>
      <WeatherHourly data={dummyData} />
      <WeatherDaily />
    </div>
  )
}

WeatherLeftSection.propTypes = {}

export default WeatherLeftSection
