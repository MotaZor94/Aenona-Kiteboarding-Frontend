import React from 'react'
import StyledWhiteBox from './StyledNav'
import Image from '../Image/Image'
import Logo from '../../static/logo_vert_w.png'

const WhiteBox = () => {
  return (
    <StyledWhiteBox>
      <Image src={Logo} />
    </StyledWhiteBox>
  )
}

export default WhiteBox
