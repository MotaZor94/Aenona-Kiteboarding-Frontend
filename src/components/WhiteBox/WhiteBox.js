import React from "react"
import StyledWhiteBox from "./StyledNav"
import Image from "../Image/Image"
import Logo from "../../static/logo_vert_w.png"

const WhiteBox = ({ top }) => {
  return (
    <StyledWhiteBox top={top}>
      <Image src={Logo} width={"120px"} />
    </StyledWhiteBox>
  )
}

export default WhiteBox
