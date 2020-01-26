import React from 'react'
import StyledWhiteBox from './StyledNav'

const WhiteBox = ({ top, children, padded }) => {
  return (
    <StyledWhiteBox padded={padded} top={top}>
      {children}
    </StyledWhiteBox>
  )
}

export default WhiteBox
