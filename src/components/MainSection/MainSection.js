import React from 'react'
import PropTypes from 'prop-types'
import StyledMainSection from './StyledMainSection'

const MainSection = ({ children }) => (
  <StyledMainSection>{children}</StyledMainSection>
)

MainSection.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainSection
