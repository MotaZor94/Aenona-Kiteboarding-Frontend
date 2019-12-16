import React from 'react'
import MainSection from '../MainSection/MainSection'
import MainImgWrap from '../MainImgWrap/MainImgWrap'
import MainPanel from '../MainPanel/MainPanel'
import WeatherImgAndTemp from '../WeatherImgAndTemp/WeatherImgAndTemp'
import BookingForm from '../BookingForm/BookingForm'

const WeatherMainSection = () => {
  return (
    <MainSection weather>
      <MainImgWrap weather>
        <WeatherImgAndTemp />
      </MainImgWrap>
      <MainPanel>
        <BookingForm />
      </MainPanel>
    </MainSection>
  )
}

export default WeatherMainSection
