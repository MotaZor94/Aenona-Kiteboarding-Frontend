import React from 'react'
import PropTypes from 'prop-types'
import WeatherHourly from '../WeatherHourly/WeatherHourly'
import WeatherDaily from '../WeatherDaily/WeatherDaily'
import Text from '../Text/Text'

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
    <div style={{ padding: '5px' }}>
      <Text isBold>Get to know your holidays in advance</Text>
      <br />
      <Text>Today hourly</Text>
      <WeatherHourly data={dummyData} />
      <br />
      <Text>This week</Text>
      <WeatherDaily />
    </div>
  )
}

WeatherLeftSection.propTypes = {}

export default WeatherLeftSection
