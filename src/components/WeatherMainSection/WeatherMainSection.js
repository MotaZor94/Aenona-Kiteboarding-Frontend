import React from 'react'
import MainSection from '../MainSection/MainSection'
import MainImgWrap from '../MainImgWrap/MainImgWrap'
import MainPanel from '../MainPanel/MainPanel'
import WeatherImgAndTemp from '../WeatherImgAndTemp/WeatherImgAndTemp'
import WeatherLeftSection from '../WeatherLeftSection/WeatherLeftSection'
import getWeather from '../../fetch/weatherFetch'

class WeatherMainSection extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      weather: null,
    }
  }

  async componentDidMount() {
    try {
      this.setState({ weather: await getWeather() })
    } catch (error) {
      console.log(error) // snackbar to be added
    }
  }

  render() {
    const { weather } = this.state
    if (!weather) {
      return null
    }

    return (
      <MainSection weather>
        <MainImgWrap weather>
          <WeatherImgAndTemp current={weather.current} />
        </MainImgWrap>
        <MainPanel>
          <WeatherLeftSection daily={weather.daily} hourly={weather.hourly} />
        </MainPanel>
      </MainSection>
    )
  }
}

export default WeatherMainSection
