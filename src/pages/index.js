import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Logo from "../static/Tekst.png"
// will go as prop

// import Img from "gatsby-image"
// import Layout from '../components/layout'
// import Image from "../components/image"
import SEO from "../components/seo"
// import Logo from "../static/main.png"
import "../static/global.css"
import HomeMainSection from "../components/HomeMainSection/HomeMainSection"

import WeatherMainSection from "../components/WeatherMainSection/WeatherMainSection"
import WhiteBox from "../components/WhiteBox/WhiteBox"
import Image from "../components/Image/Image"
import LogoText from "../static/Tekst.png"
import DesktopNav from "../components/DesktopNav/DesktopNav"
import LinkWrapper from "../components/LinkWrapper/LinkWrapper"
import FlexWrapper from "../components/FlexWrapper/FlexWrapper"
import WeatherImg from "../static/Weather.png"
import AboutImg from "../static/About.png"
import RentalsImg from "../static/Rental.png"
import LocationImg from "../static/Location.png"
import LogoHorizontal from "../static/Logo_horiz_w.png"
//TODO: NEED TO MOVE THOSE WRAPPERS DIRECT INSIDE OF DESKTOPNAV CAUSE IT LOOKS MESSY
const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <DesktopNav>
        <Image src={LogoHorizontal} width="110px"></Image>
        <LinkWrapper>
          <FlexWrapper>
            <Image src={WeatherImg} width="20px"></Image>
            <Link>Weather</Link>
          </FlexWrapper>
          <FlexWrapper>
            <Image src={RentalsImg} width="20px"></Image>
            <Link>Rentals</Link>
          </FlexWrapper>
          <FlexWrapper>
            <Image src={LocationImg} width="20px"></Image>
            <Link>Location</Link>
          </FlexWrapper>
          <FlexWrapper>
            <Image src={AboutImg} width="20px"></Image>
            <Link>About Us</Link>
          </FlexWrapper>
        </LinkWrapper>
      </DesktopNav>
      <WhiteBox top>
        <Image src={LogoText} width="120px" />
      </WhiteBox>
      <HomeMainSection />
      <WhiteBox></WhiteBox>
      <Link to="/">Go to page 2</Link>
    </>
  )
}

export default IndexPage
