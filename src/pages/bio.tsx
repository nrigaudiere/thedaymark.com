import * as React from 'react'

import { Head } from './../components/_partials/Head'
import FooterLayout from './../components/_partials/FooterLayout'

import * as BioStyles from './../styles/pages/Bio.module.scss'

export default class Bio extends React.Component<BioProps> {
  constructor(props: BioProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <>
        <Head title="Bio"/>
        <main className={ BioStyles.daymarkbio }>
          <h1>Bio</h1>
          <p>
          DAYMARK was born with the meeting of 2 musicians/producers coming from the electro-pop Paris scene and the film music business (through the signing of several soundtracks).
          <br />
          Developing an electro & soaring music with pop influences, reinforced by dense electronic sounds, they offer an "electro / post-pop" music, served by a very strong imagery of cinema, reveries & surrealism.
          <br />
          With a first EP (2017), several concerts in Paris and a signature within the Gum Club (alongside LAAKE, VIMALA or FORM) the duo unveiled two singles in 2018 -
          "Massive" & "Looking Above" - as well as a live version of this last track shot at the Arab World Institute in Paris.
          <br />
          <br />
          In 2019, DAYMARK unveils its second EP "PHARE" (praised by Tsugi, Trax, PWFM or Longueur d'Ondes) focusing on spatial and pop aesthetics. The clip of "Walkers", title taken from this new EP, will conclude on 07.11.2019 the spatial trilogy of the duo started with the clips of "Reaching" and "Spirit".
          </p>
        </main>
        <FooterLayout />
      </>
    )
  }
}

interface BioProps {}
