import React from "react"
import StyledWhiteBox from "./StyledNav"

const WhiteBox = ({ top, children }) => {
  return <StyledWhiteBox top={top}>{children}</StyledWhiteBox>
}

export default WhiteBox
