import * as React from 'react'
import * as styles from './Home.module.scss'

export default class Home extends React.Component<HomeProps> {
  constructor(props: HomeProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <main className={ styles.daymarkhome }>
        <h1 className={ styles.daymarkTitle }>DAYMARK</h1>
        <h2 className={ styles.daymarkSubtitle }>PHARE NEW EP</h2>
      </main>
    )
  }
}

interface HomeProps {}
