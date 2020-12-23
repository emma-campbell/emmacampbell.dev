import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Nav from "../components/navigation"
import Hero from "../components/hero"
import Footer from "../components/footer"

const IndexPage = () => (
  <div className="main">
    <Nav/>
    <Hero />
    <Footer/>
  </div>
)

export default IndexPage
