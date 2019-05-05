import * as React from 'react'

export default class Images extends React.Component<ImagesProps> {
  constructor(props: ImagesProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <main>
        <h1>Images</h1>
      </main>
    )
  }
}

interface ImagesProps {}
