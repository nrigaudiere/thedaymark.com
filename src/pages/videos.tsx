import * as React from 'react'
import ReactPlayer from 'react-player'

import FooterLayout from './../components/_partials/FooterLayout'

export default class Videos extends React.Component<VideosProps> {
  constructor(props: VideosProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <main>
        <h1>Videos</h1>
        <ReactPlayer url="https://www.youtube.com/watch?v=FisQ3uGdmJY" controls/>
        <FooterLayout />
      </main>
    )
  }
}

interface VideosProps {}
