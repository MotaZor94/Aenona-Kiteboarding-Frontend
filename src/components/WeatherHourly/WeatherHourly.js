import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Text/Text'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import Card from '../Card/Card'

const WeatherHourly = ({ data }) => {
  return (
    <Card flexDirection="row" scroll="x">
      {data.map((item, index) => (
        <div
          key={`hour-weather-${index}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '5px 15px',
          }}
        >
          <Text isBold as="weather-data">
            {item.time}
          </Text>
          <WeatherIcon type="clearNight" />
          <Text isBold as="weather-data">
            {`${item.temperature} C`}
          </Text>
          <Text as="weather-data">{`${item.windSpeed} kn`}</Text>
        </div>
      ))}
    </Card>
  )
}

WeatherHourly.propTypes = {}

export default WeatherHourly
