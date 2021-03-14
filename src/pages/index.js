import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"

import Hero from "../components/Hero"
import Wave from "../components/Wave"
import About from "../components/About"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Emma Campbell</title>
    </Helmet>
    <Hero/>
    <Wave/>
    <About/>
  </Layout>
)

export default IndexPage

