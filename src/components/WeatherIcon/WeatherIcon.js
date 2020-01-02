import React from 'react'
import PropTypes from 'prop-types'
import windIcon from '../../images/icons/wind.png'
import nightIcon from '../../images/icons/night.png'
import Image from '../Image/Image'

const WeatherIcon = ({ type }) => {
  let icon
  switch (type) {
    case 'clearNight':
      icon = nightIcon
      break

    default:
      icon = windIcon
      break
  }
  console.log(icon)
  return <Image src={icon} width="28px" />
}

WeatherIcon.propTypes = {
  type: PropTypes.string,
}

export default WeatherIcon
