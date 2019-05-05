import { graphql } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'

import * as styles from './Index.module.scss'
import Home from './../components/Home/Home'
import Footer from './../components/_partials/Footer'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string
        tagline: string
      }
    }
  }
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`

export default class IndexPage extends React.Component<IndexPageProps, {}> {

  public render() {
    const {} = this.props.data.site.siteMetadata

    return (
      <div className={styles.daymark}>
        <Helmet title="DAYMARK" defer={false}>
          <meta property="og:title" content="DAYMARK" />
          <meta name="twitter:title" content="DAYMARK" />

          <meta property="og:description" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="https://thedaymark.com" />

          <meta name="twitter:description" content="" />
          <meta name="twitter:image:src" content="https://thedaymark.com" />
        </Helmet>
        <Home />
        <Footer />
      </div>
    )
  }
}
