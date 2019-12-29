import React from 'react'
import PropTypes from 'prop-types'
import weatherBase from '../../images/mainIllustration/main.png'
import Clouds from './Clouds/Clouds'
import MoonOrSun from './MoonOrSun/MoonOrSun'

const WeatherGraphic = props => {
  return (
    <>
      <MoonOrSun sun />
      <Clouds amount={4} />
      <img src={weatherBase} alt="beach illustration" />
    </>
  )
}

WeatherGraphic.propTypes = {}

export default WeatherGraphic
