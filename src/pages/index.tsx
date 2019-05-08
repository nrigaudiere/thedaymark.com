import { graphql } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'

import * as styles from './Index.module.scss'
import Home from './../components/Home/Home'
import Menu from './../components/_partials/Menu'
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
      <div className={ styles.daymark }>
        <Helmet title="DAYMARK | Electro-Rock" defer={false}>
          <meta property="og:title" content="DAYMARK | Electro-Rock" />
          <meta name="twitter:title" content="DAYMARK | Electro-Rock" />

          <meta property="og:description" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="https://thedaymark.com" />

          <meta name="twitter:description" content="" />
          <meta name="twitter:image:src" content="https://thedaymark.com" />
          <link rel="apple-touch-icon" sizes="57x57" href="assets/images/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="assets/images/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="assets/images/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="assets/images/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="assets/images/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="assets/images/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="assets/images/favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="assets/images/favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="assets/images/favicon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="assets/images/favicon/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon/favicon-16x16.png" />
          <link rel="manifest" href="assets/images/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="assets/images/favicon/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <Menu />
        <Home />
        <Footer />
      </div>
    )
  }
}
