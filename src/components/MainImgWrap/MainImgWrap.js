import React from 'react'
import PropTypes from 'prop-types'
import StyledMainImgWrap from './StyledMainImgWrap'

const MainImgWrap = ({ img, weather }) => {
  const content = !weather ? (
    <img style={{ width: '100%' }} src={img} alt="Nin panorama" />
  ) : (
    img
  )

  return <StyledMainImgWrap weather>{content}</StyledMainImgWrap>
}

MainImgWrap.propTypes = {
  img:     PropTypes.node,
  weather: PropTypes.bool.isRequired
}

export default MainImgWrap
