import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { Head } from './../components/_partials/Head'
import FooterLayout from './../components/_partials/FooterLayout'
import { ArticleEdge } from './../types/Article'

import * as PressStyles from './../styles/pages/Press.module.scss'

const articles = graphql`
  query ArticlesQuery {
    articles: allArticlesJson {
      edges {
        node {
          id
          blockquote
          link
          imageURL
        }
      }
    }
  }
`

export default class Press extends React.Component<PressProps> {
  constructor(props: PressProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <StaticQuery
        query={ articles }
        render= {
          data => (
            <>
              <Head title="Press"/>
              <main className={ PressStyles.daymarkpress }>
                <h1>Press</h1>
                <div className={ PressStyles.pressList }>
                  {
                    data.articles.edges.map((articleEdge: ArticleEdge) => (
                      <div className={ PressStyles.pressItem }>
                        <a href={ articleEdge.node.link } target="_blank" rel="noopener noreferrer">
                          <img src={ articleEdge.node.imageURL } alt={ articleEdge.node.id }/>
                        </a>
                        <blockquote id={ articleEdge.node.id }
                                    key={ articleEdge.node.id }>
                                    { articleEdge.node.blockquote }
                        </blockquote>
                      </div>
                    ))
                  }
                </div>
              </main>
              <FooterLayout />
            </>
          )
        }/>
    )
  }
}

interface PressProps {
  data: {
    articles: {
      edges: ArticleEdge[]
    }
  }
}
