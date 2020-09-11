/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/header"
import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  {
    wordpressSiteMetadata {
      description
      name
    }
  }
  `)
  return (
    <div className={layoutStyles.layout}>
      <Header siteTitle={data.wordpressSiteMetadata.name} />
      {children}
    </div >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
