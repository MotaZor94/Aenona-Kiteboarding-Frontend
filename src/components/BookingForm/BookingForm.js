import React from "react"
import PropTypes from "prop-types"
import TextInput from "../TextInput/TextInput"
import formConfig from "./formConfig.json"
import StyledFormWrapper from "./StyledFormWrapper"
import Button from "../Button/Button"
import Text from "../Text/Text"

const BookingForm = ({ onChange }) => {
  const isDesktop = window.innerWidth > 800
  return (
    <StyledFormWrapper>
      {isDesktop ? (
        <Text as="h1" Blue>
          Discover the Croatia’s top kiteboarding location
        </Text>
      ) : null}
      <br />
      <Text as="p" blue isBold>
        FIRST NAME
      </Text>
      <TextInput
        type="text"
        placeholder="John"
        onChange={({ target }) => console.log(target.value)}
      />
      <br />
      <Text as="p" blue isBold>
        LAST NAME
      </Text>
      <TextInput
        type="text"
        placeholder="Smith"
        onChange={({ target }) => console.log(target.value)}
      />
      <br />
      <Text as="p" blue isBold>
        EMAIL
      </Text>
      <TextInput
        type="email"
        placeholder="Johnsmith@example.com"
        onChange={({ target }) => console.log(target.value)}
      />
      <br />
      <Text as="p" blue isBold>
        MESSAGE
      </Text>
      <TextInput
        type="text"
        onChange={({ target }) => console.log(target.value)}
      />
      <br />
      <Button label="BOOK NOW" />
      <br />
      <br />
      <Button iswhite label="WEATHER REPORT" />
    </StyledFormWrapper>
  )
}

BookingForm.propTypes = {}

export default BookingForm
