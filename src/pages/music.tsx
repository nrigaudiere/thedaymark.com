import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { Head } from './../components/_partials/Head'
import FooterLayout from './../components/_partials/FooterLayout'
import { PlatformEdge } from './../types/Platform'

import * as MusicStyles from './../styles/pages/Music.module.scss'

const musicPlatforms = graphql`
  query PlatformsQuery {
    platforms: allPlatformsJson {
      edges {
        node {
          id
          link
          imageURL
        }
      }
    }
  }
`

export default class Music extends React.Component<MusicProps> {
  constructor(props: MusicProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <StaticQuery
        query={ musicPlatforms }
        render= {
          data => (
            <>
              <Head title="Music"/>
              <main className={ MusicStyles.daymarkmusic }>
                <h1>Music</h1>
                <div className={ MusicStyles.musicList }>
                  {
                    data.platforms.edges.map((articleEdge: PlatformEdge) => (
                      <div className={ MusicStyles.musicItem }>
                        <a href={ articleEdge.node.link } target="_blank">
                          <img src={ articleEdge.node.imageURL } alt={ articleEdge.node.id }/>
                        </a>
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

interface MusicProps {}
