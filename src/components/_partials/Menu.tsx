import * as React from 'react'
import { Link } from 'gatsby'

import * as MenuStyles from './../../styles/_partials/Menu.module.scss'

export default class Menu extends React.Component<MenuProps> {
  constructor(props: MenuProps) {
    super(props)
  }

  public render(): JSX.Element {
    const now = Date.now()

    return (
      <aside className={ MenuStyles.menu }>
        <Link to="/images">Images</Link>
      </aside>
    )
  }
}

interface MenuProps {}
