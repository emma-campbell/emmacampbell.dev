import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"

import Hero from "../components/Hero"

import Wave from "../components/Wave"
import UpsideDownWave from "../components/UpsideDownWave"

import About from "../components/About"
import Projects from "../components/Projects"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Emma Campbell</title>
    </Helmet>
    <Hero/>
    <Wave/>
    <About/>
    <UpsideDownWave/>
    <Projects/>
    <Footer/>
  </Layout>
)

export default IndexPage

