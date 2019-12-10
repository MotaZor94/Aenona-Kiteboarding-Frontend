import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Logo from "../static/main.png"
import "../static/global.css"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image imagesrc={Logo} imagealt={"hello"} />
      </div>
      <Link to="/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
