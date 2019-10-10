import PropTypes from "prop-types"
import React from "react"

const Footer = ({children}) => (
  <footer>
      {children}
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
