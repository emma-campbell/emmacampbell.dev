import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import Hero from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Emma Campbell</title>
    </Helmet>
    <Hero />
  </Layout>
)

export default IndexPage
