import * as React from 'react'

import { Head } from './../components/_partials/Head'
import FooterLayout from './../components/_partials/FooterLayout'

import * as MusicStyles from './../styles/pages/Music.module.scss'

export default class Music extends React.Component<MusicProps> {
  constructor(props: MusicProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <>
        <Head title="Music"/>
        <main className={ MusicStyles.daymarkmusic }>
          <h1 className={ MusicStyles.musicList }>Music</h1>
        </main>
        <FooterLayout />
      </>
    )
  }
}

interface MusicProps {}
