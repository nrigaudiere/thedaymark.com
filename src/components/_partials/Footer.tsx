import * as React from 'react'

import * as FooterStyles from './../../styles/_partials/Footer.module.scss'

export default class Footer extends React.Component<FooterProps> {
  constructor(props: FooterProps) {
    super(props)
  }

  public render(): JSX.Element {
    const now = Date.now()

    return (
      <footer className={ FooterStyles.footer }>
        <span className={ FooterStyles.copyright }>
          Copyright © { new Date(now).getFullYear() } DAYMARK
        </span>
      </footer>
    )
  }
}

interface FooterProps {}
