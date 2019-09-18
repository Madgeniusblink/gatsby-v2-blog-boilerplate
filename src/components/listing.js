import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'


const Post = styled.article`
    box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;

    a {
        color: black;
        text-decoration: none
    }

    h2 {
        margin-bottom: 0;
    }

    .read-more {
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        font-size: 0.8rem;
        text-decoration: underline;
        color: #524763
    }
`

//  () inside a function means automatic return
// { allMarkdownRemark } destructure from data
const Listing = () => {
    // You can use data variable or destructure data to allMarkdownRemark to make it simpler
    const {allMarkdownRemark} = useStaticQuery(graphql`
        query BlogPostListing {
            allMarkdownRemark(
                limit: 10,
                sort: {
                    order: DESC,
                    fields: [frontmatter___date]
                }
            ) {
                edges {
                    node {
                    excerpt
                        frontmatter {
                            date(formatString: "MMM DD, YYYY")
                            title
                            slug
                        }
                    }
                }
            }
        }
    `)
    return (
        <div>
            {
                allMarkdownRemark.edges.map(edge => (
                        <Post key={edge.node.frontmatter.slug}>
                            <Link to={`/posts${edge.node.frontmatter.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                            </Link>
                            <h5>{edge.node.frontmatter.date}</h5>
                            <p>{edge.node.excerpt}</p>
                            <Link className="read-more" to={`/posts${edge.node.frontmatter.slug}`}>Read More</Link>
                        </Post>
                ))
            }
        </div>
    )
}

export default Listing


