import { graphql } from 'gatsby'
import * as React from 'react'

import * as IndexStyles from './../styles/pages/Index.module.scss'

import Home from './../components/Home/Home'
import Menu from './../components/_partials/Menu'
import { Head } from './../components/_partials/Head'
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
      <div className={ IndexStyles.daymark }>
        <Head />
        <Menu />
        <Home />
        <Footer />
      </div>
    )
  }
}
