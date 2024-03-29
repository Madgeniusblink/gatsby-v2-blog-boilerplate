import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'

const POST_ARCHIVE_QUERY = graphql`
    query BlogArchiveQuery {
        allMarkdownRemark(
            limit: 5,
            sort: {
                order: DESC,
                fields: [frontmatter___date]
            }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        slug
                    }
                }
            }
        }
    }
`

const ArchiveList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    a {
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        font-size: 0.8rem;
        text-decoration: underline;
        color: #524763
    }
`

const Archive = () => {
    const data = useStaticQuery(POST_ARCHIVE_QUERY)
    const { allMarkdownRemark } = data

  return (
    <>
      <aside>
            <h3>Archive</h3>
            <ArchiveList>
                {
                    allMarkdownRemark.edges.map((edge) => (
                        <li key={edge.node.frontmatter.slug}> 
                            <Link to={`/posts${edge.node.frontmatter.slug}`}>
                                {edge.node.frontmatter.title} 
                            </Link>
                        </li>
                    ))
                }
            </ArchiveList>
      </aside>
    </>
  )
}


export default Archive






