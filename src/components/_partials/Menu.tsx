import * as React from 'react'
import { Link } from 'gatsby'

import * as MenuStyles from './../../styles/_partials/Menu.module.scss'

export default class Menu extends React.Component<MenuProps> {
  constructor(props: MenuProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <aside className={ MenuStyles.menu }>
        <Link to="/bio">Bio</Link>
        <Link to="/music">Music</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/images">Images</Link>
      </aside>
    )
  }
}

interface MenuProps {}
