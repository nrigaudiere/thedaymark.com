import * as React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import * as MenuStyles from './../../styles/_partials/Menu.module.scss'

export default class Menu extends React.Component<MenuProps> {
  constructor(props: MenuProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <aside className={ MenuStyles.menu }>
        <AniLink to="/bio" fade duration={ 1.5 } hex="#000000">Bio</AniLink>
        <AniLink to="/music" fade duration={ 1.5 } hex="#000000">Music</AniLink>
        <AniLink to="/videos" fade duration={ 1.5 } hex="#000000">Videos</AniLink>
        <AniLink to="/press" fade duration={ 1.5 } hex="#000000">Press</AniLink>
      </aside>
    )
  }
}

interface MenuProps {}
