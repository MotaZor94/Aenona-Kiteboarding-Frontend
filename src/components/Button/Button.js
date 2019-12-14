import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import StyledButton from './StyledButton'

const Button = ({
 color, label, onClick, id 
}) => {
  return (
    <Card>
      <StyledButton onClick={() => onClick(id)} color={color}>
        {`${label}`}
      </StyledButton>
    </Card>
  )
}

Button.propTypes = {
  color:   PropTypes.string,
  label:   PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id:      PropTypes.string.isRequired
}

export default Button
