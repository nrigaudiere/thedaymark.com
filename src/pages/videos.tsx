import * as React from 'react'
import ReactPlayer from 'react-player'

import { Head } from './../components/_partials/Head'
import FooterLayout from './../components/_partials/FooterLayout'

import * as VideoStyles from './../styles/pages/Video.module.scss'

export default class Videos extends React.Component<VideosProps> {
  constructor(props: VideosProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <>
        <Head title="Videos"/>
        <main className={ VideoStyles.daymarkvideo }>
          <h1>Videos</h1>
          <div className={ VideoStyles.videoList }>
            <ReactPlayer className={ VideoStyles.videoElement } url="https://www.youtube.com/watch?v=l04bv5F6bJI" controls width="45%" height="auto"/>
            <ReactPlayer className={ VideoStyles.videoElement } url="https://www.youtube.com/watch?v=FisQ3uGdmJY" controls width="45%" height="auto"/>
            <ReactPlayer className={ VideoStyles.videoElement } url="https://www.youtube.com/watch?v=yF1IwcBd5kU" controls width="45%" height="auto"/>
          </div>
        </main>
        <FooterLayout />
      </>
    )
  }
}

interface VideosProps {}
