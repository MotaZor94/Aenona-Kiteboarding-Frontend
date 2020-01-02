import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Text/Text'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import StyledWeatherDayWrap from './StyledWeatherDayWrap'

const WheatherDay = props => {
  return (
    <StyledWeatherDayWrap>
      <div style={{ flexGrow: '1' }}>
        <Text as="weatherData">Monday</Text>
      </div>
      <div>
        <WeatherIcon />
        <Text as="weatherData">22 C</Text>
        <WeatherIcon />
        <Text as="weatherData">8.1</Text>
      </div>
    </StyledWeatherDayWrap>
  )
}

WheatherDay.propTypes = {}

export default WheatherDay
