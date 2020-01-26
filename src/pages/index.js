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

// TODO: put DesktopNav comp into Layout component?
const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <DesktopNav>
        <DesktopNavContent />
      </DesktopNav>
      <WhiteBox top>
        <Image src={LogoText} width="120px" />
      </WhiteBox>
      <HomeMainSection />
      <Link to="/weather">Go to Weather</Link>
    </>
  )
}

export default IndexPage
