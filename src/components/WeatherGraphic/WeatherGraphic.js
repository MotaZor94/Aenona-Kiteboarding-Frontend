import React from 'react'
import PropTypes from 'prop-types'
import weatherBase from '../../images/mainIllustration/main.png'
import Clouds from './Clouds/Clouds'

const WeatherGraphic = props => {
  return (
    <>
      <Clouds amount={2} />
      <img src={weatherBase} alt="beach illustration" />
    </>
  )
}

WeatherGraphic.propTypes = {}

export default WeatherGraphic
