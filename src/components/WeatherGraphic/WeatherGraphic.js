import React from 'react'
import PropTypes from 'prop-types'
import weatherBase from '../../images/mainIllustration/main.png'
import Clouds from './Clouds/Clouds'
import MoonOrSun from './MoonOrSun/MoonOrSun'

const WeatherGraphic = ({ moonOrSun, cloudCover }) => {
  return (
    <div>
      <MoonOrSun moonOrSun={moonOrSun} />
      <Clouds amount={cloudCover} />
      <img src={weatherBase} alt="beach illustration" />
    </div>
  )
}

WeatherGraphic.propTypes = {
  moonOrSun: PropTypes.string.isRequired,
  cloudCover: PropTypes.number.isRequired,
}

export default WeatherGraphic
