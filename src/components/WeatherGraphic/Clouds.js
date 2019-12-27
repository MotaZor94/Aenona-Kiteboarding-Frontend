import React from 'react'
import PropTypes from 'prop-types'
import cloud from '../../images/mainIllustration/cloud.png'

const Clouds = ({ amount }) => {
  if (!amount || amount === 0) {
    return null
  }

  const clouds = []
  for (let i = 0; i < amount; i++) {
    clouds.push(
      <img
        src={cloud}
        alt="cloud"
        className={`cloud${i}`}
        style={{ posiiton: 'absolute', top: '7em' }}
      />
    )
  }
  return clouds
}

Clouds.propTypes = {
  amount: PropTypes.number,
}

export default Clouds
