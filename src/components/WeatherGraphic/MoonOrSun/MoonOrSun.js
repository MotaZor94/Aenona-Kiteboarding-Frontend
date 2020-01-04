import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Sun from '../../../images/mainIllustration/sun.png'
import Moon from '../../../images/mainIllustration/moon.png'

const StyledMoonOrSun = styled.img`
  position: absolute;
  width: 50px;
  top: 0;
  left: 0;
`

const MoonOrSun = ({ moonOrSun }) => {
  if (moonOrSun !== 'moon' && moonOrSun !== 'sun') {
    return null
  }

  const img = moonOrSun === 'moon' ? Moon : Sun
  const altText =
    moonOrSun === 'moon' ? 'Moon illustration' : 'Sun illustration'

  return <StyledMoonOrSun src={img} alt={altText} />
}

MoonOrSun.protoTypes = {
  moonOrSun: PropTypes.string,
}

export default MoonOrSun
