import React from 'react'
import MainSection from '../MainSection/MainSection'
import MainImgWrap from '../MainImgWrap/MainImgWrap'
import MainPanel from '../MainPanel/MainPanel'
import img from '../../images/NinMain.png'

const HomeMainSection = () => (
  <MainSection>
    <MainImgWrap img={img} />
    <MainPanel />
  </MainSection>
)

export default HomeMainSection
