import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import WeatherMainSection from '../components/WeatherMainSection/WeatherMainSection'
import DesktopNav from '../components/DesktopNav/DesktopNav'
import DesktopNavContent from '../components/DesktopNav/DesktopNavContent'

const SecondPage = () => (
  <Layout>
    <SEO title="Weather" />
    <DesktopNav>
      <DesktopNavContent />
    </DesktopNav>
    <br />
    <br />
    <br />
    <br />
    <WeatherMainSection />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
