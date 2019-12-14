import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import StyledButton from './StyledButton'

const Button = ({ color, label, onClick }) => {
  return (
    <Card>
      <StyledButton onClick={onClick} color={color}>{`${label}`}</StyledButton>
    </Card>
  )
}

Button.propTypes = {
  color:   PropTypes.string,
  label:   PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
