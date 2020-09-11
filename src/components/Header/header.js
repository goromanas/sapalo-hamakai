import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from '../Logo/logo'
import MainMenu from '../MainMenu/MainMenu'
import Container from '../Container/container'

import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <div className={headerStyles.header}>
    <Logo />
    <MainMenu />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
