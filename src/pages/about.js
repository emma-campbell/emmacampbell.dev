import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import About from "../components/About"

const AboutPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Emma Campbell - About</title>
    </Helmet>
    <About/>
  </Layout>
)

export default AboutPage;