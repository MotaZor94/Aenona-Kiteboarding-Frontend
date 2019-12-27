import React from 'react'
import PropTypes from 'prop-types'
import StyledMainPanel from './StyledMainPanel'

const MainPanel = ({ children }) => (
  <StyledMainPanel>{children}</StyledMainPanel>
)

MainPanel.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainPanel
