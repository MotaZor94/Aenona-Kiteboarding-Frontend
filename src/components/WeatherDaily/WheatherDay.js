import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Text/Text'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import StyledWeatherDayWrap from './StyledWeatherDayWrap'

const WheatherDay = ({ day, temperature, windSpeed }) => {
  const dataStyle = {
    minWidth: '83px',
    display: 'flex',
    justifyContent: 'space-between',
  }
  const dataWrapStyle = {
    display: 'flex',
  }

  return (
    <StyledWeatherDayWrap>
      <div style={{ flexGrow: '1' }}>
        <Text as="weatherData">{day}</Text>
      </div>
      <div style={dataWrapStyle}>
        <div style={dataStyle}>
          <WeatherIcon />
          <Text as="weatherData">{`${temperature} C`}</Text>
        </div>
        <div style={dataStyle}>
          <WeatherIcon />
          <Text as="weatherData">{`${windSpeed} kn`}</Text>
        </div>
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
