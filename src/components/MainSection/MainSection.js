import React from 'react'
import PropTypes from 'prop-types'
import StyledMainSection from './StyledMainSection'

const MainSection = ({ children, backgroundImg, weather }) => {
  return (
    <StyledMainSection backgroundImg={backgroundImg} weather={weather}>
      {children}
    </StyledMainSection>
  )
}

MainSection.propTypes = {
  children:      PropTypes.node.isRequired,
  backgroundImg: PropTypes.node,
  weather:       PropTypes.bool
}

export default MainSection
