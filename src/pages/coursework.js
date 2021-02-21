import React from "react"
import { Helmet } from "react-helmet"

import Coursework from "../components/Coursework"
import Layout from "../components/Layout"

const CourseworkPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Emma Campbell - Coursework</title>
    </Helmet>
    <Coursework/>
  </Layout>
)

export default CourseworkPage;