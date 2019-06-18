import * as React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import * as FooterLayoutStyles from './../../styles/_partials/FooterLayout.module.scss'

export default class FooterLayout extends React.Component<FooterLayoutProps> {
  constructor(props: FooterLayoutProps) {
    super(props)
  }

  public render(): JSX.Element {
    const now = Date.now()

    return (
      <footer className={ FooterLayoutStyles.footerLayout }>
        <span className={ FooterLayoutStyles.back }>
          <AniLink to="/" fade duration={ 1.5 }>
            <svg className={ FooterLayoutStyles.backArrow } fill="currentColor" enableBackground="new 0 0 16 16" height="16" viewBox="0 0 64 64" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="m44.586 2.586-28 28c-.781.781-.781 2.047 0 2.828l28 28 2.828-2.828-26.585-26.586 26.585-26.586z"/>
            </svg>
            Back
          </AniLink>
        </span>
        <span className={ FooterLayoutStyles.copyright }>
          Copyright © { new Date(now).getFullYear() } DAYMARK
        </span>
      </footer>
    )
  }
}

interface FooterLayoutProps {}
