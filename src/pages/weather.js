import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import WeatherMainSection from '../components/WeatherMainSection/WeatherMainSection'

const SecondPage = () => (
  <Layout>
    <SEO title="Weather" />
    <WeatherMainSection />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
