import React from 'react'
import MainSection from '../MainSection/MainSection'
import MainImgWrap from '../MainImgWrap/MainImgWrap'
import MainPanel from '../MainPanel/MainPanel'
import WeatherImgAndTemp from '../WeatherImgAndTemp/WeatherImgAndTemp'

// TODO: Not displaying mainImgWrap properly

const WeatherMainSection = () => {
  return (
    <MainSection weather>
      <MainImgWrap img={WeatherImgAndTemp} weather />
      <MainPanel />
    </MainSection>
  )
}

export default WeatherMainSection
