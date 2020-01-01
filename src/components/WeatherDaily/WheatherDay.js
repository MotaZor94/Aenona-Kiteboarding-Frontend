import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Text/Text'
import WeatherIcon from '../WeatherIcon/WeatherIcon'

const WheatherDay = props => {
  return (
    <div>
      <Text as="weatherData">Monday</Text>
      <div>
        <WeatherIcon />
        <Text as="weatherData">22 C</Text>
        <WeatherIcon />
        <Text as="weatherData">8.1</Text>
      </div>
    </div>
  )
}

WheatherDay.propTypes = {}

export default WheatherDay
