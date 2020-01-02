import React from 'react'
import PropTypes from 'prop-types'
import StyledCard from './StyledCard'

const Card = ({ children, flexDirection, margin, scroll, padding }) => {
  return (
    <StyledCard
      flexDirection={flexDirection}
      margin={margin}
      scroll={scroll}
      padding={padding}
    >
      {children}
    </StyledCard>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  flexDirection: PropTypes.string,
  margin: PropTypes.string,
  scroll: PropTypes.string,
  padding: PropTypes.string,
}

export default Card
