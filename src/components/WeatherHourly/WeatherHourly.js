import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Text/Text'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import Card from '../Card/Card'

const WeatherHourly = ({ data }) => {
  return (
    <Card flexDirection="row" margin="5px" scroll="x">
      {data.map(item => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '5px 15px',
          }}
        >
          <Text isBold as="weatherData">
            {item.time}
          </Text>
          <WeatherIcon type="clearNight" />
          <Text isBold as="weatherData">
            {`${item.temp} C`}
          </Text>
          <Text as="weatherData">{`${item.windSpeed} kn`}</Text>
        </div>
      ))}
    </Card>
  )
}

WeatherHourly.propTypes = {}

export default WeatherHourly
