import React from 'react'
import MainSection from '../MainSection/MainSection'
import MainImgWrap from '../MainImgWrap/MainImgWrap'
import MainPanel from '../MainPanel/MainPanel'
import img from '../../images/NinMain.png'

const HomeMainSection = () => (
  <MainSection backgroundImg={img}>
    <MainImgWrap>
      <img style={{ width: '100%' }} src={img} alt="Nin panorama" />
    </MainImgWrap>
    <MainPanel />
  </MainSection>
)

export default HomeMainSection
