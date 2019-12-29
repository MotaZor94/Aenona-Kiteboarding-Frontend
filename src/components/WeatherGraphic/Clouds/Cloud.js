import React from 'react'
import styled, { keyframes } from 'styled-components'
import cloud from '../../../images/mainIllustration/cloud.png'

const cloudFloating = keyframes`
0% {
  left: 0;
  top: 80px;
}

100% {
  left: 11.5em;
  top: 0;
}
`

const CloudWrap = styled.img`
  position: absolute;
  top: 80px;
  width: 80px;
  animation: ${cloudFloating} 5s linear infinite;
`

export default () => <CloudWrap src={cloud} alt="cloud" />
