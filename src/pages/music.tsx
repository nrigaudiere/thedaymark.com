import * as React from 'react'

import FooterLayout from './../components/_partials/FooterLayout'

export default class Music extends React.Component<MusicProps> {
  constructor(props: MusicProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <main>
        <h1>Music</h1>
        <FooterLayout />
      </main>
    )
  }
}

interface MusicProps {}
