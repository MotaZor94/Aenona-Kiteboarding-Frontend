import React from "react"
import PropTypes from "prop-types"
import StyledMainImgWrap from "./StyledMainImgWrap"

const MainImgWrap = ({ children, weather, isRelative = false }) => (
  <StyledMainImgWrap isRelative={isRelative} weather={weather}>
    {children}
  </StyledMainImgWrap>
)

MainImgWrap.propTypes = {
  children: PropTypes.node,
  weather: PropTypes.bool,
}

export default MainImgWrap
