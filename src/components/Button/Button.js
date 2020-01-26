import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './StyledButton'

const Button = ({ color, label, onClick, id, iswhite }) => {
  return (
    <StyledButton iswhite={iswhite} onClick={() => onClick(id)} color={color}>
      {`${label}`}
    </StyledButton>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  iswhite: PropTypes.bool,
}

export default Button
