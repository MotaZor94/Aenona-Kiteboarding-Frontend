import React from 'react'
import PropTypes from 'prop-types'
import WeatherDay from './WheatherDay'
import Card from '../Card/Card'

const WeatherDaily = props => {
  return (
    <Card flexDirection="column" padding="15px">
      <WeatherDay />
      <WeatherDay />
      <WeatherDay />
      <WeatherDay />
      <WeatherDay />
      <WeatherDay />
    </Card>
  )
}

WeatherDaily.propTypes = {}

export default WeatherDaily
