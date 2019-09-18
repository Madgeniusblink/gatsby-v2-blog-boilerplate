import React, { Component } from 'react'
import Layout from './layout'
import { graphql } from 'gatsby'

export default class postLayout extends Component {
    render() {
        const { markdownRemark } = this.props.data
        const { location } = this.props


        return (
            <Layout location={location}>
                <div>
                    <h1>{markdownRemark.frontmatter.title}</h1>
                    <p>{markdownRemark.frontmatter.date}</p>
                    <div dangerouslySetInnerHTML={{
                        __html: markdownRemark.html
                        }} 
                    />
                </div>
            </Layout>
        )
    }
}

// # $slug comes from context: which comes from gatsby-node.js createPage()
export const data = graphql`
    query PostQuery($slug:String!) {
        markdownRemark(frontmatter: {
            slug: {
            eq: $slug
            }
            
        }) {
            frontmatter {
                title
                date(formatString: "MMM DD, YYYY")
                slug
        }
            excerpt
            html
        }
    }
`