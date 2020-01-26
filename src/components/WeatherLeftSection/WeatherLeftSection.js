import React from 'react'
import PropTypes from 'prop-types'
import WeatherHourly from '../WeatherHourly/WeatherHourly'
import WeatherDaily from '../WeatherDaily/WeatherDaily'
import Text from '../Text/Text'

const WeatherLeftSection = ({ daily, hourly }) => {
  return (
    <div style={{ padding: '5px' }}>
      <Text isBold>Get to know your holidays in advance</Text>
      <br />
      <br />
      <Text>Today hourly</Text>
      <WeatherHourly data={hourly} />
      <br />
      <br />
      <Text>This week</Text>
      <WeatherDaily data={daily} />
    </div>
  )
}

WeatherLeftSection.propTypes = {
  daily: PropTypes.array.isRequired,
  hourly: PropTypes.array.isRequired,
}

export default WeatherLeftSection
