import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

import Header from "./header"
import Archive from "./archive"

import "./layout.css"
import { Spring } from 'react-spring/renderprops'


const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: {
        regex: "/airbnb-cleaning-services.png/"
      }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Spring 
      from={{height: location.pathname === '/' ? 100 : 200}} 
      to={{height: location.pathname === '/' ? 200 : 100}}>
        {styles => (
          <div style={{ overflow: 'hidden', ...styles}}>
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        )}
      </Spring>
      {/* {location.pathname === '/' &&
        <Img fluid={data.file.childImageSharp.fluid} />
      } */}
      <MainLayout>
          {children}
        <Archive/>
      </MainLayout>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        <p>{data.site.siteMetadata.description}</p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// so build does not break the animation
Layout.defaultProps = {
  location: {},
}

export default Layout
