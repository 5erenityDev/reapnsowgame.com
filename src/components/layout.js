import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `)
    return (
        <div className={container}>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <main>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
        </div>
    )
}

export default Layout