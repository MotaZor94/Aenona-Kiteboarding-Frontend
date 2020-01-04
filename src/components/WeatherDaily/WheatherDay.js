import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Text/Text'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import StyledWeatherDayWrap from './StyledWeatherDayWrap'

const WheatherDay = ({ day, temperature, windSpeed }) => {
  return (
    <StyledWeatherDayWrap>
      <div style={{ flexGrow: '1' }}>
        <Text as="weatherData">{day}</Text>
      </div>
      <div>
        <WeatherIcon />
        <Text as="weatherData">{`${temperature} C`}</Text>
        <WeatherIcon />
        <Text as="weatherData">{`${windSpeed} kn`}</Text>
      </div>
    </StyledWeatherDayWrap>
  )
}

WheatherDay.propTypes = {
  day: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
}

export default WheatherDay
