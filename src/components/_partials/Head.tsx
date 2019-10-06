import * as React from 'react'
import { Helmet } from 'react-helmet'

import { Favicon } from './Favicon'

import { MetaHelper } from '@daymark/helpers/Meta.helper'

export function Head(props: HeadProps): JSX.Element {
  const title = props.title ? `${ props.title } | ${ MetaHelper.SITE_NAME }` : `${ MetaHelper.SITE_NAME } | 'Electro-Rock' }`

  return (
    <Helmet title={ title } defer={false}>
      <meta property="og:title" content={ title } />

      <meta property="og:description" content="" />
      <meta property="og:image" content={ MetaHelper.OG_IMG } />
      <meta property="og:url" content={ MetaHelper.SITE_URL } />

      <meta name="twitter:title" content={ title } />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image:src" content={ MetaHelper.OG_IMG } />
      { Favicon }
    </Helmet>
  )
}

interface HeadProps {
  title?: string
}
