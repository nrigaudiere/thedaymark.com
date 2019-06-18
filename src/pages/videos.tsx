import * as React from 'react'

import FooterLayout from './../components/_partials/FooterLayout'

export default class Videos extends React.Component<VideosProps> {
  constructor(props: VideosProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <main>
        <h1>Videos</h1>
        <FooterLayout />
      </main>
    )
  }
}

interface VideosProps {}
