import React from 'react'
import MainSection from '../MainSection/MainSection'
import MainImgWrap from '../MainImgWrap/MainImgWrap'
import MainPanel from '../MainPanel/MainPanel'
import WeatherImgAndTemp from '../WeatherImgAndTemp/WeatherImgAndTemp'
import WeatherLeftSection from '../WeatherLeftSection/WeatherLeftSection'

const WeatherMainSection = () => {
  return (
    <MainSection weather>
      <MainImgWrap weather>
        <WeatherImgAndTemp />
      </MainImgWrap>
      <MainPanel>
        <WeatherLeftSection />
      </MainPanel>
    </MainSection>
  )
}

export default WeatherMainSection
