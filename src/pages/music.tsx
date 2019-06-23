import * as React from 'react'

import FooterLayout from './../components/_partials/FooterLayout'

import * as MusicStyles from './../styles/pages/Press.module.scss'

export default class Music extends React.Component<MusicProps> {
  constructor(props: MusicProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <>
        <main className={ MusicStyles.daymarkmusic }>
          <h1 className={ MusicStyles.musicList }>Music</h1>
          <FooterLayout />
        </main>
      </>
    )
  }
}

interface MusicProps {}
