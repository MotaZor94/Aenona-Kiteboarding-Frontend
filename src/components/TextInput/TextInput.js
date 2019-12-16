import React from "react"
import PropTypes from "prop-types"
import StyledInput from "./StyledInput"

const TextInput = ({ type, onChange, name, value, placeholder }) => {
  return (
    <div>
      <StyledInput
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default TextInput
