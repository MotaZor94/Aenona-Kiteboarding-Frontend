import React from 'react'
import PropTypes from 'prop-types'
import WeatherGraphic from '../WeatherGraphic/WeatherGraphic'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import Text from '../Text/Text'
import Card from '../Card/Card'

const WeatherImgAndTemp = ({ current }) => {
  return (
    <div>
      <WeatherGraphic moonOrSun="moon" cloudCover={current.cloudCover} />
      <br />
      <br />
      <Card>
        <Text centered isBold>
          {`${current.temperature} C`}
        </Text>
        <Text centered>{current.summary}</Text>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <WeatherIcon />
          <Text centered isBold>
            {`${current.windSpeed} kn`}
          </Text>
        </div>
      </Card>
      <br />
    </div>
  )
}

WeatherImgAndTemp.propTypes = {
  current: PropTypes.object.isRequired,
}

export default WeatherImgAndTemp
