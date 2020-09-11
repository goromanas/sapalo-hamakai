import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero/Hero"
import About from "../components/About/about"
import Perks from "../components/Perks/perks"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Perks />
  </Layout>
)

export default IndexPage
