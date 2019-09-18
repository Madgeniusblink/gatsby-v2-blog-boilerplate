import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import gatsbyLogo from '../images/gatsby-icon.png'

const HeaderWrapper = styled.div`
  background: #333333;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.3rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper >
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link to="/" >
          <img src={gatsbyLogo} style={{ width: '50px' }} alt="gatsby-logo"/>
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
