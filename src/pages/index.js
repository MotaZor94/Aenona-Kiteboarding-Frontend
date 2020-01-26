import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Logo from '../static/Tekst.png'
// will go as prop

// import Img from "gatsby-image"
// import Layout from '../components/layout'
// import Image from "../components/image"
import SEO from '../components/seo'
// import Logo from "../static/main.png"
import '../static/global.css'
import HomeMainSection from '../components/HomeMainSection/HomeMainSection'
import WhiteBox from '../components/WhiteBox/WhiteBox'
import Image from '../components/Image/Image'
import LogoText from '../static/Tekst.png'
import DesktopNav from '../components/DesktopNav/DesktopNav'
import DesktopNavContent from '../components/DesktopNav/DesktopNavContent'
import FlexWrapper from '../components/FlexWrapper/FlexWrapper'

import WeatherImg from '../static/Weather.png'
import AboutImg from '../static/About.png'
import RentalsImg from '../static/Rental.png'
import LocationImg from '../static/Location.png'
import LogoHorizontal from '../static/Logo_horiz_w.png'
import LogoImg from '../static/logo.png'

// TODO: put DesktopNav comp into Layout component?
const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <DesktopNav>
        <DesktopNavContent />
      </DesktopNav>
      <WhiteBox top padded>
        <Image src={LogoText} width="120px" />
      </WhiteBox>
      <WhiteBox padded>
        <FlexWrapper spaceevenly>
          <Image src={WeatherImg} width="auto" />
          <Image src={LocationImg} width="auto" />
          <Image src={LogoImg} width="auto" />
          <Image src={AboutImg} width="auto" />
          <Image src={RentalsImg} width="auto" />
        </FlexWrapper>
      </WhiteBox>
      <HomeMainSection />
    </>
  )
}

export default IndexPage
