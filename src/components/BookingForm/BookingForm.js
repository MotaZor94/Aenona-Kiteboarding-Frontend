import React from "react"
import PropTypes from "prop-types"
import TextInput from "../TextInput/TextInput"
import formConfig from "./formConfig.json"
import StyledFormWrapper from "./StyledFormWrapper"

const BookingForm = ({ onChange }) => {
  return (
    <StyledFormWrapper>
      <br />
      First Name
      <TextInput
        type="text"
        placeholder="John"
        onChange={({ target }) => console.log(target.value)}
      />
      <br />
      Last Name
      <TextInput
        type="text"
        placeholder="Smith"
        onChange={({ target }) => console.log(target.value)}
      />
      <br />
      Email
      <TextInput
        type="email"
        placeholder="Johnsmith@example.com"
        onChange={({ target }) => console.log(target.value)}
      />
      <br />
      Your message
      <TextInput
        type="text"
        onChange={({ target }) => console.log(target.value)}
      />
      <br />
    </StyledFormWrapper>
  )
}

BookingForm.propTypes = {}

export default BookingForm
