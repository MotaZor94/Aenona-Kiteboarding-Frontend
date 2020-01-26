import React from 'react'
import PropTypes from 'prop-types'
import WeatherGraphic from '../WeatherGraphic/WeatherGraphic'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import Text from '../Text/Text'
import Card from '../Card/Card'
import Button from '../Button/Button'

const WeatherImgAndTemp = ({ current }) => {
  const iconSize = 'l'
  const flexStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <div>
      <WeatherGraphic moonOrSun="moon" cloudCover={current.cloudCover} />
      <br />
      <Text centered>{current.summary}</Text>
      <br />
      <Card flexDirection="column" justify="space-evenly" padding="15px">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '70%',
            margin: 'auto',
          }}
        >
          <div style={flexStyle}>
            <WeatherIcon type="temperature" size={iconSize} />
            <Text centered isBold>
              {`${current.temperature} C`}
            </Text>
          </div>
          <div style={flexStyle}>
            <WeatherIcon size={iconSize} />
            <Text centered isBold>
              {`${current.windSpeed} kn`}
            </Text>
          </div>
        </div>

        <div style={{ width: '70%', margin: 'auto' }}>
          <Text centered as="p">
            Join us for a lesson!
          </Text>
          <Button
            id="book-now-btn"
            label="BOOK NOW"
            onClick={() => console.log('Go to booking section')}
          />
        </div>
      </Card>
      <br />
    </div>
  )
}

WeatherImgAndTemp.propTypes = {
  current: PropTypes.object.isRequired,
}

export default WeatherImgAndTemp
