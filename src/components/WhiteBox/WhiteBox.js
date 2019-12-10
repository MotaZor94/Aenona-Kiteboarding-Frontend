import React from "react"
import { Styled } from "./StyledNav"
import Image from "../Image/Image"
import Logo from "../../static/logo_vert_w.png"

const WhiteBox = () => {
  return (
    <Styled.WhiteBox>
      <Image src={Logo} />
    </Styled.WhiteBox>
  )
}

export default WhiteBox
