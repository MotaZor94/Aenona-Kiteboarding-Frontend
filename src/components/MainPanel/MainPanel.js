import React from 'react'
import PropTypes from 'prop-types'
import StyledMainPanel from './StyledMainPanel'

const MainPanel = ({ children }) => {
  // return <div>{children}</div>
  return (
    <StyledMainPanel>
      <br />
      <div>your name</div>
      <br />
      <br />
      <div>your surename</div>
      <br />
      <br />
      <div>your email</div>
      <br />
      <br />
      <div>send booking request</div>
      <br />
      <br />
      <div>weather report</div>
      <br />
    </StyledMainPanel>
  )
}

MainPanel.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainPanel
