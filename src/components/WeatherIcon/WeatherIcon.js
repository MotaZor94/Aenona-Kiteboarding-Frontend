import React from 'react'
import PropTypes from 'prop-types'
import windIcon from '../../images/icons/wind.png'
import nightIcon from '../../images/icons/night.png'
import temperatureIcon from '../../images/icons/temperature.png'
import Image from '../Image/Image'

const WeatherIcon = ({ size, type }) => {
  let icon
  let width
  switch (type) {
    case 'clearNight':
      icon = nightIcon
      break

    case 'temperature':
      icon = temperatureIcon
      break

    default:
      icon = windIcon
      break
  }

  switch (size) {
    case 'l':
      width = '48px'
      break

    case 'm':
      width = '38px'
      break

    default:
      width = '28px'
  }

  return <Image src={icon} width={width} />
}

WeatherIcon.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
}

export default WeatherIcon
