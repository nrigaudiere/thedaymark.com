import * as React from 'react'

import FooterLayout from './../components/_partials/FooterLayout'

export default class Press extends React.Component<PressProps> {
  constructor(props: PressProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <>
        <main>
          <h1>Press</h1>
        </main>
        <FooterLayout />
      </>
    )
  }
}

interface PressProps {}
