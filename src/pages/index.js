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

import WeatherMainSection from '../components/WeatherMainSection/WeatherMainSection'
import WhiteBox from '../components/WhiteBox/WhiteBox'
import Image from '../components/Image/Image'
import LogoText from '../static/Tekst.png'
import DesktopNav from '../components/DesktopNav/DesktopNav'
import LinkWrapper from '../components/LinkWrapper/LinkWrapper'
import FlexWrapper from '../components/FlexWrapper/FlexWrapper'
import WeatherImg from '../static/Weather.png'
import AboutImg from '../static/About.png'
import RentalsImg from '../static/Rental.png'
import LocationImg from '../static/Location.png'
import LogoHorizontal from '../static/Logo_horiz_w.png'
import LogoImg from '../static/logo.png'
// TODO: NEED TO MOVE THOSE WRAPPERS DIRECT INSIDE OF DESKTOPNAV CAUSE IT LOOKS MESSY
const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <DesktopNav>
        <Image src={LogoHorizontal} width="110px" />
        <LinkWrapper>
          <FlexWrapper>
            <Image src={WeatherImg} width="20px" />
            <Link to="/weather">Weather</Link>
          </FlexWrapper>
          <FlexWrapper>
            <Image src={RentalsImg} width="20px" />
            <Link to="/rentals">Rentals</Link>
          </FlexWrapper>
          <FlexWrapper>
            <Image src={LocationImg} width="20px" />
            <Link to="/location">Location</Link>
          </FlexWrapper>
          <FlexWrapper>
            <Image src={AboutImg} width="20px" />
            <Link to="/about-us">About Us</Link>
          </FlexWrapper>
        </LinkWrapper>
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
