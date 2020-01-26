import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import cloud from '../../../images/mainIllustration/cloud.png'

const cloudFloating = (index = 0) => {
  const coef = 70
  return keyframes`
0% {
  top: ${coef}px;
  left: ${index * coef}px;
}

100% {
  left: ${index * coef + 80}px;
  top: 0;
}
`
}

const CloudWrap = styled.img`
  position: absolute;
  width: 80px;
  animation: ${({ index }) => cloudFloating(index)} 2s linear infinite;
  animation-delay: ${({ index }) => index}s;
  animation-direction: alternate;
`

const Cloud = ({ index }) => <CloudWrap src={cloud} index={index} alt="cloud" />

Cloud.propTypes = {
  index: PropTypes.number,
}

export default Cloud
