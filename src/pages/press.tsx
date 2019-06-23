import * as React from 'react'

import FooterLayout from './../components/_partials/FooterLayout'

import * as PressStyles from './../styles/pages/Press.module.scss'

export default class Press extends React.Component<PressProps> {
  constructor(props: PressProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <>
        <main className={ PressStyles.daymarkpress }>
          <h1>Press</h1>
          <div className={ PressStyles.pressList }>
          </div>
        </main>
        <FooterLayout />
      </>
    )
  }
}

interface PressProps {}
