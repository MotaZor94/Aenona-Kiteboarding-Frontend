import React from 'react'
import PropTypes from 'prop-types'
import WeatherGraphic from '../WeatherGraphic/WeatherGraphic'
import Text from '../Text/Text'

const WeatherImgAndTemp = ({ current }) => {
  return (
    <div>
      <WeatherGraphic moonOrSun="moon" cloudCover={current.cloudCover} />
      <br />
      <br />
      <Text centered isBold>
        {`${current.temperature} C`}
      </Text>
      <Text centered>{current.summary}</Text>
      <br />
    </div>
  )
}

WeatherImgAndTemp.propTypes = {
  current: PropTypes.object.isRequired,
}

export default WeatherImgAndTemp
