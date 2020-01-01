import React from 'react'
import WeatherGraphic from '../WeatherGraphic/WeatherGraphic'
import Text from '../Text/Text'

const WeatherImgAndTemp = () => {
  return (
    <div>
      <WeatherGraphic />
      <br />
      <br />
      <Text centered isBold>
        23.3 C
      </Text>
      <Text centered>Clear</Text>
    </div>
  )
}

export default WeatherImgAndTemp
