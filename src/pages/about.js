import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>关于</h1>
    <p>鱼鱼鱼</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
