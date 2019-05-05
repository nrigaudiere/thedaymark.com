import * as React from 'react'
import * as styles from './Home.module.scss'

export default class Home extends React.Component<HomeProps> {
  constructor(props: HomeProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <main className={ styles.daymarkhome }>
        DAYMARK
      </main>
    )
  }
}

interface HomeProps {}
