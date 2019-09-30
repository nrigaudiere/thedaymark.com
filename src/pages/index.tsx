import { graphql } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'

import * as styles from './Index.module.scss'
import Home from './../components/Home/Home'
import Menu from './../components/_partials/Menu'
import Footer from './../components/_partials/Footer'
import { Favicon } from './../components/_partials/Favicon'

import { MetaHelper } from '@daymark/helpers/Meta.helper'

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
        <Helmet title={ `${ MetaHelper.SITE_NAME } | Electro-Rock` } defer={false}>
          <meta property="og:title" content={ `${ MetaHelper.SITE_NAME } | Electro-Rock` } />
          <meta name="twitter:title" content={ `${ MetaHelper.SITE_NAME } | Electro-Rock` } />

          <meta property="og:description" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content={ MetaHelper.SITE_URL } />

          <meta name="twitter:description" content="" />
          <meta name="twitter:image:src" content={ MetaHelper.SITE_URL } />
          { Favicon }
        </Helmet>
        <Menu />
        <Home />
        <Footer />
      </div>
    )
  }
}
