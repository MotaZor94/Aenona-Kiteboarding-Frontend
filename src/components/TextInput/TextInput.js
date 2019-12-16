import React from 'react'
import PropTypes from 'prop-types'
import StyledInput from './StyledInput'

const TextInput = ({
 type, onChange, name, value 
}) => {
  return (
    <div>
      <StyledInput type={type} name={name} onChange={onChange} value={value} />
    </div>
  )
}

TextInput.propTypes = {
  type:     PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name:     PropTypes.string.isRequired,
  value:    PropTypes.string.isRequired
}

export default TextInput
