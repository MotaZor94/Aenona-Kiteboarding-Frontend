import React from 'react'
import PropTypes from 'prop-types'
import WeatherDay from './WheatherDay'
import Card from '../Card/Card'

const WeatherDaily = ({ data }) => {
  return (
    <Card flexDirection="column" padding="15px">
      {data.map(x => (
        <WeatherDay
          day={x.day}
          temperature={x.temperature}
          windSpeed={x.windSpeed}
        />
      ))}
    </Card>
  )
}

WeatherDaily.propTypes = {
  data: PropTypes.array.isRequired,
}

export default WeatherDaily
