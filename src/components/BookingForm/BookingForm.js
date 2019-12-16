import React from 'react'
import PropTypes from 'prop-types'
import TextInput from '../TextInput/TextInput'
import formConfig from './formConfig.json'

const BookingForm = ({ onChange }) => {
  return (
    <div>
      <br />
      <TextInput
        type="email"
        onChange={({ target }) => console.log(target.value)}
      />
      <br />
      <TextInput
        type="email"
        onChange={({ target }) => console.log(target.value)}
      />
      <br />
      <TextInput
        type="email"
        onChange={({ target }) => console.log(target.value)}
      />
      <br />
      <TextInput
        type="email"
        onChange={({ target }) => console.log(target.value)}
      />
      <br />
    </div>
  )
}

BookingForm.propTypes = {}

export default BookingForm
