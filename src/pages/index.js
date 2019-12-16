import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

// will go as prop

// import Img from "gatsby-image"
// import Layout from '../components/layout'
// import Image from "../components/image"
import SEO from '../components/seo'
// import Logo from "../static/main.png"
// import "../static/global.css"
import HomeMainSection from '../components/HomeMainSection/HomeMainSection'

import WeatherMainSection from '../components/WeatherMainSection/WeatherMainSection'

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <HomeMainSection />
      <WeatherMainSection />
      <Link to="/">Go to page 2</Link>
    </>
  )
}

export default IndexPage
