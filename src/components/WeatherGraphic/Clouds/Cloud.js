import styled, { keyframes } from 'styled-components'
import cloud from '../../../images/mainIllustration/cloud.png'

const cloudFloating = keyframes`
50% {
}

100% {
  left: 11.5em;
}
`

export default styled.img`
  src: ../../../images/mainIllustration/cloud.png;
  position: absolute;
  top: 80px;
  width: 80px;
  animation: ${cloudFloating} 2s linear infinite;
`
