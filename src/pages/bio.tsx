import * as React from 'react'

export default class Bio extends React.Component<BioProps> {
  constructor(props: BioProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <main>
        <p>
        DAYMARK was born with the meeting of 2 musicians/producers coming from the electro-pop Paris scene and the film music business (through the signing of several soundtracks for Netflix, M6...).
Developing an electro & soaring music with pop influences, reinforced by dense electronic sounds, they offer an "electro / post-pop" music, served bya very strong imagery of cinema, reveries & surrealism.
With a first EP (2017), several concerts in Paris and a signature within the Gum Club (alongside LAAKE, VIMALA or FORM) the duo unveiled two singles in 2018 -
"Massive" & "Looking Above" - as well as a live version of this last track shot at the Arab World Institute in Paris.
Daymark will realease on 17.04.19 the clip of "Reaching", the first single from the second EP of the group to be released in mid-June.
        </p>
      </main>
    )
  }
}

interface BioProps {}
