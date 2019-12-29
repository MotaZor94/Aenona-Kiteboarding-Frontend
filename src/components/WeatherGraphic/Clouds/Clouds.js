import React from 'react'
import PropTypes from 'prop-types'
import Cloud from './Cloud'

const Clouds = ({ amount }) => {
  if (!amount) {
    return null
  }

  const clouds = []
  for (let i = 0; i <= amount; i++) {
    clouds.push(<Cloud index={i} />)
  }
  return clouds
}

Clouds.propTypes = {
  amount: PropTypes.number,
}

export default Clouds
