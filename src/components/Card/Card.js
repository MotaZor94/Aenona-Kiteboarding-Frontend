import React from 'react'
import PropTypes from 'prop-types'
import StyledCard from './StyledCard'

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>
}

Card.propTypes = {
  children: PropTypes.node
}

export default Card
