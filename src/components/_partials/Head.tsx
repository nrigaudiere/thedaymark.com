import * as React from 'react'
import { Helmet } from 'react-helmet'

import { Favicon } from './Favicon'

import { MetaHelper } from '@daymark/helpers/Meta.helper'

export function Head(props: HeadProps): JSX.Element {
  const title = props.title ? `${ props.title } | ${ MetaHelper.SITE_NAME }` : `${ MetaHelper.SITE_NAME } | Post-Pop`

  return (
    <Helmet title={ title } defer={false}>
      <meta property="og:title" content={ title } />

      <meta property="og:description" content={ MetaHelper.SITE_CONTENT } />
      <meta property="og:image" content={ MetaHelper.SITE_URL + MetaHelper.OG_IMG } />
      <meta property="og:url" content={ MetaHelper.SITE_URL } />

      <meta name="twitter:title" content={ title } />
      <meta name="twitter:description" content={ MetaHelper.SITE_CONTENT } />
      <meta name="twitter:image:src" content={ MetaHelper.SITE_URL + MetaHelper.OG_IMG } />
      { Favicon }
    </Helmet>
  )
}

interface HeadProps {
  title?: string
}
